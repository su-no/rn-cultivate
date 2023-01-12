import styled from '@emotion/native';
import {
  DARK_GRAY_COLOR,
  GRAY_COLOR,
  LIGHT_GRAY_COLOR,
} from '../../common/colors';

export const Container = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${GRAY_COLOR};
`;

export const EditInput = styled.TextInput`
  border-width: 1px;
  border-radius: 4px;
  margin-right: 10px;
  padding: 2px 10px;
  font-size: 14px;
  margin-bottom: 10px;
  color: ${DARK_GRAY_COLOR};
  border-color: ${(props) => props.theme.color.common};
  background-color: ${(props) => props.theme.color.common};
`;

export const TextBlack = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color.common};
`;

export const TextGray = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${GRAY_COLOR};
`;

export const Buttons = styled.Pressable`
  position: absolute;
  right: 26px;
  top: 2px;
  border: 1px solid ${LIGHT_GRAY_COLOR};
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.8);
`;
