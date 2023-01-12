import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import { VIOLET_COLOR, LIGHT_GRAY_COLOR } from '../common/colors';
import { authService } from '../common/firebase';
import ResetPasswordModal from '../components/ResetPasswordModal/ResetPasswordModal';

export default function Login({ navigation: { navigate } }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  authService.languageCode = 'ko'; //비밀번호 재설정 이메일 보낼때 언어 선택 'ko' = 한국어

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
      .then(() => {
        navigation.navigate('Main');
      })
      .catch((error) => {
        if (error.message.includes('user-not-found')) {
          alert('등록된 이메일이 아닙니다.');
          emailRef.current.focus();
        }
        if (error.message.includes('wrong-password')) {
          alert('비밀번호가 틀렸습니다.');
          pwRef.current.focus();
        }
      });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Container>
        <ResetPasswordModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          email={email}
          setEmail={setEmail}
        />
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
            <GuideText>비밀번호가 기억이 나지 않는다면?</GuideText>
            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text
                style={{
                  textDecorationLine: 'underline',
                  fontWeight: '600',
                  fontSize: 12,
                }}
              >
                비밀번호 재설정
              </Text>
            </Pressable>
          </GuideBox>
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
  height: 40px;
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
