import react, { useState } from 'react';
import { TextInput, View, Modal } from 'react-native';
import {
  CenteredView,
  ButtonCancel,
  ButtonExecute,
  ButtonText,
  ModalText,
  ModalView,
} from './style';
import { LIGHT_GRAY_COLOR } from '../../common/colors';
import styled from '@emotion/native';
import { BLUE_COLOR, PINK_COLOR } from '../../common/colors';

const ModalForm = () => {
  //모달 스위치 역할을 하는 state입니다.
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('modal');
        setModalVisible(!modalVisible);
      }}
    >
      <CenteredView>
        <ModalView>
          <ModalText>제목</ModalText>
          <TextInput
            autoFocus
            style={{
              width: 205,
              height: 40,
              backgroundColor: LIGHT_GRAY_COLOR,
              paddingLeft: 5,
            }}
            onChangeText={setNewNickName}
            placeholder="플레이스 홀더입니다."
          ></TextInput>
          <View style={{ flexDirection: 'row' }}>
            <ButtonCancel
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <ButtonText>취소</ButtonText>
            </ButtonCancel>
            <ButtonExecute>
              <ButtonText>변경</ButtonText>
            </ButtonExecute>
          </View>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default ModalForm;

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
