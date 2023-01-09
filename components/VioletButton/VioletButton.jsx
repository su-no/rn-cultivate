import { Text, TouchableOpacity } from 'react-native';
import { BLACK_COLOR, VIOLET_COLOR, WHITE_COLOR } from '../../common/colors';

export default function VioletButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        backgroundColor: VIOLET_COLOR,
        padding: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: BLACK_COLOR,
        marginTop: 10,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          color: WHITE_COLOR,
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
