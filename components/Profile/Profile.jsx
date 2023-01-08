import React, { useEffect } from 'react';
import { Alert, Text } from 'react-native';
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
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithCredential,
  signOut,
} from 'firebase/auth';
import { async } from '@firebase/util';

function Profile() {
  const navigation = useNavigation();
  const user = authService.currentUser;
  const email = 'test910@gmail.com';
  const password = 'tjdghks12';

  const logOutHandler = () => {
    Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '삭제',
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
    Alert.alert('회원탈퇴', '탈퇴하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '삭제',
        style: 'destructive',
        onPress: () => {
          deleteUser(user)
            .then(() => {
              alert('회원탈퇴가 완료되었습니다.');
              navigation.navigate('Tabs', { screen: 'Main' });
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
    ]);
  };
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileTitle>프로필</ProfileTitle>
        <ProfileHeaderBtns>
          <ProfileButton onPress={logOutHandler}>
            <ProfileButtonText>로그아웃</ProfileButtonText>
          </ProfileButton>
          <ProfileButton onPress={deleteUserHandler}>
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
            <ProfileNickName>닉네임님</ProfileNickName>
            <ProfileButton>
              <Text>닉네임 변경</Text>
            </ProfileButton>
          </ProfileNickNameBox>
        </ProfileContents>
        <ProfileContents direction={'column'}>
          <ProfileDetailBox>
            <ProfileDetailTitle>이메일</ProfileDetailTitle>
            <ProfileDetailContents>
              <Text>{user.email}</Text>
            </ProfileDetailContents>
          </ProfileDetailBox>
          <ProfileDetailBox>
            <ProfileDetailTitle>현재 비밀번호</ProfileDetailTitle>
            <ProfileDetailContents>
              <Text>비밀번호를 입력해주세요.</Text>
            </ProfileDetailContents>
          </ProfileDetailBox>
          <ProfileDetailBox>
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

export default Profile;
