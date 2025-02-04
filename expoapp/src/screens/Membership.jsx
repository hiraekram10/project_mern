import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Membership = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const navigation = useNavigation(); // Navigation hook to navigate between screens

  // Function to handle confirmation and navigate to another screen
  const handleConfirm = () => {
    setModalVisible(false); // Hide the modal after confirming
    navigation.navigate('Confirmation'); // Navigate to the 'Confirmation' screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Gold Membership Card */}
      <View style={[styles.card, styles.goldCard]}>
        <Text style={styles.membershipName}>Gold Membership</Text>
        <Text style={styles.price}>₨ 100,000</Text>
        <Text style={styles.benefits}>Earn 1 point for every 10 PKR spent on bookings.</Text>
        <Text style={styles.benefits}>Unlock a generous 15% discount on all bookings.</Text>
        <Text style={styles.description}>
          Perfect for passionate players who want the ultimate value and experience.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Choose Gold</Text>
        </TouchableOpacity>
      </View>

      {/* Silver Membership Card */}
      <View style={[styles.card, styles.silverCard]}>
        <Text style={styles.membershipName}>Silver Membership</Text>
        <Text style={styles.price}>₨ 70,000</Text>
        <Text style={styles.benefits}>Earn 1 point for every 10 PKR spent on bookings.</Text>
        <Text style={styles.benefits}>Enjoy an exclusive 7.5% discount on all bookings.</Text>
        <Text style={styles.description}>
          Ideal for frequent players who want added savings and rewards.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)} // Open modal when clicked
        >
          <Text style={styles.buttonText}>Choose Silver</Text>
        </TouchableOpacity>
      </View>

      {/* Classic Membership Card */}
      <View style={[styles.card, styles.classicCard]}>
        <Text style={styles.membershipName}>Classic Membership</Text>
        <Text style={styles.price}>₨ 35,000</Text>
        <Text style={styles.benefits}>Earn 1 point for every 10 PKR spent on bookings.</Text>
        <Text style={styles.description}>
          Great for occasional players looking to enjoy consistent rewards.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Choose Classic</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible} // Controlled by state
        onRequestClose={() => setModalVisible(false)} // Close modal on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Your Choice</Text>
            <Text style={styles.modalText}>Are you sure you want to choose Silver Membership?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#B8EA3F' }]}
                onPress={handleConfirm} // Confirm and navigate to next screen
              >
                <Text style={styles.buttonText}>Yes, Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#F44336' }]}
                onPress={() => setModalVisible(false)} // Close modal without confirming
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
    alignItems: 'center', // Center everything horizontally
  },
  card: {
    width: '100%',
    borderRadius: 15,
    marginBottom: 20,
    padding: 20,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden', // Rounded corners for the card
    alignItems: 'center', // Centering text and button inside cards
  },
  goldCard: {
    borderWidth: 1,
    borderColor: '#B8EA3F',
  },
  silverCard: {
    borderWidth: 1,
    borderColor: '#B8EA3F',
  },
  classicCard: {
    borderWidth: 1,
    borderColor: '#B8EA3F',
  },
  membershipName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#B8EA3F',
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: '#B8EA3F',
    marginVertical: 10,
  },
  benefits: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 12,
    textAlign: 'left',
    fontStyle: 'italic',
  },
  button: {
    borderColor: "#B8EA3F",
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    width: '70%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#B8EA3F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for overlay
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Membership;
