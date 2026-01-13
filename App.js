import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartProvider } from "./context/CartContext.js";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import CartScreen from "./screens/CartScreen";
import AboutScreen from "./screens/AboutScreen";
import ProfileScreen from "./screens/ProfileScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "./theme/colors";

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.black,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: COLORS.yellow,
        tabBarInactiveTintColor: "#777",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") iconName = "fast-food";
          else if (route.name === "Cart") iconName = "cart";
          else if (route.name === "About") iconName = "information-circle";
          else if (route.name === "Profile") iconName = "person";

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={Tabs} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
