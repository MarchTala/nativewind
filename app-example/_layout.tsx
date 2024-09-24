import { Stack } from "expo-router/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Stack>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer />
        <Stack>
          {" "}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </Stack>
  );
}
