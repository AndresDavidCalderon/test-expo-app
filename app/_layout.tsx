import { Stack } from "expo-router";
import 'expo-dev-client';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
