import { authService } from '../../common/firebase';

import * as S from './styles';

import Input from '../Input/Input';
import ReviewItem from '../ReviewItem/ReviewItem';
import useReviews from '../../hooks/useReviews';

export default function ReviewContainer({ title, reviewData }) {
  const [addReview, deleteReview, updateReview] = useReviews();

  const handleAdd = (content) => {
    // firebase 현재 유저 정보
    const user = authService.currentUser;
    const { displayName: nickname, uid } = user;
    addReview({ title, content, nickname, date: Date.now(), uid });
  };

  return (
    <S.Container>
      <S.Title>후기 & 기대평</S.Title>
      <Input addReview={handleAdd} />
      {reviewData.map((data) => (
        <ReviewItem
          key={data.id}
          id={data.id}
          data={data}
          deleteReview={deleteReview}
          updateReview={updateReview}
        />
      ))}
    </S.Container>
  );
}
