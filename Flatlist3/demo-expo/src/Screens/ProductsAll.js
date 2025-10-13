// src/screens/ProductsAll.js
import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Card from "../components/Card";

class ProductsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [], // acá guardamos los personajes
      loading: true,  // para mostrar indicador de carga
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        // guardamos los resultados en el estado
        this.setState({
          characters: data.results,
          loading: false,
        });
      })
      .catch((error) => console.log("Error en el fetch:", error));
  }

  renderItem = ({ item }) => <Card character={item} />;

  render() {
    const { characters, loading } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Personajes de Rick & Morty</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#00b5cc" style={{ marginTop: 20 }} />
        ) : (
          <FlatList
            data={characters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this.renderItem}
            style={styles.list}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 16,
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    gap: 16,
  },
});

export default ProductsAll;