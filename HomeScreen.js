import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { useState } from "react";
import { burgers } from "../data/burgers";
import { COLORS } from "../theme/colors";

const filters = ["All", "Cheesy", "Grilled", "Smoky", "Crispy"];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filterItems = (items) => {
    return items.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchFilter =
        activeFilter === "All" || item.flavor === activeFilter;

      return matchSearch && matchFilter;
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Heading */}
      <Text style={styles.heading}>🍔 Bunzy Burger Menu</Text>

      {/* Search Bar */}
      <TextInput
        placeholder="Search your burger..."
        placeholderTextColor="#777"
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      {/* Filter Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
        {filters.map((f) => (
          <TouchableOpacity
            key={f}
            style={[
              styles.filterBtn,
              activeFilter === f && styles.activeFilter,
            ]}
            onPress={() => setActiveFilter(f)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === f && styles.activeText,
              ]}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Categories */}
      {burgers.map((category, index) => {
        const filteredItems = filterItems(category.items);

        if (filteredItems.length === 0) return null;

        return (
          <View key={index} style={styles.categoryBox}>
            <Text style={styles.categoryTitle}>{category.category}</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredItems.map((b) => (
                <TouchableOpacity
                  key={b.id}
                  style={styles.card}
                  onPress={() =>
                    navigation.navigate("Detail", { burger: b })
                  }
                >
                  <Image source={b.image} style={styles.image} />
                  <Text style={styles.name}>{b.name}</Text>
                  <Text style={styles.flavor}>{b.flavor}</Text>
                  <Text style={styles.price}>Rs {b.price}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    padding: 10,
  },
  heading: {
    color: COLORS.yellow,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  search: {
    backgroundColor: "#1f1f1f",
    // borderColor: COLORS.yellow,
    // borderWidth: 1,
    borderRadius: 15,
    padding: 12,
    color: COLORS.white,
    marginBottom: 12,
  },
  filterRow: {
    marginBottom: 15,
  },
  filterBtn: {
    backgroundColor: "#1f1f1f",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  activeFilter: {
    backgroundColor: COLORS.yellow,
  },
  filterText: {
    color: COLORS.white,
    fontSize: 13,
  },
  activeText: {
    color: COLORS.black,
    fontWeight: "bold",
  },
  categoryBox: {
    marginBottom: 25,
  },
  categoryTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 12,
    marginRight: 15,
    width: 160,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    resizeMode: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    color: COLORS.black,
  },
  flavor: {
    color: "#555",
    fontSize: 12,
  },
  price: {
    color: COLORS.yellow,
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
});
