import { View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { authService } from '../../common/firebase';
import {
  createReview,
  deleteReview,
  getReviews,
  updateReview,
} from '../../common/api';
import * as S from './styles';
import Input from '../Input/Input';
import ReviewItem from '../ReviewItem/ReviewItem';
import Loader from '../Loader/Loader';

export default function ReviewContainer({ title }) {
  // firebase 현재 유저 정보
  const user = authService.currentUser;
  const { displayName: nickname, uid } = user;

  const queryClient = useQueryClient();

  // firebase에서 리뷰 데이터 받아오는 함수
  const { isLoading, data: reviewData } = useQuery('reviews', () =>
    getReviews(title),
  );

  // firebase에 리뷰 데이터 추가하는 함수
  const mutationAdd = useMutation(createReview, {
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
    },
  });

  const mutationDelete = useMutation(deleteReview, {
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
    },
  });

  const mutationUpdate = useMutation(updateReview, {
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
    },
  });

  const handleAdd = (content) => {
    mutationAdd.mutate({ title, content, nickname, date: Date.now(), uid });
  };

  const handleDelete = (id) => {
    mutationDelete.mutate(id);
  };

  // ! 이상함
  const handleUpdate = (id, content) => {
    mutationUpdate.mutate(id, content);
  };

  if (isLoading) return <Loader />;

  return (
    <S.Container>
      <View>
        <S.Title>후기 & 기대평</S.Title>
        <Input addReview={handleAdd} />
        {reviewData.map((data) => (
          <ReviewItem
            key={data.id}
            id={data.id}
            data={data}
            deleteReview={handleDelete}
            updateReview={handleUpdate}
          />
        ))}
      </View>
    </S.Container>
  );
}
