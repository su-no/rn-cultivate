import styled from '@emotion/native';
import { Text } from 'react-native';
import { VIOLET_COLOR, LIGHT_GRAY_COLOR } from '../common/colors';

export default function Login({ navigation: { navigate } }) {
  return (
    <Container>
      <Logo source={require('../assets/logo.png')} />
      <SubmitBox>
        <InputBox placeholder="Email"></InputBox>
        <InputBox placeholder="Password"></InputBox>
        <SubmitBtn>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>
            로그인
          </Text>
        </SubmitBtn>
        <GuideBox>
          <GuideText>처음 방문하셨나요?</GuideText>
          <SwitchBtn
            onPress={() => {
              navigate('Stack', { screen: 'Join' });
            }}
          >
            <Text
              style={{
                textDecorationLine: 'underline',
                fontWeight: '600',
                fontSize: 12,
              }}
            >
              회원가입
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
  padding: 80px 40px 20px 40px;
  align-items: center;
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
