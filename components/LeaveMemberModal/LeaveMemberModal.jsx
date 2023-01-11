import React from 'react';
import { LIGHT_GRAY_COLOR, BLUE_COLOR, PINK_COLOR } from '../../common/colors';
import {
  Alert,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';

const LeaveMemberModal = ({
  modalVisible,
  setModalVisible,
  setPassword,
  user,
  password,
}) => {
  const navigation = useNavigation();

  const deleteUserHandler = () => {
    const credential = EmailAuthProvider.credential(user.email, password);
    reauthenticateWithCredential(user, credential)
      .then(() => {
        deleteUser(user)
          .then(() => {
            setModalVisible(!modalVisible);
            alert('회원탈퇴가 완료되었습니다.');
            navigation.navigate('Tabs', { screen: 'Main' });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((e) => {
        console.log(e);
        alert('비밀번호가 틀렸습니다.');
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
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>회원탈퇴</Text>
          <TextInput
            autoFocus
            secureTextEntry={true}
            style={{
              width: 205,
              height: 40,
              backgroundColor: LIGHT_GRAY_COLOR,
              paddingLeft: 5,
            }}
            onChangeText={setPassword}
            placeholder="비밀번호를 입력해주세요."
          ></TextInput>
          <View style={{ flexDirection: 'row' }}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>취소</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={deleteUserHandler}
            >
              <Text style={styles.textStyle}>탈퇴</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    margin: 2,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonOpen: {
    backgroundColor: PINK_COLOR,
  },
  buttonClose: {
    backgroundColor: BLUE_COLOR,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default LeaveMemberModal;
