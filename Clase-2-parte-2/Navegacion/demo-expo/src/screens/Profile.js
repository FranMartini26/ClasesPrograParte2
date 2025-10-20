import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Usuario",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Perfil de {this.state.nombre}</Text>

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Desloguearse</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: "#f44336", padding: 10, borderRadius: 5 },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default Profile;