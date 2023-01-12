import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Pressable, Text, Image } from 'react-native';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { authService, storage } from '../../common/firebase';
import { updateProfile } from 'firebase/auth';

const ImagePickerComponent = () => {
  const user = authService.currentUser;
  // console.log(user.photoURL);
  const storageRef = ref(storage, 'profile/psh5575@gmail.com');

  //현재 이미지 주소
  const [imageUrl, serImageUrl] = useState();
  //권한 요청을 위한 hooks
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  let src = `"https://firebasestorage.googleapis.com/v0/b/react-native-todolist-4aa67.appspot.com/o/profile%2Fpsh5575%40gmail.com?alt=media&token
  =116b7c33-cb14-4f28-a5e1-0bdfe249bd02"`;

  const showCurrentImg = () => {
    getDownloadURL(storageRef).then((url) => {
      console.log(url);
    });
  };
  showCurrentImg();

  const uploadImage = async () => {
    // 권한 확인코드: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
    if (!status.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }
    //이미지 업로드 기능
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });
    if (result.canceled) {
      return null; //이미지 업로드 취소한 경우
    }
    //이미지 업로드 결과 및 이미지 경로 업데이트
    serImageUrl(result.assets[0].uri);

    //파이어베이스 관련 코드
  };

  return (
    <>
      <Image style={{ width: 30, height: 30 }} source={{ uri: src }}></Image>
      <Pressable onPress={uploadImage}>
        <Text>업로드</Text>
      </Pressable>
    </>
  );
};

export default ImagePickerComponent;
