import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

class Home extends Component {
  saludar() {
    console.log("Me clickearon");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hola Mundo</Text>

        <Pressable onPress={() => this.saludar()} style={styles.boton}>
          <Text style={styles.textoBoton}>Clickeame</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 10, 
  },
  boton: {
    padding: 4,
    backgroundColor: "#ccc",
    marginBottom: 10,
    borderRadius: 4,
  },
  textoBoton: {
    fontWeight: "bold",
  },
});

export default Home;

