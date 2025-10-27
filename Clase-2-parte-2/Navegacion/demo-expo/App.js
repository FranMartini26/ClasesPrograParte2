import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";

import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import HomeMenu from "./src/components/HomeMenu";
import NuevoPost from "./src/screens/NuevoPost";
import Usuarios from "./src/screens/Usuarios";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeMenu"
        component={HomeMenu}
        options={{ tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Nuevo post"
        component={NuevoPost}
        options={{ tabBarIcon: ({ color, size }) => <AntDesign name="pluscircleo" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Usuarios"
        component={Usuarios}
        options={{ tabBarIcon: ({ color, size }) => <AntDesign name="team" size={size} color={color} /> }}
      />
      <Tab.Screen name="Nuevo post" component={NuevoPost} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Tabs" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
