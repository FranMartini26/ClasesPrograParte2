import React from "react";
import { View, StyleSheet} from "react-native";
import ProductsAll from "./src/screens/ProductsAll";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsAll />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});