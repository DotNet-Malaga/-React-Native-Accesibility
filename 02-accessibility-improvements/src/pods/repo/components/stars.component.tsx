import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface Props {
  count: number;
}

export const Stars: React.FC<Props> = ({ count }) => {
  return (
    <View style={styles.container} accessible={true} accessibilityLabel={`${count} stars`}>
      <MaterialIcons style={styles.starIcon} name="star" />
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starIcon: {
    fontSize: 26,
    color: "#ffe100",
  },
  text: {
    fontSize: 16,
  },
});
