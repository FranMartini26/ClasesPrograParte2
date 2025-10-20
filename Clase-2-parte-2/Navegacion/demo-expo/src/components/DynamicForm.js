import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: "",
    };
  }


  onSubmit() {
    console.log("Comentario ingresado:", this.state.comentario);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dejá tu comentario</Text>

        <TextInput
          style={styles.field}
          placeholder="Escribí tu comentario aquí..."
          value={this.state.comentario}
          onChangeText={(text) => this.setState({ comentario: text })}
        />

        <Pressable onPress={() => this.onSubmit()} style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  field: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    width: "90%",
    padding: 10,
    marginBottom: 10,
    textAlignVertical: "top", 
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DynamicForm;
