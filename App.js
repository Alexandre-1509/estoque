import React from "react";
import { AppProvider } from "./src/contexts/appContext";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar backgroundColor={"#323232"} barStyle={"light-content"} />
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
