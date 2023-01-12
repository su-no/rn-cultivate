import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { screenHeight, screenWidth } from '../../common/utils';

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
      <Image
        resizeMode="cover"
        source={{ uri: imageURL }}
        style={{ width: screenWidth / 3.5, height: (screenWidth / 3.5) * 1.5 }}
      />
    </TouchableOpacity>
  );
}
