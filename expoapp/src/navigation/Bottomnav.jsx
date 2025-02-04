import React from 'react'
import { View,TouchableOpacity, Text,StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const Bottomnav = () => {
  return (
    <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={24} color="#6C63FF" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="tennisball-outline" size={24} color="#aaa" />
          <Text style={styles.navText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cart-outline" size={24} color="#aaa" />
          <Text style={styles.navText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="notifications-outline" size={24} color="#aaa" />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Bottomnav

const styles =   StyleSheet.create({
    cardText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
      },
      bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        backgroundColor: "#",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
      },
      navItem: {
        alignItems: "center",
      },
      navText: {
        fontSize: 12,
        color: "#aaa",
        marginTop: 5,
      },
})