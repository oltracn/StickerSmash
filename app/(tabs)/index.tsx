import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Home Screen!</Text>
      <Link href="/about" style={{ marginTop: 16, padding: 10, backgroundColor: "#fff", borderRadius: 5 }}>
        <Text style={{ color: "#25292e" }}>Go to About</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
});
