import { Image, Pressable, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import Category from '../screens/Category';
import MyTickets from '../screens/MyTickets';
import MyPage from '../screens/MyPage';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {
  BLUE_COLOR,
  PINK_COLOR,
  SKY_COLOR,
  VIOLET_COLOR,
  WHITE_COLOR,
} from '../common/colors';

const Tab = createBottomTabNavigator();
export default function Tabs({ navigation: { navigate } }) {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: 'center',
      }}
      sceneContainerStyle={{
        backgroundColor: WHITE_COLOR,
      }}
    >
      {/* 메인 페이지 */}
      <Tab.Screen
        options={{
          headerTitle: () => <LogoTitle />,
          headerRight: () => (
            <SearchButton
              onPress={() => navigate('Stack', { screen: 'Search' })}
            />
          ),
          title: '메인',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: PINK_COLOR,
        }}
        name="Main"
        component={Main}
      />
      {/* 카테고리 페이지 */}
      <Tab.Screen
        options={{
          title: '카테고리',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-type"
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: VIOLET_COLOR,
        }}
        name="Category"
        component={Category}
      />
      {/* 관심티켓 페이지 */}
      <Tab.Screen
        options={{
          title: '관심티켓',
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket" size={size} color={color} />
          ),
          tabBarActiveTintColor: BLUE_COLOR,
        }}
        name="MyTickets"
        component={MyTickets}
      />
      {/* 마이페이지 */}
      <Tab.Screen
        options={{
          title: '마이페이지',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="smileo" size={size} color={color} />
          ),
          tabBarActiveTintColor: SKY_COLOR,
        }}
        name="MyPage"
        component={MyPage}
      />
    </Tab.Navigator>
  );
}

function LogoTitle() {
  return (
    <Image
      source={require('../assets/logo.png')}
      style={{
        width: 140,
        height: 20,
      }}
    />
  );
}

function SearchButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons
        name="search"
        size={26}
        color="black"
        style={{
          marginRight: 20,
          color: SKY_COLOR,
        }}
      />
    </Pressable>
  );
}
