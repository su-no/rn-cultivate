import {
  Alert,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import {
  ProfileBox,
  ProfileButton,
  ProfileButtonText,
  ProfileContainer,
  ProfileContents,
  ProfileDetailBox,
  ProfileDetailContents,
  ProfileDetailTitle,
  ProfileHeader,
  ProfileHeaderBtns,
  ProfileImg,
  ProfileImgBox,
  ProfileNickName,
  ProfileNickNameBox,
  ProfileTitle,
} from './style';
import { authService } from '../../common/firebase';
import { useNavigation } from '@react-navigation/native';
import {
  deleteUser,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { useState } from 'react';
import { GRAY_COLOR, BLUE_COLOR, PINK_COLOR } from '../../common/colors';

function Profile() {
  const navigation = useNavigation();
  const user = authService.currentUser;
  const [password, setPassword] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const logOutHandler = () => {
    Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '확인',
        style: 'destructive',
        onPress: () => {
          signOut(authService)
            .then(() => {
              alert('로그아웃 완료되었습니다. 메인화면으로 이동합니다.');
              navigation.navigate('Tabs', { screen: 'Main' });
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
    ]);
  };

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
      });
  };
  return (
    <ProfileContainer>
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
            <Text style={styles.modalText}>비밀번호 확인</Text>
            <TextInput
              secureTextEntry={true}
              style={{
                width: 200,
                height: 40,
                backgroundColor: GRAY_COLOR,
              }}
              onChangeText={setPassword}
            ></TextInput>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={deleteUserHandler}
            >
              <Text style={styles.textStyle}>회원탈퇴</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>취소</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ProfileHeader>
        <ProfileTitle>프로필</ProfileTitle>
        <ProfileHeaderBtns>
          <ProfileButton onPress={logOutHandler}>
            <ProfileButtonText>로그아웃</ProfileButtonText>
          </ProfileButton>
          <ProfileButton
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <ProfileButtonText color={'red'}>회원탈퇴</ProfileButtonText>
          </ProfileButton>
        </ProfileHeaderBtns>
      </ProfileHeader>
      <ProfileBox>
        <ProfileContents direction={'row'}>
          <ProfileImgBox>
            <ProfileImg source={require('../../assets/ticket.png')} />
          </ProfileImgBox>
          <ProfileNickNameBox>
            <ProfileNickName>{user?.displayName}님</ProfileNickName>
            <ProfileButton>
              <Text>닉네임 변경</Text>
            </ProfileButton>
          </ProfileNickNameBox>
        </ProfileContents>
        <ProfileContents direction={'column'}>
          <ProfileDetailBox>
            <ProfileDetailTitle></ProfileDetailTitle>
            <Text>{user?.email}</Text>
          </ProfileDetailBox>
          <ProfileDetailBox style={{ display: 'none' }}>
            <ProfileDetailTitle>현재 비밀번호</ProfileDetailTitle>
            <ProfileDetailContents>
              <Text>비밀번호를 입력해주세요.</Text>
            </ProfileDetailContents>
          </ProfileDetailBox>
          <ProfileDetailBox style={{ display: 'none' }}>
            <ProfileDetailTitle>신규 비밀번호</ProfileDetailTitle>
            <ProfileDetailContents>
              <Text>비밀번호를 입력해주세요.</Text>
            </ProfileDetailContents>
          </ProfileDetailBox>
          <ProfileDetailBox
            style={{
              flexDirection: 'row-reverse',
              marginRight: 50,
              paddingBottom: 40,
            }}
          >
            <ProfileButton>
              <Text>비밀번호 변경</Text>
            </ProfileButton>
          </ProfileDetailBox>
        </ProfileContents>
      </ProfileBox>
    </ProfileContainer>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Profile;
