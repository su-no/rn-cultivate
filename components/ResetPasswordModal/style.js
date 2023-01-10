import styled from '@emotion/native';
import { BLUE_COLOR, PINK_COLOR } from '../../common/colors';

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;
const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;
const ButtonCancel = styled.Pressable`
  margin: 2px;
  padding: 10px;
  width: 100px;
  background-color: ${BLUE_COLOR};
`;
const ButtonExecute = styled.Pressable`
  margin: 2px;
  padding: 10px;
  width: 100px;
  background-color: ${PINK_COLOR};
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export {
  CenteredView,
  ModalView,
  ModalText,
  ButtonCancel,
  ButtonExecute,
  ButtonText,
};
