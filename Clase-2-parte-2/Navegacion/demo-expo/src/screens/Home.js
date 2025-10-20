import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bienvenida: "Pantalla de Inicio",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.bienvenida}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});

export default Home;