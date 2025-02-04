import React from "react";
import { useState,useEffect } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import BookingDetail from "../screens/Bookingdetail";
import Notification from "../screens/Notification";
import Gallery from "../screens/Gallery";
import AppNavigation from ".";
import Home from "../screens/Home";
import EventsScreen from "../screens/EventsScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import Loginn from "../auth/Loginn";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fees from "../screens/Fees";
import InfoContact from "../screens/InfoContact";
import CourtBookingApp from "../screens/CourtBookingApp";
import History from "../screens/History";
import login from "../auth/login";
import {auth} from '../auth/firebaseConfig'
import {onAuthStateChanged ,signOut } from "firebase/auth";
import Login from "../auth/login";

const Drawer = createDrawerNavigator();

const AppDrawer = ({navigation}) => {
  const drawerItems = [
    { label: "Alerts", icon: "bell-outline", screen: "" },
    {
      label: "My bookings",
      icon: "calendar-check-outline",
      screen: "CourtBookingApp",
    },
    { label: "Events", icon: "clock-time-eight", screen: "EventsScreen" },
    { label: "Book a court", icon: "tennis", screen: "CourtBookingApp" },
    { label: "About Us", icon: "lightbulb-on-outline", screen: "aboutus" },
    { label: "Gallery", icon: "view-grid", screen: "Gallery" },
    {
      label: "Notfication",
      icon: "notification-clear-all",
      screen: "notifictaion",
    },
    { label: "Membership history", icon: "wallet-membership", screen: "History" },
    { label: "Fees", icon: "cash-multiple", screen: "Fees" },
    {
      label: "Info & Contact",
      icon: "information-outline",
      screen: "InfoContact",
    },
   
  ];
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);
  if (!user) {
    // return <Login/>;
  }
 

  const logout= async()=>{
   
   try{
    await signOut(auth);
    console.log("user signout succesfully");
    

   }catch(err){
    console.log(err);
    
   }
  }
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => {
        return (
          <View style={styles.main}>
            <View style={styles.drawerTop}>
              <Image
                source={require("../assets/images/logo1.png")}
                style={styles.logo}
              />
              <Text style={styles.hr}></Text>
            </View>
            <ScrollView>
              <View style={styles.drawerContainer}>
                {drawerItems.map((item, index) => (
                  <TouchableOpacity
                    style={styles.drawerItem}
                    key={index}
                    onPress={() => navigation.navigate(`${item.screen}`)}
                  >
                    <Icon name={item.icon} size={25} color="#b8ea3f" />

                    <Text style={styles.drawerLabel}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity     style={styles.drawerItem}
                onPress={logout}
                >
                <Icon name="logout" size={25} color="#b8ea3f"/>
                <Text style={styles.drawerLabel}>Logout</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        );
      }}
    >
      <Drawer.Screen
        name="MainStack"
        component={AppNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="bookingDetails" component={BookingDetail} />
      <Drawer.Screen name="notifictaion" component={Notification} />
      <Drawer.Screen name="Gallery" component={Gallery} />
      <Drawer.Screen name="EventsScreen" component={EventsScreen} />
      <Drawer.Screen name="EventDetails" component={EventDetailsScreen} />
      <Drawer.Screen name="aboutus" component={AboutUsScreen} />
      <Drawer.Screen name="Fees" component={Fees} />
      <Drawer.Screen name="InfoContact" component={InfoContact} />
      <Drawer.Screen name="Court Booking" component={CourtBookingApp} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Loginn" component={Loginn} />
      
      
    
    </Drawer.Navigator>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
    opacity: 2,
    padding: 16,
  },
  drawerTop: {
    color: "#fff",
  },
  logo: {
    width: 270,
    height: 150,
    marginTop: 30,
    marginBottom: 20,
    objectFit: "contain",
  },
  hr: {
    borderBottomColor: "#b8ea3f",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  drawerContainer: {},
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 2,
  },
  drawerLabel: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  screenText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
