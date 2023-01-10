import styled from '@emotion/native';
import { Alert, ScrollView, Text } from 'react-native';
import { VIOLET_COLOR, LIGHT_GRAY_COLOR, BLACK_COLOR } from '../common/colors';
//회원가입 관련
import { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authService } from '../common/firebase';
import { useNavigation } from '@react-navigation/native';
import { emailRegex, pwRegex } from '../common/utils';

export default function Join({ navigation: { navigate } }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [nickName, setNickName] = useState('');
  const emailRef = useRef(null);
  const pwRef = useRef(null);

  const validatianInputs = () => {
    if (!email) {
      alert('이메일을 입력해주세요.');
      emailRef.current.focus();
      return true;
    }
    if (!pw) {
      alert('비밀번호를 입력해주세요.');
      pwRef.current.focus();
      return true;
    }
    const matchedEmail = email.match(emailRegex);
    const matchedPw = pw.match(pwRegex);

    if (matchedEmail === null) {
      alert('이메일 형식에 맞게 입력해 주세요.');
      emailRef.current.focus();
      return true;
    }
    if (matchedPw === null) {
      alert('비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.');
      pwRef.current.focus();
      return true;
    }
  };

  const handleRegister = () => {
    if (validatianInputs()) {
      return;
    }
    if (pw === checkPw) {
      createUserWithEmailAndPassword(authService, email, pw)
        .then(() => {
          updateProfile(authService.currentUser, {
            displayName: nickName,
          })
            .then(() => {
              alert('회원가입 완료! 홈으로 돌아갑니다.');

              setEmail('');
              setPw('');
              setCheckPw('');
              setNickName('');
              navigation.navigate('Tabs', { screen: 'Main' });
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((e) => {
          console.log('에러', e.message);
          if (e.message.includes('email-already-in-use')) {
            alert('이미 등록된 계정입니다.');
          }
        });
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    //스크롤 뷰를 넣어놔야 닉네임<텍스트인풋>을 클릭했을때 포커스가 잘 잡힘
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Container>
        <Logo source={require('../assets/logo.png')} />
        <SubmitBox>
          <InputTitle>이메일</InputTitle>
          <InputBox ref={emailRef} onChangeText={setEmail} value={email} />
          <InputTitle>비밀번호</InputTitle>
          <InputBox
            textContentType="password"
            secureTextEntry={true}
            onChangeText={setPw}
            value={pw}
            ref={pwRef}
          />
          <InputTitle>비밀번호 확인</InputTitle>
          <InputBox
            textContentType="password"
            secureTextEntry={true}
            onChangeText={setCheckPw}
            value={checkPw}
          />
          <InputTitle>닉네임</InputTitle>
          <InputBox onChangeText={setNickName} value={nickName} />
          <SubmitBtn onPress={handleRegister}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>
              회원가입
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
    </ScrollView>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
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
  margin-top: 5px;
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
