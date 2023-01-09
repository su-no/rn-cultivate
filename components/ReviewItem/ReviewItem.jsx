import { useState } from 'react';
import { Alert, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BLACK_COLOR } from '../../common/colors';
import GrayButton from '../GrayButton/GrayButton';
import * as S from './styles';
import { getDate } from '../../common/utils';

export default function ReviewItem({ data, deleteReview, updateReview }) {
  const { id, content, nickname, date, uid, title } = data;
  // TODO: 현재 사용자와 일치하는 댓글만 수정/삭제 버튼 보여주기

  const [opened, setOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleDelete = () => {
    Alert.alert('삭제하시겠습니까?', '', [
      {
        text: '취소',
        onPress: () => {
          console.log('취소되었습니다.');
        },
        style: 'cancel',
      },
      {
        text: '삭제',
        onPress: async () => {
          await deleteReview(id);
          console.log('리뷰가 삭제되었습니다.', id);
        },
      },
    ]);
  };

  const handleUpdate = async () => {
    console.log(id, editedContent);
    await updateReview(id, editedContent);
    setIsEditing(false);
  };

  return (
    <S.Container>
      <S.AboveLine>
        <View style={{ flex: 1 }}>
          {isEditing ? (
            <S.EditInput
              value={editedContent}
              onChangeText={setEditedContent}
              onSubmitEditing={handleUpdate}
              autoFocus
            />
          ) : (
            <S.TextBlack>{content}</S.TextBlack>
          )}
          <S.TextGray>{nickname}</S.TextGray>
          <S.TextGray>{getDate(date)}</S.TextGray>
        </View>
        <Ionicons
          onPress={() => setOpened(!opened)}
          // 클릭시 위쪽 화살표로 바뀌고 수정, 삭제 버튼 나타남
          name={opened ? 'chevron-up-sharp' : 'chevron-down-sharp'}
          size={24}
          color={BLACK_COLOR}
        />
      </S.AboveLine>
      {opened && (
        <S.Buttons>
          <GrayButton label="수정" onPress={() => setIsEditing(!isEditing)} />
          <GrayButton label="삭제" onPress={handleDelete} />
        </S.Buttons>
      )}
    </S.Container>
  );
}
