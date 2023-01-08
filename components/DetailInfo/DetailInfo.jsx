import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from '@emotion/native';
import { BLACK_COLOR } from '../../common/colors';

export default function DetailInfo({ period, place, price }) {
  return (
    <>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Ionicons
          name="calendar-sharp"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <DescriptionText>2023-01-23~2023-03-12</DescriptionText>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Ionicons
          name="location-outline"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <DescriptionText>세종대극장</DescriptionText>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Ionicons
          name="pricetag-outline"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <DescriptionText>
          VIP석 170,000원 / 젤리클석 170,000원 / R석 140,000원 / S석 110,000원 /
          A석 90,000원 / B석 60,000원
        </DescriptionText>
      </View>
    </>
  );
}

const DescriptionText = styled.Text`
  word-break: break-all;
  font-size: 15px;
  flex-shrink: 1;
  font-weight: 500;
  color: ${BLACK_COLOR};
  margin-top: 4px;
`;
