import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Card extends Component {
  render() {
    const { name, species, gender, image } = this.props.character;

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>Especie: {species}</Text>
        <Text style={styles.text}>Género: {gender}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: "#444",
  },
});

export default Card;