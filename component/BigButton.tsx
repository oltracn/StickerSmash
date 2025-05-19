import { Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

interface BigButtonProps extends PressableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export default function Button({ title, style, ...props }: BigButtonProps) {
    return (
        <Pressable style={([styles.button, style] as StyleProp<ViewStyle>)} {...props}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffd33d',
    paddingVertical: 18,
    paddingHorizontal: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: '#25292e',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
