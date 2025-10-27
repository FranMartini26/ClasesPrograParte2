import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { auth } from "../firebase/config";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: ""
    };
  }

  onSubmit() {
    const email = this.state.email;
    const password = this.state.password;

    if (!email.includes("@")) {
      this.setState({ errorMsg: "Email mal formateado" });
      return;
    }

    if (password.length < 6) {
      this.setState({ errorMsg: "La password debe tener una longitud mínima de 6 caracteres" });
      return;
    }

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ errorMsg: "" });
        this.props.navigation.navigate("Tabs"); // ✅ redirige al menú principal
      })
      .catch(() => {
        this.setState({ errorMsg: "Credenciales incorrectas" });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Formulario de Login</Text>
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
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />
        <Pressable onPress={() => this.onSubmit()} style={styles.pressable}>
          <Text>Ingresar</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Ir al registro</Text>
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
    marginBottom: 10
  },
  pressable: {
    backgroundColor: "#90CAF9",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  button: { backgroundColor: "red", padding: 10, borderRadius: 5 },
  buttonText: { color: "white", fontWeight: "bold" },
  error: { color: "red", marginBottom: 10 }
});

export default Login;