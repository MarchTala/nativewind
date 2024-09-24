import { View, Text, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ paddingBottom: 20 }}>LoginScreen</Text>
      <TouchableOpacity
        style={{
          padding: 8,
          paddingHorizontal: 30,
          backgroundColor: "blue",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
