import { View } from 'react-native';
import Input from '../Input/Input';
import ReviewItem from '../ReviewItem/ReviewItem';
import * as S from './styles';

export default function ReviewContainer() {
  // TODO: firebase에서 Review 데이터를 받아와서 ReviewItem에 넘겨줌

  return (
    <S.Container>
      <View>
        <S.Title>후기 & 기대평</S.Title>
        <Input />
        <ReviewItem
          content="너무 기대돼요."
          nickname="고양이"
          date="2023-01-08"
        />
        <ReviewItem
          content="너무 기대돼요."
          nickname="고양이"
          date="2023-01-08"
        />
        <ReviewItem
          content="너무 기대돼요."
          nickname="고양이"
          date="2023-01-08"
        />
      </View>
    </S.Container>
  );
}
