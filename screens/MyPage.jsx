import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MyComments from '../components/MyComments/MyComments';
import Profile from '../components/Profile/Profile';

export default function MyPage({ navigation: { navigate } }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 10 }}>
      <Profile />
      <MyComments></MyComments>
      <TouchableOpacity onPress={() => navigate('Stack', { screen: 'Login' })}>
        <Text>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Stack', { screen: 'Join' })}>
        <Text>회원가입</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
