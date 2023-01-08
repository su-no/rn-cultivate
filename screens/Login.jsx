import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { VIOLET_COLOR, LIGHT_GRAY_COLOR } from '../common/colors';
import { authService } from '../common/firebase';

export default function Login({ navigation: { navigate } }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const emailRef = useRef(null);
  const pwRef = useRef(null);

  const handleLogin = () => {
    //유효성 검사
    if (email === '') {
      alert('이메일을 입력해주세요');
      emailRef.current.focus();
    } else if (pw === '') {
      alert('비밀번호를 입력해주세요');
      pwRef.current.focus();
    }
    signInWithEmailAndPassword(authService, email, pw)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Main');
        console.log('로그인한 계정', authService.currentUser.email);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message.includes('user-not-found')) {
          console.log('등록된 이메일이 아닙니다.');
        }
        if (error.message.includes('wrong-password')) {
          console.log('비밀번호가 틀렸습니다.');
        }
      });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Container>
        <Logo source={require('../assets/logo.png')} />
        <SubmitBox>
          <InputBox
            placeholder="Email"
            ref={emailRef}
            onChangeText={setEmail}
          ></InputBox>
          <InputBox
            placeholder="Password"
            ref={pwRef}
            onChangeText={setPw}
            textContentType="password"
            secureTextEntry={true}
          ></InputBox>

          <SubmitBtn onPress={handleLogin}>
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
    </ScrollView>
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
