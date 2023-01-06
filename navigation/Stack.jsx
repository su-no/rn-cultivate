import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import { YELLOW_COLOR, VIOLET_COLOR } from '../common/colors';
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
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
      <NativeStack.Screen name="Login" component={Login} />
      <NativeStack.Screen name="Join" component={Join} />
    </NativeStack.Navigator>
  );
}
