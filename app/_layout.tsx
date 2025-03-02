import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "../utils/store";
import "../global.css";
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }} />
      </Provider>
    </>
  );
}
