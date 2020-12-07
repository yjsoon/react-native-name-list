import React from "react";
import { StyleSheet, Text, View } from "react-native";

const names = ["Alex", "Bob", "Charlie", "Derrick"];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{names[0]}</Text>
      <Text>{names[1]}</Text>
      <Text>{names[2]}</Text>
      <Text>{names[3]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
