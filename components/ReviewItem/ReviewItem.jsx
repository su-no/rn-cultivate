import { useState } from 'react';
import { Alert, useColorScheme, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { authService } from '../../common/firebase';
import { getDate } from '../../common/utils';
import { GRAY_COLOR, LIGHT_GRAY_COLOR } from '../../common/colors';

import * as S from './styles';

import GrayButton from '../GrayButton/GrayButton';

export default function ReviewItem({ data, deleteReview, updateReview }) {
  const isDark = useColorScheme() === 'dark';
  const { id, content, nickname, date, uid } = data;

  // 로그인한 사용자와 리뷰 작성한 사용자 일치하는지 확인
  const currentUserUid = authService?.currentUser?.uid;
  const isMyReview = uid === currentUserUid;

  const [opened, setOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleDelete = () => {
    Alert.alert('삭제하시겠습니까?', '', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '삭제',
        onPress: async () => {
          await deleteReview(id);
          Alert.alert('삭제되었습니다.');
        },
      },
    ]);
  };

  const handleUpdate = async () => {
    await updateReview({ id, editedContent });
    Alert.alert('수정되었습니다.');
    setIsEditing(false);
  };

  return (
    <S.Container>
      <View style={{ flex: 1 }}>
        {isEditing ? (
          <S.EditInput
            value={editedContent}
            onChangeText={setEditedContent}
            onSubmitEditing={handleUpdate}
            autoFocus
            color={isDark ? LIGHT_GRAY_COLOR : GRAY_COLOR}
          />
        ) : (
          <S.TextBlack>{content}</S.TextBlack>
        )}
        <S.TextGray>{nickname}</S.TextGray>
        <S.TextGray>{getDate(date)}</S.TextGray>
      </View>
      {/* 내 댓글만 ellipsis 아이콘 표시 */}
      {isMyReview && (
        <Ionicons
          onPress={() => setOpened(!opened)}
          name={'ellipsis-horizontal'}
          size={20}
          color={GRAY_COLOR}
        />
      )}
      {/* 팝업메뉴 보여주기 */}
      {opened && (
        <S.Buttons>
          <GrayButton
            label="수정"
            onPress={() => {
              setIsEditing(true);
              setOpened(false);
            }}
          />
          <GrayButton label="삭제" onPress={handleDelete} />
        </S.Buttons>
      )}
    </S.Container>
  );
}
