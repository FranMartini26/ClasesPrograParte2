import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home/Home';
import Contador from './src/Components/Contador/Contador';

export default function App() {
  return (
    <View>
      <Home/>
      <Contador/>
    </View>
    
  );
}


