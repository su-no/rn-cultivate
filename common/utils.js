import { Dimensions } from 'react-native';

// 스크린 사이즈
export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');

// 정규표현식
export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const pwRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
