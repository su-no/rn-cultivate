import styled from '@emotion/native';

const ProfileContainer = styled.View``;
const ProfileHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ProfileTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 3px;
  color: ${(props) => props.theme.color.title};
`;
const ProfileHeaderBtns = styled.View`
  flex-direction: row;
`;
const ProfileButton = styled.TouchableOpacity``;
const ProfileButtonText = styled.Text`
  color: ${(props) => props.color ?? props.theme.color.title};

  margin-right: 10px;
`;
const ChangeText = styled.Text`
  color: ${(props) => props.theme.color.title};
`;

const ProfileBox = styled.View`
  border: 1px solid #cccccc;
`;
const ProfileContents = styled.View`
  flex-direction: ${(props) => props.direction};
  padding: 10px 20px 10px 20px;
  align-items: center;
  margin: 20px 20px -20px 20px;
`;

const ProfileImgBox = styled.View`
  width: 50%;
`;
const ProfileImg = styled.Image`
  width: 120px;
  height: 60px;
`;
const ProfileNickNameBox = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
`;
const ProfileNickName = styled.Text`
  font-size: 20px;
  margin-right: 10px;
  color: ${(props) => props.theme.color.title};
`;
const ProfileDetailBox = styled.View`
  width: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-left: 30px;
`;
const ProfileDetailTitle = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.title};
`;
const ProfileDetailContents = styled.TextInput`
  background-color: lightgray;
  width: 180px;
  height: 40px;
  padding-left: 10px;
  font-size: 12px;
  color: ${(props) => props.theme.title};
`;

const EmailText = styled.Text`
  color: ${(props) => props.theme.color.title};
`;

const ChangePwBox = styled.View`
  flex-direction: row-reverse;
  width: 70px;
  justify-content: space-between;
  margin-top: 5px;
  margin-left: -9px;
`;

export {
  ProfileContainer,
  ProfileHeader,
  ProfileTitle,
  ProfileHeaderBtns,
  ProfileButton,
  ProfileButtonText,
  ProfileBox,
  ProfileContents,
  ProfileImgBox,
  ProfileImg,
  ProfileNickNameBox,
  ProfileNickName,
  ProfileDetailBox,
  ProfileDetailTitle,
  ProfileDetailContents,
  ChangePwBox,
  EmailText,
  ChangeText,
};
