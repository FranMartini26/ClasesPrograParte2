import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: ""
    };
  }

  onSubmit() {
    console.log("Datos de registro:", {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Formulario de Registro</Text>

        <TextInput
          style={styles.field}
          keyboardType="email-address"
          placeholder="email"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />
        <TextInput
          style={styles.field}
          keyboardType="default"
          placeholder="username"
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <TextInput
          style={styles.field}
          keyboardType="default"
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />

        <Pressable onPress={() => this.onSubmit()} style={styles.pressable}>
          <Text> Registrarse </Text>
        </Pressable>

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
  field: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    width: "80%",
    padding: 10,
    marginBottom: 10,
  },
  pressable: {
    backgroundColor: "#90CAF9",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: { backgroundColor: "#2196F3", padding: 10, borderRadius: 5 },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default Register;
