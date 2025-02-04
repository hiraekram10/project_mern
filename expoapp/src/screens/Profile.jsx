import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";

const Profile = () => {
  // Function to handle logout action
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => console.log("Logged out") }, // Replace with actual logout logic
      ],
      { cancelable: true }
    );
  };

  // Function to handle account deletion
  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This action will permanently delete your account. Are you sure you want to proceed?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => console.log("Account deleted"), // Replace with actual delete logic
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150", // Replace with the user's profile picture URL
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>

      {/* Profile Details Section */}
      <ScrollView>
        <View style={styles.details}>
          <Text style={styles.sectionTitle}>Your Bookings</Text>

          {/* Booking Item */}
          <View style={styles.bookingItem}>
            <Text style={styles.bookingLabel}>Court:</Text>
            <Text style={styles.bookingValue}>Padel</Text>

            <Text style={styles.bookingLabel}>Date:</Text>
            <Text style={styles.bookingValue}>Sat 30 - 09:00 AM to 10:00 AM</Text>

            <Text style={styles.bookingLabel}>Price:</Text>
            <Text style={styles.bookingValue}>4500 Rs</Text>
          </View>

          <View style={styles.bookingItem}>
            <Text style={styles.bookingLabel}>Court:</Text>
            <Text style={styles.bookingValue}>Tennis</Text>

            <Text style={styles.bookingLabel}>Date:</Text>
            <Text style={styles.bookingValue}>Sun 1 - 11:00 AM to 12:00 PM</Text>

            <Text style={styles.bookingLabel}>Price:</Text>
            <Text style={styles.bookingValue}>7500 Rs</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
          <Text style={styles.deleteButtonText}>Delete My Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 16,
  },
  profileName: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 16,
    color: "#dcdcdc",
  },
  details: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  bookingItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  bookingLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 4,
  },
  bookingValue: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FF5733",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#FF4444",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
