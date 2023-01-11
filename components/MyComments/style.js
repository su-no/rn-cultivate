import styled from '@emotion/native';
const CommentContainer = styled.View`
  margin-top: 10px;
`;
const CommentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const CommentHeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 3px;
`;
const CommentBox = styled.View`
  border: 1px solid #cccccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const CommentTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
  padding-bottom: 10px;
`;

const CommentContent = styled.Text`
  font-size: 13px;
  padding-bottom: 3px;
  margin-left: 3px;
`;
const CommentDate = styled.Text`
  color: gray;
  margin-left: 3px;
`;

export {
  CommentContainer,
  CommentHeader,
  CommentHeaderTitle,
  CommentBox,
  CommentTitle,
  CommentContent,
  CommentDate,
};
