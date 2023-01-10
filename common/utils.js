import { Alert, Dimensions } from 'react-native';

// 스크린 사이즈
export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');

// 정규표현식
export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const pwRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// 2022-11-11 13:52 포맷으로 날짜를 받아오는 함수
export const getDate = (d) => {
  const date = new Date(d);
  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minuites = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minuites}`;
};

// Input 유효성 검사
export const checkInput = (content) => {
  const contentValue = content.trim();
  if (contentValue === '') {
    Alert.alert('내용을 입력하세요.');
    return false;
  }
  if (contentValue.length < 5) {
    Alert.alert('5자 이상 50자 미만의 내용을 입력해주세요.');
    return false;
  }
  return true;
};
