import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import { screenWidth } from '../../common/utils';
import styles from '../../common/styles';

export default function Poster({ imageURL, title }) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.shadow}
      onPress={() => {
        navigate('Stack', {
          screen: 'Detail',
          params: { title },
        });
      }}
    >
      <View
        style={{
          backgroundColor: 'gray',
          width: screenWidth / 3.5,
          height: (screenWidth / 3.5) * 1.5,
          borderRadius: 7,
        }}
      >
        <Image
          resizeMode="cover"
          source={{ uri: imageURL }}
          style={{
            width: screenWidth / 3.5,
            height: (screenWidth / 3.5) * 1.5,
            borderRadius: 7,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
