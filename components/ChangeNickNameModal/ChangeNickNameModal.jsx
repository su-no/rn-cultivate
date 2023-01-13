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
import { updateProfile } from 'firebase/auth';

const ChangeNickNameModal = ({
  setModalVisible,
  modalVisible,
  setNewNickName,
  newNickName,
  user,
}) => {
  const changeNickNameHandler = () => {
    //파이어베이스에서 제공하는 프로필업데이트 함수 authService.current 의 display 키값을 바꿔준다.
    updateProfile(user, { displayName: `${newNickName}` })
      .then(() => {
        alert('닉네임 변경이 완료되었습니다.');
        setModalVisible(!modalVisible);
      })
      .catch((e) => {
        console.log(e);
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
          <ModalText>닉네임 변경</ModalText>
          <TextInput
            autoFocus
            style={{
              width: 205,
              height: 40,
              backgroundColor: LIGHT_GRAY_COLOR,
              paddingLeft: 5,
            }}
            onChangeText={setNewNickName}
            placeholder="닉네임을 입력해주세요."
          ></TextInput>
          <View style={{ flexDirection: 'row' }}>
            <ButtonCancel
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <ButtonText>취소</ButtonText>
            </ButtonCancel>
            <ButtonExecute onPress={changeNickNameHandler}>
              <ButtonText>변경</ButtonText>
            </ButtonExecute>
          </View>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default ChangeNickNameModal;
