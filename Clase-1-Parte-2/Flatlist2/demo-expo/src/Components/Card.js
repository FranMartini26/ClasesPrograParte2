import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Card extends Component {
  render() {
    
    const { title, price, description, category, image } = this.props.product;

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 10,
  },
  info: {
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  category: {
    fontSize: 12,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginTop: 6,
    lineHeight: 18,
  },
});

export default Card;

