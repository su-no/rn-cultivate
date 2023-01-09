import { useState } from 'react';
import { TextInput } from 'react-native';
import { BLACK_COLOR } from '../../common/colors';

export default function Input({ addReview }) {
  const [content, setContent] = useState('');

  return (
    <TextInput
      value={content}
      onChangeText={setContent}
      onSubmitEditing={() => {
        addReview(content);
        setContent('');
      }}
      placeholder="내용을 입력하세요."
      style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: BLACK_COLOR,
        padding: 10,
        fontSize: 15,
        marginBottom: 20,
      }}
    />
  );
}
