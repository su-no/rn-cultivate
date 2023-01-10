import react from 'react';
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
import { sendPasswordResetEmail } from 'firebase/auth';
import { authService } from '../../common/firebase';

const ResetPasswordModal = ({
  setModalVisible,
  modalVisible,
  email,
  setEmail,
}) => {
  const passwordResetHandler = () => {
    sendPasswordResetEmail(authService, email)
      .then(() => {
        alert('전송완료 이메일을 확인해주세요!');
        setModalVisible(!modalVisible);
      })
      .catch((e) => {
        console.log(e);
        if (e.message.includes('user-not-found')) {
          alert('등록된 이메일이 아닙니다.');
        }
        if (e.message.includes('invalid-email')) {
          alert('올바른 형식이 아닙니다.');
        }
      });
  };

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
          <ModalText>비밀번호 재설정</ModalText>
          <TextInput
            autoFocus
            style={{
              width: 205,
              height: 40,
              backgroundColor: LIGHT_GRAY_COLOR,
              paddingLeft: 5,
            }}
            onChangeText={setEmail}
            placeholder="이메일을 입력해주세요."
          ></TextInput>
          <View style={{ flexDirection: 'row' }}>
            <ButtonCancel
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <ButtonText>취소</ButtonText>
            </ButtonCancel>
            <ButtonExecute onPress={passwordResetHandler}>
              <ButtonText>전송</ButtonText>
            </ButtonExecute>
          </View>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default ResetPasswordModal;
