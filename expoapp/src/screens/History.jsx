import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { CardField, useStripe } from "@stripe/stripe-react-native";

const History = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [modalType, setModalType] = useState("confirmation");
  const [paymentInProgress, setPaymentInProgress] = useState(false);

  const stripe = useStripe();
  const navigation = useNavigation();

  const memberships = {
    Gold: { price: 100000, description: "Gold Membership" },
    Silver: { price: 70000, description: "Silver Membership" },
    Classic: { price: 35000, description: "Classic Membership" },
  };

  const handleConfirm = () => {
    setModalType("checkout");
  };

  const handleChooseMembership = (type) => {
    setSelectedMembership(memberships[type].description);
    setSelectedPrice(memberships[type].price);
    setModalType("confirmation");
    setModalVisible(true);
  };

  const handlePayment = async () => {
    setPaymentInProgress(true);
    try {
      // Call your backend to create a payment intent
      const response = await fetch("https://your-backend-url.com/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedPrice * 100, currency: "usd" }), // Amount in cents
      });

      const { clientSecret } = await response.json();

      // Confirm the payment with Stripe
      const { error, paymentIntent } = await stripe.confirmPayment({
        paymentMethodType: "Card",
        clientSecret,
      });

      if (error) {
        Alert.alert("Payment Failed", error.message);
      } else if (paymentIntent) {
        Alert.alert("Payment Successful", `Payment ID: ${paymentIntent.id}`);
        setModalVisible(false);
        navigation.navigate("ConfirmationScreen");
      }
    } catch (error) {
      Alert.alert("Error", "Unable to process payment. Try again later.");
    } finally {
      setPaymentInProgress(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(memberships).map((type) => (
        <View
          key={type}
          style={[
            styles.card,
            type === "Gold" ? styles.goldCard : type === "Silver" ? styles.silverCard : styles.classicCard,
          ]}
        >
          <Text style={styles.membershipName}>{`${type} Membership`}</Text>
          <Text style={styles.price}>₨ {memberships[type].price.toLocaleString()}</Text>
          <Text style={styles.benefits}>
            Earn 1 point for every 10 PKR spent on bookings.
          </Text>
          <Text style={styles.benefits}>
            {type === "Gold"
              ? "Unlock a generous 15% discount on all bookings."
              : type === "Silver"
              ? "Enjoy an exclusive 7.5% discount on all bookings."
              : ""}
          </Text>
          <Text style={styles.description}>
            {type === "Gold"
              ? "Perfect for passionate players who want the ultimate value and experience."
              : type === "Silver"
              ? "Ideal for frequent players who want added savings and rewards."
              : "Great for occasional players looking to enjoy consistent rewards."}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleChooseMembership(type)}
          >
            <Text style={styles.buttonText}>{`Choose ${type}`}</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Modal for Confirmation or Checkout */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={[
            modalType === "checkout" ? styles.checkoutModalOverlay : styles.modalOverlay,
          ]}
        >
          <View
            style={[
              styles.modalContainer,
              modalType === "checkout" && styles.checkoutModalContainer,
            ]}
          >
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>

            {modalType === "confirmation" ? (
              <>
                <Text style={styles.modalTitle}>Confirm Your Choice</Text>
                <Text style={styles.modalText}>
                  Are you sure you want to choose {selectedMembership}?
                </Text>
                <TouchableOpacity
                  style={[styles.button, styles.confirmButton]}
                  onPress={handleConfirm}
                >
                  <Text style={styles.buttonTextConfirm}>Yes, Confirm</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Checkout</Text>
                <Text style={styles.modalText}>
                  Membership: {selectedMembership}
                </Text>
                <Text style={styles.modalText}>
                  Amount: ₨ {selectedPrice.toLocaleString()} (per month)
                </Text>
                <CardField
                  postalCodeEnabled={false}
                  placeholders={{
                    number: "4242 4242 4242 4242",
                  }}
                  cardStyle={{
                    backgroundColor: "#FFFFFF",
                    textColor: "#000000",
                  }}
                  style={{
                    width: "100%",
                    height: 50,
                    marginVertical: 20,
                  }}
                  onCardChange={(cardDetails) => console.log(cardDetails)}
                />
                <TouchableOpacity
                  style={[
                    styles.button,
                    styles.confirmButton,
                    paymentInProgress && styles.disabledButton,
                  ]}
                  onPress={handlePayment}
                  disabled={paymentInProgress}
                >
                  <Text style={styles.buttonTextConfirm}>
                    {paymentInProgress ? "Processing..." : "Proceed to Payment"}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "black",
    alignItems: "center",
  },
  card: {
    width: "100%",
    borderRadius: 15,
    marginBottom: 20,
    padding: 20,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    overflow: "hidden",
    alignItems: "center",
  },
  goldCard: {
    borderWidth: 1,
    borderColor: "#B8EA3F",
  },
  silverCard: {
    borderWidth: 1,
    borderColor: "#B8EA3F",
  },
  classicCard: {
    borderWidth: 1,
    borderColor: "#B8EA3F",
  },
  membershipName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#B8EA3F",
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  price: {
    fontSize: 24,
    fontWeight: "600",
    color: "#B8EA3F",
    marginVertical: 10,
  },
  benefits: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    color: "#fff",
    marginVertical: 12,
    textAlign: "left",
    fontStyle: "italic",
  },
  button: {
    borderColor: "#B8EA3F",
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    width: "70%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextConfirm: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  checkoutModalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#B8EA3F",
    padding: 25,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
    elevation: 8,
  },
  checkoutModalContainer: {
    height: "50%",
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "black",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  confirmButton: {
    backgroundColor: "white",
    borderColor: "green",
    width: "80%",
    marginTop: 10,
  },
});

export default History;
