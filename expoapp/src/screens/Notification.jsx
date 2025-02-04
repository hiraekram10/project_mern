import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const notifications = [
  { id: "1", title: "Booking Confirmed", message: "Your booking for Padel is confirmed.", time: "5 mins ago" },
  { id: "2", title: "Payment Successful", message: "Your payment of 4500 Rs was successful.", time: "1 hour ago" },
  { id: "3", title: "Payment Failed", message: "Your payment of 4500 Rs was Failed", time: "1 day ago" },
  { id: "4", title: "Account Verification", message: "Check your Email to verify your account", time: "1 day ago" },
  { id: "5", title: "Peak Hours", message: "Check our website to grab your slots now", time: "1 day ago" },
  { id: "6", title: "New Offer", message: "Get 20% off on your next booking!", time: "1 day ago" },
  // Add more notifications
];

const Notification = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
    backgroundColor: "#000",
    color: "#B8EA3F",
  },
  listContainer: {
    padding: 16,
  },
  notificationItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
});

export default Notification;
