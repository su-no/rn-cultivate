import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import { VIOLET_COLOR, WHITE_COLOR, BLACK_COLOR } from '../common/colors';
import Detail from '../screens/Detail';
import Login from '../screens/Login';
import Join from '../screens/Join';
import Search from '../screens/Search';

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
            labelStyle={{ color: VIOLET_COLOR }}
            tintColor={VIOLET_COLOR}
          />
        ),
        contentStyle: {
          backgroundColor: isDark ? BLACK_COLOR : WHITE_COLOR,
        },
      }}
    >
      <NativeStack.Screen
        options={{ title: '상세페이지' }}
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
      <NativeStack.Screen
        options={{ title: '검색' }}
        name="Search"
        component={Search}
      />
    </NativeStack.Navigator>
  );
}
