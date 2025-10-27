import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Post({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{data.description}</Text>
      <Text style={styles.username}>
        {data.ownerUsername && data.ownerUsername.length > 0
          ? data.ownerUsername
          : data.owner}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderBottomWidth: 1, borderColor: "#eee" },
  text: { fontSize: 16, marginBottom: 4 },
  username: { fontSize: 12, color: "#666" }
});

export default Post;