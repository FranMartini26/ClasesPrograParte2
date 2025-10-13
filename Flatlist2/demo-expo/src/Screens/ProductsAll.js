import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "../Components/Card"; 

class ProductsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Tu mochila diaria perfecta para llevarlo todo. Hecha en lona resistente.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts",
          price: 22.3,
          description:
            "Remera de algodón premium con calce slim. Ideal para uso casual.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "Campera de algodón resistente y cómoda para el día a día.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
      ],
    };
  }

  renderItem = ({ item }) => {
    return <Card product={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Productos</Text>

        
        <FlatList
          data={this.state.products}
          renderItem={this.renderItem} 
          keyExtractor={(item) => item.id.toString()} 
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
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
