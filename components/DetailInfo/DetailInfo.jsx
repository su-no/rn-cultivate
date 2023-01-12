import { View, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BLACK_COLOR, WHITE_COLOR } from '../../common/colors';
import { DescriptionText } from './styles';

export default function DetailInfo({ period, place, price }) {
  const isDark = useColorScheme() === 'dark';

  return (
    <>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Ionicons
          name="calendar-sharp"
          size={24}
          color={isDark ? WHITE_COLOR : BLACK_COLOR}
          style={{ marginRight: 8 }}
        />
        <DescriptionText>{period}</DescriptionText>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Ionicons
          name="location-outline"
          size={24}
          color={isDark ? WHITE_COLOR : BLACK_COLOR}
          style={{ marginRight: 8 }}
        />
        <DescriptionText>{place}</DescriptionText>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Ionicons
          name="pricetag-outline"
          size={24}
          color={isDark ? WHITE_COLOR : BLACK_COLOR}
          style={{ marginRight: 8 }}
        />
        <DescriptionText>{price}</DescriptionText>
      </View>
    </>
  );
}
