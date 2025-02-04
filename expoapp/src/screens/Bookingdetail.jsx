import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";

const BookingDetail = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    // Navigate to the next screen directly without the checkbox check
    navigation.navigate("BookingConfirmation");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Padel Pulse</Text>
      </View>

      <ScrollView>
        {/* Image Section */}
        <Image
          source={{
            uri: "https://tse3.mm.bing.net/th?id=OIP.eDROArWYkpOv2d6EVBAW8gHaFj&pid=Api&P=0&h=220",
          }} // Replace with actual image URL
          style={styles.image}
        />

        {/* Details Section */}
        <View style={styles.details}>
          <Text style={styles.title}>Booking Details</Text>
          <Text style={styles.subtitle}>Experience the ultimate in Padel!</Text>

          {/* Details List */}
          <View style={styles.detailItem}>
            <Text style={styles.icon}>🎾</Text>
            <Text style={styles.detailText}>Sport: Padel</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.icon}>📅</Text>
            <Text style={styles.detailText}>
              Sat 30 - 09:00 AM to 10:00 AM
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.icon}>💰</Text>
            <Text style={styles.detailText}>4500.00 Rs</Text>
          </View>
        </View>

        {/* Price Summary */}
        <View style={styles.summary}>
          <Text style={styles.summaryLabel}>Booking Cost</Text>
          <Text style={styles.summaryPrice}>+4500.00 Rs</Text>
        </View>

        {/* Book Button */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => setModalVisible(true)} // Show modal when button is pressed
        >
          <Text style={styles.bookButtonText}>BOOK NOW</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal Popup */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Payment Option</Text>

            {/* Payment Options */}
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === "card" && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect("card")}
            >
              <Text style={styles.optionText}>PAY WITH A CARD</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === "vouchers" && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect("vouchers")}
            >
              <Text style={styles.optionText}>PAY WITH VOUCHERS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === "coupons" && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect("coupons")}
            >
              <Text style={styles.optionText}>USE COUPONS</Text>
            </TouchableOpacity>

            {/* Cancel and Continue Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue}
              >
                <Text style={styles.continueButtonText}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "#3b3b3b",
    padding: 16,
    alignItems: "center",
  },
  logo: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  details: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    color: "#6C63FF",
  },
  detailText: {
    fontSize: 16,
    color: "#444",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  summaryLabel: {
    fontSize: 18,
    color: "#555",
  },
  summaryPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  bookButton: {
    backgroundColor: "#6C63FF",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "100%",  // Full width
    height: "50%",  // Half the screen height
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionButton: {
    padding: 14,
    backgroundColor: "#f1f1f1",
    marginVertical: 8,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#6C63FF",
  },
  optionText: {
    fontSize: 18,
    color: "#444",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 16,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 18,
    color: "#444",
  },
  continueButton: {
    backgroundColor: "#6C63FF",
    padding: 16,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  continueButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default BookingDetail;
