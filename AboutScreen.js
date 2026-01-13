import { View, Text, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../theme/colors";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Brand Header */}
      <View style={styles.header}>
        <Text style={styles.brand}>🍔 Bunzy Burger</Text>
        <Text style={styles.tagline}>Big Buns. Bold Flavors.</Text>
      </View>

      {/* About Us */}
      <View style={styles.card}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.text}>
          Bunzy Burger is a modern fast-food brand focused on delivering
          premium-quality burgers made with fresh ingredients and bold flavors.
          Our mission is to provide delicious, affordable, and satisfying meals
          that bring people together.
        </Text>
      </View>

      {/* Our Specialties */}
      <View style={styles.card}>
        <Text style={styles.title}>Our Specialties</Text>
        <Text style={styles.text}>• Juicy beef & crispy chicken burgers</Text>
        <Text style={styles.text}>• Freshly baked soft buns</Text>
        <Text style={styles.text}>• Signature sauces & cheese layers</Text>
        <Text style={styles.text}>• Hygienic & fast service</Text>
      </View>

      {/* Why Choose Us */}
      <View style={styles.card}>
        <Text style={styles.title}>Why Bunzy Burger?</Text>
        <Text style={styles.text}>
          We believe great burgers start with great ingredients. Every Bunzy
          Burger is crafted with care, ensuring perfect taste, texture, and
          presentation. Our black & yellow theme represents boldness, energy,
          and premium quality.
        </Text>
      </View>
{/* Future Goals */}
<View style={styles.card}>
  <Text style={styles.title}>Future Goals</Text>
  <Text style={styles.text}>
    Bunzy Burger aims to expand its digital presence by introducing online
    ordering, live order tracking, and multiple payment options. In the
    future, the app can include loyalty rewards, user profiles, and real-time
    delivery updates to enhance customer experience and brand growth.
  </Text>
</View>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 15,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  brand: {
    color: COLORS.yellow,
    fontSize: 32,
    fontWeight: "bold",
  },
  tagline: {
    color: COLORS.gray,
    fontSize: 14,
    marginTop: 5,
  },
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    color: COLORS.yellow,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 22,
  },
  footer: {
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
  },
});
