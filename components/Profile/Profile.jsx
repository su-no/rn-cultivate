import { Alert, Text, View } from 'react-native';
import {
  ChangePwBox,
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
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useState } from 'react';
import LeaveMemberModal from '../LeaveMemberModal/LeaveMemberModal';
import ChangeNickNameModal from '../ChangeNickNameModal/ChangeNickNameModal';
function Profile() {
  const navigation = useNavigation();
  const user = authService.currentUser;
  authService.languageCode = 'ko';
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkNewPassword, setCheckNewPassword] = useState(null);
  const [dp, setDp] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDp, setModalDp] = useState(false);
  const [newNickName, setNewNickName] = useState('');

  const checkNewPasswordHandler = newPassword === checkNewPassword;

  const logOutHandler = () => {
    Alert.alert(null, '로그아웃 하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '확인',
        style: 'destructive',
        onPress: () => {
          //사용자가 확인 버튼을 누르면 로그아웃이 실행됨.
          signOut(authService)
            .then(() => {
              alert('로그아웃 완료되었습니다.');
              // 얼럿메시지 이후 메인페이지로 이동됨
              navigation.navigate('Tabs', { screen: 'Main' });
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
    ]);
  };

  const changePwHandler = () => {
    //  비밀번호 확인작업, 여권을 만든다고 생각하면됨
    const credential = EmailAuthProvider.credential(user.email, password);
    //비밀번호 변경을 위한 사용자 재인증 함수
    // password를 state로 받아와서 firebase 서버에 있는 비밀번호와 일치 하는지 대조한다. (여권이 진짜인지 확인)
    reauthenticateWithCredential(user, credential)
      .then(() => {
        //재인증이 성공하면 아래 함수 실행
        if (checkNewPasswordHandler) {
          // 파이어베이스에서 제공하는 updatePassword 함수
          updatePassword(user, newPassword)
            .then(() => {
              alert('비밀번호 변경이 완료되었습니다.');
              setDp(false);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          Alert.alert('신규 비밀번호', '입력한 비밀번호가 일치하지 않습니다.');
        }
      })

      .catch((e) => {
        if (e.message.includes('wrong-password')) {
          Alert.alert('현재 비밀번호', '비밀번호가 틀렸습니다.');
        }
      });
  };

  return (
    <ProfileContainer>
      <LeaveMemberModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        user={user}
        password={password}
        setPassword={setPassword}
      />
      <ChangeNickNameModal
        setModalVisible={setModalDp}
        modalVisible={modalDp}
        setNewNickName={setNewNickName}
        newNickName={newNickName}
        user={user}
      />

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
            <View>
              <ProfileNickName>안녕하세요,</ProfileNickName>
              <ProfileNickName>{user?.displayName}님</ProfileNickName>
              <Text>({user?.email})</Text>
            </View>
          </ProfileNickNameBox>
        </ProfileContents>

        {/* dp state 상태에 따라 컴포넌트가 변경됩니다. */}

        {dp === true && (
          <ProfileContents direction={'column'}>
            <ProfileDetailBox>
              <ProfileDetailTitle>현재 비밀번호</ProfileDetailTitle>
              <ProfileDetailContents
                onChangeText={setPassword}
                placeholder="비밀번호를 입력해주세요"
                textContentType="password"
                secureTextEntry={true}
              />
            </ProfileDetailBox>
            <ProfileDetailBox>
              <ProfileDetailTitle>신규 비밀번호</ProfileDetailTitle>

              <ProfileDetailContents
                onChangeText={setNewPassword}
                placeholder="비밀번호를 입력해주세요"
                textContentType="password"
                secureTextEntry={true}
              />
            </ProfileDetailBox>
            <ProfileDetailBox>
              <ProfileDetailTitle>신규 비밀번호 확인</ProfileDetailTitle>

              <ProfileDetailContents
                onChangeText={setCheckNewPassword}
                placeholder="비밀번호를 입력해주세요"
                textContentType="password"
                secureTextEntry={true}
              />
            </ProfileDetailBox>
          </ProfileContents>
        )}
        <ProfileDetailBox
          style={{
            flexDirection: 'row-reverse',
            marginRight: 50,
            paddingBottom: 40,
          }}
        >
          {/* dp state 상태에 따라 컴포넌트가 변경됩니다. */}
          {dp === true && (
            <ChangePwBox>
              <ProfileButton onPress={changePwHandler}>
                <Text>변경</Text>
              </ProfileButton>
              <ProfileButton onPress={() => setDp(false)}>
                <Text>취소</Text>
              </ProfileButton>
            </ChangePwBox>
          )}
        </ProfileDetailBox>
        {dp === false && (
          <View style={{ flexDirection: 'row-reverse' }}>
            <ProfileButton onPress={() => setDp(true)}>
              <Text>비밀번호 변경</Text>
            </ProfileButton>

            <ProfileButton
              onPress={() => {
                setModalDp(true);
              }}
              style={{ paddingRight: 10 }}
            >
              <Text>닉네임 변경</Text>
            </ProfileButton>
          </View>
        )}
      </ProfileBox>
    </ProfileContainer>
  );
}

export default Profile;
