import { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Poster,
  Title,
  DescriptionRow,
  DescriptionText,
} from './styles';

export default function SearchResult({ detail }) {
  const {
    MAIN_IMG: imgPath,
    DATE: period,
    PLACE: place,
    USE_FEE: price,
    TITLE: title,
  } = detail;

  const ICON_SIZE = 20;
  const { push } = useNavigation();

  // 클릭하면 disabled -> 한번만 클릭되게 함
  const [disabled, setDisabled] = useState(false);

  return (
    <Container
      disabled={disabled}
      // 클릭하면 상세페이지로 이동
      onPress={() => {
        push('Stack', { screen: 'Detail', params: { title } });
        setDisabled(true);
        setTimeout(() => {
          setDisabled(false);
        }, 1000);
      }}
    >
      {/* 포스터 */}
      <Poster source={{ uri: imgPath }} />
      {/* 공연 정보 */}
      <View style={{ flexShrink: 1 }}>
        <Title>{title !== '' ? title : '홈페이지 확인'}</Title>
        <DescriptionRow>
          <Ionicons
            name="calendar-sharp"
            size={ICON_SIZE}
            color="black"
            style={{ marginRight: 8 }}
          />
          <DescriptionText>
            {period !== '' ? period : '홈페이지 확인'}
          </DescriptionText>
        </DescriptionRow>
        <DescriptionRow>
          <Ionicons
            name="location-outline"
            size={ICON_SIZE}
            color="black"
            style={{ marginRight: 8 }}
          />
          <DescriptionText>
            {place !== '' ? place : '홈페이지 확인'}
          </DescriptionText>
        </DescriptionRow>
        <DescriptionRow>
          <Ionicons
            name="pricetag-outline"
            size={ICON_SIZE}
            color="black"
            style={{ marginRight: 8 }}
          />
          <DescriptionText>
            {price !== '' ? price : '홈페이지 확인'}
          </DescriptionText>
        </DescriptionRow>
      </View>
    </Container>
  );
}
