import { useState } from 'react';
import { Alert } from 'react-native';
import { authService } from '../../common/firebase';
import { GRAY_COLOR } from '../../common/colors';
import * as S from './styles';

export default function Input({ addReview }) {
  const [content, setContent] = useState('');
  const user = authService.currentUser;

  const onSubmit = async () => {
    console.log('submit', content);
    // 유효성 검사
    if (content.trim() === '') {
      Alert.alert('내용을 입력하세요.');
      setContent('');
      return;
    }
    await addReview(content);
    setContent('');
  };

  return (
    <>
      {!user ? (
        <S.Input
          onPressOut={() => console.log('로그인 페이지로 이동')}
          placeholder="로그인이 필요한 서비스입니다."
          placeholderTextColor={GRAY_COLOR}
          backgroundColor="#e8e8e8"
          editable={false}
        />
      ) : (
        <S.Input
          value={content}
          onChangeText={setContent}
          onSubmitEditing={onSubmit}
          placeholder="내용을 입력하세요."
          maxLength={50}
        />
      )}
    </>
  );
}
