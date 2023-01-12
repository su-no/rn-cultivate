import { ActivityIndicator } from 'react-native';
import * as S from './styles';

export default function Loader() {
  return (
    <S.Container>
      <ActivityIndicator size="large" />
    </S.Container>
  );
}
