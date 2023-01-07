import React from 'react';
import { Text } from 'react-native';
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

function Profile() {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileTitle>프로필</ProfileTitle>
        <ProfileHeaderBtns>
          <ProfileButton>
            <ProfileButtonText>로그아웃</ProfileButtonText>
          </ProfileButton>
          <ProfileButton>
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
              <Text>psh5575@gmail.com</Text>
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
