import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authService } from '../../common/firebase';
import { checkInput } from '../../common/utils';
import { GRAY_COLOR } from '../../common/colors';
import * as S from './styles';

export default function Input({ addReview }) {
  const { push } = useNavigation();

  const [content, setContent] = useState('');

  const onSubmit = async () => {
    // 유효성 검사
    const isValid = checkInput(content);
    if (!isValid) {
      setContent('');
      return;
    }
    // 리뷰 등록 & 초기화
    await addReview(content);
    setContent('');
    Alert.alert('작성이 완료되었습니다.');
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
