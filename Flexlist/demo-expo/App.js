import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductsLists from './src/Screens/ProductLists/ProductsLists';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Probando FlatLists</Text>
      <ProductsLists/>
    </View>
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
