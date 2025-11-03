import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { db } from "../firebase/config";
import Post from "../components/Post";

class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], loading: true };
  }

  componentDidMount() {
    db.collection("posts").orderBy("createdAt", "desc").onSnapshot(docs => {
      const posts = docs.docs.map(doc => ({ id: doc.id, data: doc.data() }));
      this.setState({ posts: posts, loading: false });
    });
  }

  renderItem = (props) => <Post id={props.item.id} data={props.item.data} />;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          ListEmptyComponent={!this.state.loading ? <Text>No hay posteos</Text> : null}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16 },
  title: { fontSize: 22, textAlign: "center", marginBottom: 12 }
});

export default HomeMenu;