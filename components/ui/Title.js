import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function Title({ children }) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
  },
  titleView: {
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    borderRadius: 20,
    maxWidth: "80%",
    minWidth: "30%",
  },
});
