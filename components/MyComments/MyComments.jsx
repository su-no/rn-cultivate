import React from 'react';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { getMyReviews } from '../../common/api';
import { authService } from '../../common/firebase';
import { getDate } from '../../common/utils';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import {
  CommentBox,
  CommentContainer,
  CommentHeader,
  CommentTitle,
  CommentHeaderTitle,
  CommentContent,
  CommentDate,
} from './style';

const MyComments = () => {
  const { navigate } = useNavigation();
  const uid = authService.currentUser.uid;

  const { data, isLoading, isError } = useQuery({
    // firebase에서 내가 작성한 리뷰 데이터 받아오는 함수
    queryKey: 'myreviews',
    queryFn: () => getMyReviews(uid),
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error message="Error" />;

  return (
    <CommentContainer>
      <CommentHeader>
        <CommentHeaderTitle>내가 작성한 댓글</CommentHeaderTitle>
      </CommentHeader>
      {/* 댓글 목록 */}
      {data.map(({ id, title, content, date }) => (
        <CommentBox
          key={id}
          // 클릭하면 공연 상세페이지로 이동
          onPress={() => {
            navigate('Stack', {
              screen: 'Detail',
              params: { title },
            });
          }}
        >
          <CommentTitle>{title}</CommentTitle>
          <CommentContent>{content}</CommentContent>
          <CommentDate>{getDate(date)}</CommentDate>
        </CommentBox>
      ))}
    </CommentContainer>
  );
};

export default MyComments;
