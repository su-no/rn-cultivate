import styled from '@emotion/native';

export const Container = styled.View`
  margin: 20px 20px 0px 20px;
  padding-bottom: 50px;
`;

export const Title = styled.Text`
  word-break: break-all;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 14px;
  color: ${(props) => props.theme.color.common};
`;
