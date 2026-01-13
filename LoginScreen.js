import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { COLORS } from "../theme/colors";

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      
      {/* Logo Section */}
      <View style={styles.logoBox}>
        <Text style={styles.logo}>🍔 Bunzy Burger</Text>
        <Text style={styles.tagline}>Big Buns. Bold Flavors.</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        <TextInput
          placeholder="Username or email"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={COLORS.gray}
          secureTextEntry={!showPassword}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPass}>
            {showPassword ? "Hide Password" : "Show Password"}
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Main")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Guest Login */}
        <TouchableOpacity onPress={() => navigation.replace("Main")}>
          <Text style={styles.guest}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        © 2026 Bunzy Burger / Developed by Talha
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    padding: 20,
  },
  logoBox: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    color: COLORS.yellow,
    fontSize: 34,
    fontWeight: "bold",
  },
  tagline: {
    color: COLORS.gray,
    fontSize: 14,
    marginTop: 5,
  },
  form: {
    backgroundColor: "#1c1c1c",
    borderRadius: 25,
    padding: 20,
  },
  input: {
    backgroundColor: "#2a2a2a",
    borderRadius: 15,
    padding: 15,
    color: COLORS.white,
    marginBottom: 15,
  },
  showPass: {
    color: COLORS.yellow,
    textAlign: "right",
    marginBottom: 20,
    fontSize: 12,
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  guest: {
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 15,
  },
  footer: {
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 25,
    fontSize: 12,
  },
});
