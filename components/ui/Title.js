import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
  },
});
