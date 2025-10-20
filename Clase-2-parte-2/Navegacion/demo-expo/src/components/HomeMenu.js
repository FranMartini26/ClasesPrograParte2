import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
const Tab = createBottomTabNavigator();
import AntDesign from '@expo/vector-icons/AntDesign';


function HomeMenu() {
  return (
     <Tab.Navigator>
        <Tab.Screen name="Home" component={ Home } options={ { tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> }}/>
        <Tab.Screen name="Profile" component={ Profile } options={ { tabBarIcon: () => <AntDesign name="profile" size={24} color="black" /> }}/>
     </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  menu: {
    padding: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default HomeMenu;