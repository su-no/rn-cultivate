import { TextInput } from 'react-native';
import { BLACK_COLOR } from '../../common/colors';

export default function Input() {
  return (
    <TextInput
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
