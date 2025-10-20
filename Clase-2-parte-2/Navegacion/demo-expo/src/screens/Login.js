import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

   onSubmit() {
    console.log("Datos de login:", {
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Formulario de Login</Text>

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
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Ir al registro</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: "#4CAF50" }]}
          onPress={() => this.props.navigation.navigate("HomeMenu")
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
  button: { backgroundColor: "red", padding: 10, borderRadius: 5 },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default Login;