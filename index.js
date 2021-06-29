import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import colors from "./config/colors";

export default function SimpleLoading({
  containerStyles,
  size,
  text,
  color,
  ...props
}) {
  return (
    <View style={[styles.container, containerStyles]}>
      <ActivityIndicator size={size} color={colors[color]} {...props} />
      {text && <Text>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});
