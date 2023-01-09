import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authService } from '../../common/firebase';
import { GRAY_COLOR } from '../../common/colors';
import * as S from './styles';

export default function Input({ addReview }) {
  const { push } = useNavigation();

  const [content, setContent] = useState('');

  // 리뷰 등록
  const onSubmit = async () => {
    // 유효성 검사
    if (content.trim() === '') {
      Alert.alert('내용을 입력하세요.');
      setContent('');
      return;
    }
    // 등록
    await addReview(content);
    // 초기화
    setContent('');
  };

  const user = authService.currentUser;

  return (
    <>
      {/* 로그인한 유저가 없으면 작성 불가능 */}
      {!user ? (
        <S.Input
          onPressOut={() =>
            Alert.alert('로그인', '로그인 페이지로 이동하시겠습니까?', [
              {
                text: '취소',
                style: 'cancel',
              },
              {
                text: '확인',
                style: 'default',
                onPress: () => {
                  push('Stack', { screen: 'Login' });
                },
              },
            ])
          }
          placeholder="로그인이 필요한 서비스입니다."
          placeholderTextColor={GRAY_COLOR}
          backgroundColor="#e8e8e8"
          editable={false}
        />
      ) : (
        <S.Input
          placeholder="내용을 입력하세요."
          value={content}
          onChangeText={setContent}
          onSubmitEditing={onSubmit}
          maxLength={50}
        />
      )}
    </>
  );
}
