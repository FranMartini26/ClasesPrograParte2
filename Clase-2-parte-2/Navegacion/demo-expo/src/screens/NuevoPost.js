import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config";

class NuevoPost extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", errorMsg: "" };
  }

  onSubmit() {
    if (!auth.currentUser) {
      this.setState({ errorMsg: "Debes iniciar sesión" });
      return;
    }

    const email = auth.currentUser.email;

    db.collection("users").where("email", "==", email).get()
      .then(snapshot => {
        let username = "";
        snapshot.docs.map(d => {
          const data = d.data();
          if (data.username) {
            username = data.username;
          }
        });

        db.collection("posts").add({
          owner: email,
          ownerUsername: username,
          description: this.state.description,
          createdAt: Date.now()
        })
        .then(() => {
          this.setState({ description: "", errorMsg: "" });
          this.props.navigation.navigate("HomeMenu");
        })
        .catch(() => this.setState({ errorMsg: "No se pudo crear el post" }));
      })
      .catch(() => this.setState({ errorMsg: "Error al obtener usuario" }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo post</Text>
        {this.state.errorMsg ? <Text style={styles.error}>{this.state.errorMsg}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Escribí tu mensaje"
          multiline
          onChangeText={(t) => this.setState({ description: t })}
          value={this.state.description}
        />
        <Pressable style={styles.btn} onPress={() => this.onSubmit()}>
          <Text style={styles.btnText}>Publicar</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 22, textAlign: "center", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    textAlignVertical: "top",
    marginBottom: 12
  },
  btn: { backgroundColor: "#2196F3", padding: 12, borderRadius: 8, alignItems: "center" },
  btnText: { color: "white", fontWeight: "bold" },
  error: { color: "red", marginBottom: 10 }
});

export default NuevoPost;