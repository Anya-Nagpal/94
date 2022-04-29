import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SearchScreen from "./screens/SearchScreen"



const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
  SearchScreen:SearchScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <SearchScreen />;
}
