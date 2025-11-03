import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { db, auth } from "../firebase/config";
import firebase from "firebase";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  handleLike() {
    const email = auth.currentUser ? auth.currentUser.email : "";
    if (!email) return

    db.collection("posts")
      .doc(this.props.id)
      .update({
        likes: firebase.firestore.FieldValue.arrayUnion(email)
      });
  }

  handleUnlike() {
    const email = auth.currentUser ? auth.currentUser.email : "";
    if (!email) return

    db.collection("posts")
      .doc(this.props.id)
      .update({
        likes: firebase.firestore.FieldValue.arrayRemove(email)
      });
  }

  render() {
    const data = this.props.data;
    const email = auth.currentUser ? auth.currentUser.email : "";

    let likes = data.likes;
    if (!likes) {
      likes = [];
    }

    const liked = likes.includes(email);
    const count = likes.length;

    return (
      <View style={styles.card}>
        <Text style={styles.text}>{data.description}</Text>
        <Text style={styles.username}>
          {data.ownerUsername && data.ownerUsername.length > 0
            ? data.ownerUsername
            : data.owner}
        </Text>

        <View style={styles.row}>
          <Text>Likes: {count}</Text>

          {liked ? (
            <Pressable
              style={[styles.btn, styles.unlike]}
              onPress={this.handleUnlike.bind(this)}
            >
              <Text style={styles.btnText}>Quitar like</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.btn}
              onPress={this.handleLike.bind(this)}
            >
              <Text style={styles.btnText}>Like</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: { padding: 12, borderBottomWidth: 1, borderColor: "#eee" },
  text: { fontSize: 16, marginBottom: 4 },
  username: { fontSize: 12, color: "#666", marginBottom: 8 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  btn: { backgroundColor: "#2196F3", padding: 6, borderRadius: 6 },
  unlike: { backgroundColor: "#E53935" },
  btnText: { color: "white" }
});

export default Post;