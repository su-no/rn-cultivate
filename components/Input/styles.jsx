import styled from '@emotion/native';

export const Input = styled.TextInput`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? '#e8e8e8' : 'transparent'};
  border-width: 1px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.color.common};
  background-color: ${(props) => props.theme.color.common};
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
`;
