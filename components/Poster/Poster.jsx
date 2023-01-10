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
      <Image
        resizeMode="cover"
        source={{ uri: imageURL }}
        style={{ width: '100%', height: 190 }}
      />
    </TouchableOpacity>
  );
}
