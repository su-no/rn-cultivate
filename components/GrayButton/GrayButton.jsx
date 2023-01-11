import { Text, TouchableOpacity } from 'react-native';
import { GRAY_COLOR } from '../../common/colors';

export default function GrayButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        paddingHorizontal: 13,
        paddingVertical: 6,
      }}
    >
      <Text style={{ color: GRAY_COLOR, fontSize: 13 }}>{label}</Text>
    </TouchableOpacity>
  );
}
