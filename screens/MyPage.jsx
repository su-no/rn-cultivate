import styled from '@emotion/native';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import MyComments from '../components/MyComments/MyComments';
import Profile from '../components/Profile/Profile';
import { authService } from '../common/firebase';

export default function MyPage({ navigation: { navigate, reset } }) {
  useFocusEffect(() => {
    if (authService.currentUser === null) {
      reset({
        index: 1,
        routes: [
          {
            name: 'Tabs',
            params: {
              screen: 'Main',
            },
          },
          {
            name: 'Stack',
            params: {
              screen: 'Login',
            },
          },
        ],
      });
      return;
    }
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ padding: 10, backgroundColor: 'white' }}
    >
      <Profile />
      <MyComments></MyComments>
    </ScrollView>
  );
}
