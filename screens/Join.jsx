import styled from '@emotion/native';
import { Text } from 'react-native';
import { VIOLET_COLOR, LIGHT_GRAY_COLOR, BLACK_COLOR } from '../common/colors';

export default function Join({ navigation: { navigate } }) {
  return (
    <Container>
      <Logo source={require('../assets/logo.png')} />
      <SubmitBox>
        <InputTitle>이메일</InputTitle>
        <InputBox />
        <InputTitle>비밀번호</InputTitle>
        <InputBox />
        <InputTitle>비밀번호 확인</InputTitle>
        <InputBox />
        <InputTitle>닉네임</InputTitle>
        <InputBox />
        <SubmitBtn>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>
            로그인
          </Text>
        </SubmitBtn>
        <GuideBox>
          <GuideText>이미 회원이신가요?</GuideText>
          <SwitchBtn
            onPress={() => {
              navigate('Stack', { screen: 'Login' });
            }}
          >
            <Text
              style={{
                textDecorationLine: 'underline',
                fontWeight: '600',
                fontSize: 12,
              }}
            >
              로그인
            </Text>
          </SwitchBtn>
        </GuideBox>
      </SubmitBox>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;
const Logo = styled.Image`
  width: 80%;
  height: 60px;
  margin-bottom: 50px;
  margin-top: 100px;
`;
const SubmitBox = styled.View`
  width: 95%;
  height: 45%;
  padding: 20px 40px 20px 40px;
  align-items: center;
`;
const InputTitle = styled.Text`
  width: 92%;
  font-size: 15px;
  font-weight: 600;
  color: ${BLACK_COLOR};
`;
const InputBox = styled.TextInput`
  background-color: ${LIGHT_GRAY_COLOR};
  width: 92%;
  height: 50px;
  margin-bottom: 20px;
  padding-left: 10px;
`;
const SubmitBtn = styled.TouchableOpacity`
  background-color: ${VIOLET_COLOR};
  width: 70%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
const GuideBox = styled.View`
  flex-direction: row;
  padding-top: 15px;
`;
const GuideText = styled.Text`
  padding-right: 10px;
  font-weight: 600;
  font-size: 12px;
`;
const SwitchBtn = styled.TouchableOpacity``;
