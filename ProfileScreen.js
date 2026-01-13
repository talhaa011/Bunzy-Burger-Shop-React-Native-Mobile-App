import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color={COLORS.black} />
        </View>
        <Text style={styles.name}>Guest User</Text>
        <Text style={styles.subText}>Bunzy Burger Lover 🍔</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Orders</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
      </View>

      {/* Info Card */}
      <View style={styles.card}>
        <Text style={styles.info}>📍 Location: Multan, Pakistan</Text>
        <Text style={styles.info}>🍔 Favorite Brand: Bunzy Burger</Text>
        <Text style={styles.info}>📅 Member Since: 2026</Text>
      </View>

      {/* Actions */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outlineBtn}>
        <Text style={styles.outlineText}>Edit Profile</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 25,
    marginTop: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.yellow,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  subText: {
    color: COLORS.gray,
    fontSize: 13,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: "#1c1c1c",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    width: "30%",
  },
  statNumber: {
    color: COLORS.yellow,
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 4,
  },
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  info: {
    color: COLORS.white,
    fontSize: 15,
    marginBottom: 8,
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  outlineBtn: {
    borderColor: COLORS.yellow,
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  outlineText: {
    color: COLORS.yellow,
    fontSize: 15,
  },
});
