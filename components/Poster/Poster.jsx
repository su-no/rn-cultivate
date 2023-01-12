import { useNavigation } from '@react-navigation/native';
import React from 'react';
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
      {/* <Image
        // defaultSource={require('../../assets/cats.jpg')}
        resizeMode="cover"
        source={{ uri: imageURL }}
        style={{ width: '100%', height: 190 }}
      /> */}
      <View style={{ backgroundColor: 'gray' }}>
        <Image
          // defaultSource={require('../../assets/cats.jpg')}
          resizeMode="cover"
          source={{ uri: imageURL }}
          style={{ width: '100%', height: 190 }}
        />
      </View>
    </TouchableOpacity>
  );
}
