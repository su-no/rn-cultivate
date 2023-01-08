import { useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BLACK_COLOR } from '../../common/colors';
import GrayButton from '../GrayButton/GrayButton';
import * as S from './styles';

export default function ReviewItem({ content, nickname, date }) {
  // TODO: 수정, 삭제 버튼 누르면 firebase에서 데이터 수정, 삭제

  const [opened, setOpened] = useState(false);

  return (
    <S.Container>
      <S.AboveLine>
        <View>
          <S.TextBlack>{content}</S.TextBlack>
          <S.TextGray>{nickname}</S.TextGray>
          <S.TextGray>{date}</S.TextGray>
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
          <GrayButton label="수정" onPress={() => console.log('수정')} />
          <GrayButton label="삭제" onPress={() => console.log('삭제')} />
        </S.Buttons>
      )}
    </S.Container>
  );
}
