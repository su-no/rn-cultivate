import { Image, Text, TouchableOpacity } from 'react-native';
import { screenHeight, screenWidth } from '../common/utils';

export default function Main({ navigation: { navigate } }) {
  return (
    <>
      <Image
        source={require('../assets/banner.png')}
        style={{ width: screenWidth, height: screenHeight / 4 }}
      />
      <Text>Main</Text>
      <TouchableOpacity onPress={() => navigate('Stack', { screen: 'Detail' })}>
        <Text>상세페이지 가기</Text>
      </TouchableOpacity>
    </>
  );
}
