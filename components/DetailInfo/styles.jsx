import styled from '@emotion/native';

export const DescriptionText = styled.Text`
  word-break: break-all;
  font-size: 15px;
  flex-shrink: 1;
  font-weight: 500;
  color: ${(props) => props.theme.color.common};
  margin-top: 4px;
`;
