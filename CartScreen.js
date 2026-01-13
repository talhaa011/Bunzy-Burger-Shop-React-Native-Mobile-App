import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/colors";

export default function CartScreen() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <View style={styles.empty}>
        <Ionicons name="cart-outline" size={80} color={COLORS.gray} />
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Order</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {cart.map((i, index) => (
  <View key={`${i.id}-${index}`} style={styles.card}>
            <View>
              <Text style={styles.name}>{i.name}</Text>
              <Text style={styles.price}>Rs {i.price}</Text>
            </View>

            {/* Quantity */}
            <View style={styles.qtyBox}>
              <TouchableOpacity onPress={() => decreaseQty(i.id)}>
                <Text style={styles.qtyBtn}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{i.qty}</Text>

              <TouchableOpacity onPress={() => increaseQty(i.id)}>
                <Text style={styles.qtyBtn}>+</Text>
              </TouchableOpacity>
            </View>

            {/* Remove */}
            <TouchableOpacity onPress={() => removeFromCart(i.id)}>
              <Ionicons name="trash" size={22} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Total & Checkout */}
      <View style={styles.footer}>
        <Text style={styles.total}>Total: Rs {total}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 20,
  },
  title: {
    color: COLORS.yellow,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    color: COLORS.yellow,
    fontSize: 14,
    marginTop: 4,
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyBtn: {
    color: COLORS.yellow,
    fontSize: 22,
    paddingHorizontal: 10,
  },
  qty: {
    color: COLORS.white,
    fontSize: 16,
    marginHorizontal: 5,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingTop: 15,
  },
  total: {
    color: COLORS.yellow,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  empty: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: COLORS.gray,
    marginTop: 10,
    fontSize: 16,
  },
});
