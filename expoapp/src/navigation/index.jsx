import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import Loginn from "../auth/Loginn";
import login from "../auth/Loginn";
import Login from "../auth/login";
import Register from "../auth/Register";
import Home from "../screens/Home";
import CourtBookingApp from "../screens/CourtBookingApp";
import ProductList from "../screens/ProductList";
import Bookingdetail from "../screens/Bookingdetail";
import Icon from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";
import Gallery from "../screens/Gallery";
import FeesScreen from "../screens/Fees";
import History from "../screens/History";
import Membership from "../screens/Membership";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import BookingApp from "../screens/BookingApp";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Loginn">
      <Stack.Screen
        name="Loginn"
        component={Loginn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "black",
          },

          headerRight: () => <AntIcon name="user" style={styles.headerRight} />,
          headerTitle: () => {
            return (
              <View>
                <Image
                  source={require("../assets/images/logo.png")}
                  style={styles.logo}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="CourtBookingApp" component={CourtBookingApp} />
      <Stack.Screen name="BookingApp" component={BookingApp} />
      <Stack.Screen name="Bookingdetail" component={Bookingdetail} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="FeesScreen" component={FeesScreen} />
      <Stack.Screen name="Membership" component={Membership} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 50,
    objectFit: "contain",
  },
  text: {
    fontSize: 25,
    color: "#b8ea3f",
    marginLeft: 10,
  },
  headerRight: {
    fontSize: 25,
    color: "#b8ea3f",
    marginRight: 10,
  },
});
