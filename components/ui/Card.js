import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.Card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  Card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
  },
});
