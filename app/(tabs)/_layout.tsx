import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#e4e4e7",
        tabBarInactiveTintColor: "#cbd5e1",
        tabBarActiveBackgroundColor: "#475569",
        tabBarInactiveBackgroundColor: "#0f172a",
        tabBarStyle: Platform.select({
          ios: { position: "absolute" },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <MaterialIcons name="home" size={32} color="#e4e4e7" />
          ),
        }}
      />
      <Tabs.Screen
        name="mood"
        options={{
          title: "Mood",
          tabBarIcon: () => (
            <FontAwesome5 name="theater-masks" size={24} color="#e4e4e7" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: () => (
            <MaterialIcons name="search" size={32} color="#e4e4e7" />
          ),
        }}
      />
      <Tabs.Screen
        name="mia"
        options={{
          title: "Bot",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="robot-happy-outline"
              size={24}
              color="#e4e4e7"
            />
          ),
        }}
      />
    </Tabs>
  );
}
