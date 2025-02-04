import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

// Base URL for WordPress REST API
const BASE_URL = "https://padelpulse.pk/wp-json";

const News = () => {
  const [membershipData, setMembershipData] = useState(null);

  // Function to fetch membership data
  const fetchMembershipData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/membership/v1/user/1`);
      setMembershipData(response.data);
    } catch (error) {
      console.error("Error Fetching Membership Data:", error);
      Alert.alert("Error", "Could not fetch membership data.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WooCommerce Membership App</Text>

      {/* Fetch Membership Data */}
      <View style={styles.buttonContainer}>
        <Button title="Fetch Membership Data" onPress={fetchMembershipData} />
      </View>

      {/* Display Membership Data */}
      {membershipData && (
        <View style={styles.membershipContainer}>
          <Text style={styles.membershipText}>
            Membership Level: {membershipData.membership_level}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  membershipContainer: {
    marginTop: 30,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#e6f7ff",
  },
  membershipText: {
    fontSize: 18,
    color: "#333",
  },
});

export default News;
