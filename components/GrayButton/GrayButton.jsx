import { Text, TouchableOpacity } from 'react-native';
import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../common/colors';

export default function GrayButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        marginLeft: 10,
        backgroundColor: LIGHT_GRAY_COLOR,
        paddingHorizontal: 13,
        paddingVertical: 6,
        borderRadius: 3,
      }}
    >
      <Text style={{ color: BLACK_COLOR }}>{label}</Text>
    </TouchableOpacity>
  );
}
