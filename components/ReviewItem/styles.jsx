import styled from '@emotion/native';
import { BLACK_COLOR, GRAY_COLOR } from '../../common/colors';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const EditInput = styled.TextInput`
  border-width: 1px;
  border-radius: 4px;
  padding: 5px 10px;
  border-color: ${BLACK_COLOR};
  font-size: 16px;
  margin-bottom: 5px;
`;

export const AboveLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${GRAY_COLOR};
`;

export const TextBlack = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${BLACK_COLOR};
`;

export const TextGray = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
  color: ${GRAY_COLOR};
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
