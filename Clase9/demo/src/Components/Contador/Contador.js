import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0,
    };
  }

  aumentar() {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Cantidad de clicks: {this.state.cantidad}</Text>

        <Pressable onPress={() => this.aumentar()} style={styles.boton}>
          <Text style={styles.textoBoton}>Click aquí para contar</Text>
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
    marginVertical: 5,
  },
  boton: {
    padding: 7,
    backgroundColor: "rgba(0, 255, 0, 0.5)",
    marginBottom: 10,
    borderRadius: 4,
  },
  textoBoton: {
    fontWeight: "bold",
  },
});

export default Contador;


