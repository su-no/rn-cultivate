import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from '@emotion/native';
import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../common/colors';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

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
      onPress={() => {
        push('Stack', { screen: 'Detail', params: { title } });
        setDisabled(true);
      }}
    >
      <Poster source={{ uri: imgPath }} />
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

const Container = styled.Pressable`
  flex-direction: row;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${LIGHT_GRAY_COLOR};
`;

const Poster = styled.Image`
  width: 100px;
  height: 150px;
  margin-right: 10px;
  border-radius: 7px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;

const DescriptionRow = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const DescriptionText = styled.Text`
  word-break: break-all;
  font-size: 14px;
  flex-shrink: 1;
  color: ${BLACK_COLOR};
  margin-top: 2px;
`;
