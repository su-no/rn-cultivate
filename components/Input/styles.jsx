import styled from '@emotion/native';

export const Input = styled.TextInput`
  background-color: ${(props) =>
    props.editable ? props.theme.color.input : props.theme.color.inputDisabled};
  border-width: 1px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.color.common};
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
`;
