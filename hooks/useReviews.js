import { useMutation, useQueryClient } from 'react-query';
import { createReview, deleteReview, updateReview } from '../common/api';

const useReviews = () => {
  const queryClient = useQueryClient();

  const mutationAdd = useMutation(createReview, {
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
      queryClient.invalidateQueries('myreviews');
    },
  });

  const mutationDelete = useMutation(deleteReview, {
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
      queryClient.invalidateQueries('myreviews');
    },
  });

  const mutationUpdate = useMutation(updateReview, {
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
      queryClient.invalidateQueries('myreviews');
    },
  });

  return [mutationAdd.mutate, mutationDelete.mutate, mutationUpdate.mutate];
};

export default useReviews;
