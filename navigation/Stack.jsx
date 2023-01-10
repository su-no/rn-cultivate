import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import { YELLOW_COLOR, VIOLET_COLOR, WHITE_COLOR } from '../common/colors';
import Detail from '../screens/Detail';
import Login from '../screens/Login';
import Join from '../screens/Join';

const NativeStack = createNativeStackNavigator();

export default function Stack({ navigation: { goBack } }) {
  const isDark = useColorScheme() === 'dark';

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <HeaderBackButton
            label="뒤로"
            onPress={() => goBack()}
            labelVisible
            labelStyle={{
              color: isDark ? YELLOW_COLOR : VIOLET_COLOR,
            }}
            tintColor={isDark ? YELLOW_COLOR : VIOLET_COLOR}
          />
        ),
        contentStyle: {
          backgroundColor: WHITE_COLOR,
        },
      }}
    >
      <NativeStack.Screen
        options={{
          title: '상세페이지',
        }}
        name="Detail"
        component={Detail}
      />
      <NativeStack.Screen
        options={{ title: '로그인' }}
        name="Login"
        component={Login}
      />
      <NativeStack.Screen
        options={{ title: '회원가입' }}
        name="Join"
        component={Join}
      />
    </NativeStack.Navigator>
  );
}
