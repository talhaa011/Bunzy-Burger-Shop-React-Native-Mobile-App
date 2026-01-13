import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function DetailScreen({ route }) {
  const { burger } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image source={burger.image} style={styles.image} />
      <Text style={styles.name}>{burger.name}</Text>
      <Text style={styles.price}>Rs {burger.price}</Text>

      <TouchableOpacity style={styles.button} onPress={() => addToCart(burger)}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 200,
  },
  name: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: COLORS.yellow,
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "bold",
  },
});
