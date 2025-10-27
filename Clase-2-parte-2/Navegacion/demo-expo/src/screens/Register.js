import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { auth, db } from "../firebase/config";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      errorMsg: ""
    };
  }

  onSubmit() {
    const email = this.state.email;
    const password = this.state.password;
    const username = this.state.username;

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        return db.collection("users").add({
          email: auth.currentUser.email,
          username: username,
          createdAt: Date.now()
        });
      })
      .then(() => {
        this.setState({ errorMsg: "" });
        this.props.navigation.navigate("Tabs"); // ✅ redirige al menú principal
      })
      .catch(error => {
        let msg = "Error al registrar usuario";
        if (error.code === "auth/invalid-email") {
          msg = "Email mal formateado";
        } else if (error.code === "auth/weak-password") {
          msg = "La password debe tener una longitud mínima de 6 caracteres";
        } else if (error.code === "auth/email-already-in-use") {
          msg = "El email ya está en uso";
        }
        this.setState({ errorMsg: msg });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Formulario de Registro</Text>
        {this.state.errorMsg ? <Text style={styles.error}>{this.state.errorMsg}</Text> : null}
        <TextInput
          style={styles.field}
          keyboardType="email-address"
          placeholder="email"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
          autoCapitalize="none"
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
          <Text>Registrarse</Text>
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
  field: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, width: "80%", padding: 10, marginBottom: 10 },
  pressable: { backgroundColor: "#90CAF9", padding: 10, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: "#2196F3", padding: 10, borderRadius: 5 },
  buttonText: { color: "white", fontWeight: "bold" },
  error: { color: "red", marginBottom: 10 }
});

export default Register;