import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const LoadingScreen = () => {
  return (
    <ImageBackground
      source={"/assets/images/bg-image.jpg"} // You can also use a local image
      style={styles.background}
    >
      <View style={styles.content}>
        <Text className="text-red-500">Hello, Background Image!</Text>
      </View>

      <View className="border border-red-500"><Text>Test</Text></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional, for adding a semi-transparent overlay
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default LoadingScreen;
