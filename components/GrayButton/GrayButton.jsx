import { Pressable, Text, useColorScheme } from 'react-native';
import { DARK_GRAY_COLOR, GRAY_COLOR } from '../../common/colors';

export default function GrayButton({ label, onPress }) {
  const isDark = useColorScheme() === 'dark';
  return (
    <Pressable
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        paddingHorizontal: 13,
        paddingVertical: 6,
      }}
    >
      <Text
        style={{ color: isDark ? DARK_GRAY_COLOR : GRAY_COLOR, fontSize: 15 }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
