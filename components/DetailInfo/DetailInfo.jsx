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
        <DescriptionText>{period}</DescriptionText>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Ionicons
          name="location-outline"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <DescriptionText>{place}</DescriptionText>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Ionicons
          name="pricetag-outline"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <DescriptionText>{price}</DescriptionText>
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
