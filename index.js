import React from "react";
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PropTypes from "prop-types";

import colors from "./config/colors";

const ANIMATION = ["slide", "fade", "none"];
const DIRECTIONS = ["column", "row"];
const MODES = ["default", "fullscreen"];
const SIZES = ["large", "small"];

const Loading = ({
  containerStyles,
  textStyles,
  color = "primary",
  direction = DIRECTIONS[0],
  height,
  size = SIZES[0],
  text,
  ...props
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          height,
          flexDirection: direction,
        },
        containerStyles,
      ]}>
      <ActivityIndicator
        size={size}
        color={colors[color] || color}
        {...props}
      />
      {text && <Text style={[styles.text, textStyles]}>{text}</Text>}
    </View>
  );
};

function SimpleLoading({
  animation = ANIMATION[0],
  loading = false,
  mode = MODES[0],
  ...props
}) {
  const { height } = useWindowDimensions();

  if (loading) {
    if (mode === "fullscreen") {
      return (
        <Modal
          animationType="slide"
          onRequestClose={() => {}}
          supportedOrientations={["landscape", "portrait"]}
          transparent={false}
          visible={loading}
          statusBarTranslucent={true}>
          <Loading height={height} {...props} />
        </Modal>
      );
    } else {
      return <Loading {...props} />;
    }
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    padding: 10,
    textAlign: "center",
    color: colors.black,
  },
});

SimpleLoading.propTypes = {
  animation: PropTypes.oneOf(ANIMATION),
  color: PropTypes.string,
  containerStyles: PropTypes.object,
  direction: PropTypes.oneOf(DIRECTIONS),
  loading: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(MODES),
  size: PropTypes.oneOf(SIZES),
  text: PropTypes.string,
  textStyles: PropTypes.object,
};

export default SimpleLoading;
