import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrado: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Formulario de Registro</Text>

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Ya tengo cuenta (Ir al Login)</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: "#2196F3", padding: 10, borderRadius: 5 },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default Register;