import { View } from 'react-native';
import { useQuery } from 'react-query';
import { collection, addDoc } from 'firebase/firestore';
import { authService, dbService } from '../../common/firebase';
import { getReviews } from '../../common/api';
import { getDate } from '../../common/utils';
import * as S from './styles';
import Input from '../Input/Input';
import ReviewItem from '../ReviewItem/ReviewItem';
import Loader from '../Loader/Loader';

export default function ReviewContainer({ title }) {
  // firebase 현재 유저 정보
  const user = authService.currentUser;
  const nickname = user.displayName;

  const { isLoading, data: reviewData } = useQuery('reviews', () =>
    getReviews(title),
  );

  // firebase에 리뷰 추가하는 함수
  const addReview = async (content) => {
    const review = {
      title,
      content, // input에 입력한 내용
      nickname, // firebase - currentUser displayName
      date: Date.now(),
    };

    try {
      await addDoc(collection(dbService, 'reviews'), review);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <S.Container>
      <View>
        <S.Title>후기 & 기대평</S.Title>
        <Input addReview={addReview} />
        {reviewData.map(({ id, content, nickname, date }) => (
          <ReviewItem
            key={id}
            content={content}
            nickname={nickname}
            date={getDate(date)}
          />
        ))}
      </View>
    </S.Container>
  );
}
