import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';

export default function Poster({ imageURL, title }) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Stack', {
          screen: 'Detail',
          params: { title },
        });
      }}
    >
      <View style={{ backgroundColor: 'gray', width: 110, height: 165 }}>
        <Image
          // defaultSource={require('../../assets/cats.jpg')}
          resizeMode="cover"
          source={{ uri: imageURL }}
          style={{ width: 110, height: 165 }}
        />
      </View>
    </TouchableOpacity>
  );
}
