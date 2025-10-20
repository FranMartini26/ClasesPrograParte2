import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import HomeMenu from './src/components/HomeMenu';
const Stack = createNativeStackNavigator();
import AntDesign from '@expo/vector-icons/AntDesign';


export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator options={ { headerShown: false } } >
        <Stack.Screen name="Login" component={ Login } options={ { tabBarIcon: () => <AntDesign name="login" size={24} color="black" /> }}/>
        <Stack.Screen name="Register" component={ Register } options={ { tabBarIcon: () => <AntDesign name="register" size={24} color="black" /> }}/>
        <Stack.Screen name="HomeMenu" component={ HomeMenu } />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});