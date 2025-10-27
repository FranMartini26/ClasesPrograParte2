import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { db } from "../firebase/config";

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    db.collection("users").onSnapshot(snapshot => {
      const users = snapshot.docs.map(d => ({ id: d.id, data: d.data() }));
      this.setState({ users: users, loading: false }, () => console.log(this.state.users));
    });
  }

  renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.email}>{item.data.email}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Usuarios</Text>
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 32 },
  title: { fontSize: 22, marginBottom: 12, textAlign: "center" },
  row: { paddingVertical: 10, borderBottomWidth: 1, borderColor: "#eee" },
  email: { fontSize: 16 }
});

export default Usuarios;