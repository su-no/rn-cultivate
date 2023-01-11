import { Text } from 'react-native';
import * as S from './styles';

export default function Error({ message }) {
  return (
    <S.Container>
      <Text>{message}</Text>
    </S.Container>
  );
}
