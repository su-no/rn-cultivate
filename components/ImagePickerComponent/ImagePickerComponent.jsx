import React, { useState } from 'react';
import { Pressable, Text, Image } from 'react-native';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { authService, storage } from '../../common/firebase';
import { updateProfile } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import { BLUE_COLOR } from '../../common/colors';

const ImagePickerComponent = () => {
  const user = authService.currentUser;
  const [dp, setDp] = useState(false);
  const [profile, setProfile] = useState(user.photoURL ?? null);

  //현재 이미지 주소
  const [image, setImage] = useState(null);
  //권한 요청을 위한 hooks
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  //이미지 선택
  const selectImage = async () => {
    // 권한 확인코드: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
    if (!status.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }
    //이미지 업로드 기능
    const imageData = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [3, 3],
    });
    if (imageData.canceled) {
      return null; //이미지 업로드 취소한 경우
    }

    const source = { uri: imageData.assets[0].uri };
    setImage(source);
    setDp(true);
  };

  //업로드
  const uploadImage = async () => {
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = user.email;
    const storageRef = ref(storage, filename);
    uploadBytes(storageRef, blob)
      .then(() => {
        getDownloadURL(ref(storage, user.email)).then((url) => {
          updateProfile(user, {
            photoURL: url,
          });
          setProfile(url);
        });
      })
      .catch((e) => {
        console.log(e);
      });
    setDp(false);
  };

  return (
    <>
      <Pressable onPress={selectImage}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: profile }}
        ></Image>
      </Pressable>

      {dp && (
        <Pressable
          onPress={uploadImage}
          style={{ width: 100, alignItems: 'center' }}
        >
          <Text style={{ color: BLUE_COLOR, fontWeight: '700', fontSize: 17 }}>
            업로드
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default ImagePickerComponent;
