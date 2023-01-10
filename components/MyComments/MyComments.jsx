import React from 'react';
import { ScrollView } from 'react-native';
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
  return (
    <CommentContainer>
      <CommentHeader>
        <CommentHeaderTitle>내가 작성한 댓글</CommentHeaderTitle>
      </CommentHeader>
      <CommentBox>
        <CommentTitle>판소리 어쩌고 저쩌고...</CommentTitle>
        <CommentContent>판소리 너무 좋아!</CommentContent>
        <CommentDate>2022-01-16</CommentDate>
      </CommentBox>
    </CommentContainer>
  );
};

export default MyComments;
