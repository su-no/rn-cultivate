import { View } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { authService } from '../../common/firebase';
import { createReview, deleteReview, updateReview } from '../../common/api';
import * as S from './styles';
import Input from '../Input/Input';
import ReviewItem from '../ReviewItem/ReviewItem';

export default function ReviewContainer({ title, reviewData }) {
  const queryClient = useQueryClient();

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
    // firebase 현재 유저 정보
    const user = authService.currentUser;
    const { displayName: nickname, uid } = user;
    mutationAdd.mutate({ title, content, nickname, date: Date.now(), uid });
  };

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
            deleteReview={mutationDelete.mutate}
            updateReview={mutationUpdate.mutate}
          />
        ))}
      </View>
    </S.Container>
  );
}
