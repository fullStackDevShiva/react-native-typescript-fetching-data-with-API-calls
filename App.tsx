import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListItems from "./components/ListItems";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.screenTitle}>All posts</Text>
      <ListItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
});
