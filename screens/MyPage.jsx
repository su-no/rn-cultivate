import { ScrollView } from 'react-native';
import MyComments from '../components/MyComments/MyComments';
import Profile from '../components/Profile/Profile';

export default function MyPage() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
      <Profile />
      <MyComments />
    </ScrollView>
  );
}
