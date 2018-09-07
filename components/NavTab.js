import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import ActiveScreen from "./ActiveScreen";
import CheckedScreen from './DoneScreen';


export default (Tab = createMaterialBottomTabNavigator  (
    {
      HomeScreen: { screen: HomeScreen },
      Active: { screen: ActiveScreen },
      Checked: { screen: CheckedScreen }
    },
    {
      initialRouteName: "HomeScreen",
      activeTintColor: "#f0edf6",
      inactiveTintColor: "#3e2465",
      barStyle: { backgroundColor: "#000000" },
      labeled: false
    }
  ));
  