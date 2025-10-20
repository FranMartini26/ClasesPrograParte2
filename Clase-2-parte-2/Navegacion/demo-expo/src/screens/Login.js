import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intentos: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Formulario de Login</Text>

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Ir al registro</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: "#4CAF50" }]}
          onPress={() =>
            this.props.navigation.navigate("NavegacionTab", { screen: "Home" })
          }
        >
          <Text style={styles.buttonText}>Entrar en la app</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: "#9C27B0" }]}
          onPress={() =>
            this.props.navigation.navigate("NavegacionTab", { screen: "Profile" })
          }
        >
          <Text style={styles.buttonText}>Ir a Profile desde Login</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, marginBottom: 20 },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default Login;