import styled from '@emotion/native';
import { BLACK_COLOR } from '../../common/colors';

export const Input = styled.TextInput`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? '#e8e8e8' : 'transparent'};
  border-width: 1px;
  border-radius: 5px;
  border-color: ${BLACK_COLOR};
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
`;
