import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Modal, Alert, CheckBox, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// Dummy product data
const products = [
  { id: '1', name: 'Pepsi', price: 'Rs150', image: 'https://s.yimg.com/fz/api/res/1.2/9vVA9PZkor5.y4lK5kp8LQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD04ODt3PTg4/https://tse3.mm.bing.net/th?q=Pepsi+Can+PNG&pid=Api&mkt=en-US&cc=US&setlang=en&adlt=strict&t=1' },
  { id: '2', name: 'French Fries', price: 'Rs300', image: 'https://tse3.mm.bing.net/th?id=OIP.9MM9v7VZhiUSGon_EapRuwHaFj&pid=Api&P=0&h=220' },
  { id: '3', name: 'Sweet Corn', price: 'Rs250', image: 'https://tse3.mm.bing.net/th?id=OIP.ETrL19BxWlcYMSTO1Few8AHaLH&pid=Api&P=0&h=220' },
  { id: '4', name: 'Sprite', price: 'Rs150', image: 'https://tse2.mm.bing.net/th?id=OIP.t4Ee8R-wcEDJpwOpqDOyZAHaVx&pid=Api&P=0&h=220'  },
];

const ProductList = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productQuantities, setProductQuantities] = useState({}); // Store quantities by product ID
  const [cartVisible, setCartVisible] = useState(false); // State to toggle cart visibility

  // Function to open the modal with the selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [product.id]: prevQuantities[product.id] || 1, // Default quantity to 1 if not set
    }));
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Function to increase quantity for the selected product
  const increaseQuantity = () => {
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [selectedProduct.id]: prevQuantities[selectedProduct.id] + 1,
    }));
  };

  // Function to decrease quantity for the selected product
  const decreaseQuantity = () => {
    if (productQuantities[selectedProduct.id] > 1) {
      setProductQuantities(prevQuantities => ({
        ...prevQuantities,
        [selectedProduct.id]: prevQuantities[selectedProduct.id] - 1,
      }));
    }
  };

  // Function to add the product with selected quantity to the cart
  const addToCart = () => {
    const quantity = productQuantities[selectedProduct.id];
    if (quantity <= 0) {
      Alert.alert('Invalid Quantity', 'Quantity should be greater than 0.');
      return;
    }

    setCart(prevCart => [
      ...prevCart,
      { ...selectedProduct, quantity }, // Add the selected product with the chosen quantity to the cart
    ]);

    closeModal();
    alert(`${selectedProduct.name} added to cart!`);
  };

  // Function to remove item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  // Show alert and navigate to detail page after clicking continue
  const handleContinue = () => {
    Alert.alert(
      "Important Information",
      "Please make sure to settle any outstanding payments at the booking counter before your scheduled start time.\nTournaments, events, and training sessions cannot be organized through regular bookings.",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Bookingdetail", { cart }),  // Navigate to Detail Page after pressing OK
        },
      ],
      { cancelable: false }
    );
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>

      {/* Quantity adjustment with plus and minus icons */}
      <View style={styles.quantitySelector}>
        <TouchableOpacity onPress={() => openModal(item)}>
          <Icon name="plus" size={24} color="#FF5555" />
        </TouchableOpacity>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => openModal(item)}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <Text style={styles.cartItemText}>{item.name}</Text>
      <Text style={styles.cartItemText}>Quantity: {item.quantity}</Text>
      <Text style={styles.cartItemText}>Price: {item.price}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      {/* Modal for displaying product details */}
      {selectedProduct && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Product Details</Text>
              <Image
                source={{ uri: selectedProduct.image }}
                style={styles.productImageInModal}
              />
              <Text style={styles.modalProductName}>{selectedProduct.name}</Text>
              <Text style={styles.modalProductPrice}>{selectedProduct.price}</Text>
              <Text style={styles.modalProductQuantity}>Quantity: {productQuantities[selectedProduct.id]}</Text>

              {/* Quantity controls inside modal */}
              <View style={styles.quantitySelector}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Icon name="minus" size={24} color="#FF5555" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{productQuantities[selectedProduct.id]}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                  <Icon name="plus" size={24} color="#FF5555" />
                </TouchableOpacity>
              </View>

              {/* Add to Cart Button in Modal */}
              <TouchableOpacity style={styles.modalButton} onPress={addToCart}>
                <Text style={styles.modalButtonText}>Confirm and Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* Cart Section */}
      {cartVisible && (
        <View style={styles.cartContainer}>
          <Text style={styles.cartTitle}>Cart</Text>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}

      {/* Cart Icon - Displayed only when items are in the cart */}
      {cart.length > 0 && (
        <TouchableOpacity
          style={styles.cartIcon}
          onPress={toggleCart}  // Toggle cart visibility on icon click
        >
          <Icon name="shopping-cart" size={30} color="white" />
          <Text style={styles.cartIconText}>{cart.length}</Text>
        </TouchableOpacity>
      )}

      {/* Continue Button with Add to Cart Icon */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cartButtonIcon}
          onPress={toggleCart}
        >
          <Icon name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    margin: 10,
    marginBottom: 15,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF5555',
    marginVertical: 5,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: '#FF5555',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartIcon: {
    position: 'absolute',
    top: -20,
    right: -10,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 8,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  productImageInModal: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 10,
  },
  modalProductName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalProductPrice: {
    fontSize: 16,
    color: '#FF5555',
    marginBottom: 10,
  },
  modalProductQuantity: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#FF5555',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 50,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cartItemText: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  cartButtonIcon: {
    backgroundColor: '#FF5555',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  continueButton: {
    backgroundColor: '#FF5555',
    paddingVertical: 12,
    paddingHorizontal: 30,  // Adjust the horizontal padding to reduce width
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductList;
