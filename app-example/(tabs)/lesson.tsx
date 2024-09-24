import { View, Text, StyleSheet } from "react-native";

export default function Lesson() {
  return (
    <View style={styles.container}>
      <Text>Lesson</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
