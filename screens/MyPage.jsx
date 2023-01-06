import { Text, TouchableOpacity } from 'react-native';

export default function MyPage({ navigation: { navigate } }) {
  return (
    <>
      <Text>MyPage</Text>
      <TouchableOpacity onPress={() => navigate('Stack', { screen: 'Login' })}>
        <Text>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Stack', { screen: 'Join' })}>
        <Text>회원가입</Text>
      </TouchableOpacity>
    </>
  );
}
