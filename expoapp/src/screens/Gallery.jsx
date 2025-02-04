import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

const Gallery = () => {
  // Sample data for gallery images
  const images = [
    { id: "1", uri: "https://img.freepik.com/free-photo/woman-playing-paddle-tennis-side-view_23-2149459048.jpg" },
    { id: "2", uri: "https://img.freepik.com/free-photo/paddles-balls-ready-playing-tennis-inside_23-2149444584.jpg" },
    { id: "3", uri: "https://img.freepik.com/free-photo/palette-balls-field-high-angle_23-2149459005.jpg" },
    { id: "4", uri: "https://img.freepik.com/free-photo/full-shot-man-holding-tennis-paddle_23-2149434230.jpg" },
    { id: "5", uri: "https://img.freepik.com/free-photo/palette-balls-field-low-angle_23-2149459003.jpg" },
    { id: "6", uri: "https://img.freepik.com/free-photo/padel-blade-racket-resting-net_657883-605.jpg" },
    { id: "7", uri: "https://img.freepik.com/free-photo/paddle-tennis-palette-ball-floor_23-2149459022.jpg" },
    { id: "8", uri: "https://img.freepik.com/free-photo/high-angle-tennis-paddle-ball_23-2149434138.jpg" },    
    { id: "9", uri: "https://img.freepik.com/free-photo/woman-playing-paddle-tennis-side-view_23-2149459048.jpg" },
    { id: "10", uri: "https://img.freepik.com/free-photo/paddles-balls-ready-playing-tennis-inside_23-2149444584.jpg" },
    { id: "11", uri: "https://img.freepik.com/free-photo/palette-balls-field-high-angle_23-2149459005.jpg" },
    { id: "12", uri: "https://img.freepik.com/free-photo/full-shot-man-holding-tennis-paddle_23-2149434230.jpg" },
    { id: "13", uri: "https://img.freepik.com/free-photo/palette-balls-field-low-angle_23-2149459003.jpg" },
    { id: "14", uri: "https://img.freepik.com/free-photo/padel-blade-racket-resting-net_657883-605.jpg" },
    { id: "15", uri: "https://img.freepik.com/free-photo/paddle-tennis-palette-ball-floor_23-2149459022.jpg" },
    { id: "16", uri: "https://img.freepik.com/free-photo/high-angle-tennis-paddle-ball_23-2149434138.jpg" },    
    { id: "17", uri: "https://img.freepik.com/free-photo/woman-playing-paddle-tennis-side-view_23-2149459048.jpg" },
    { id: "18", uri: "https://img.freepik.com/free-photo/paddles-balls-ready-playing-tennis-inside_23-2149444584.jpg" },
    { id: "19", uri: "https://img.freepik.com/free-photo/palette-balls-field-high-angle_23-2149459005.jpg" },
    { id: "20", uri: "https://img.freepik.com/free-photo/full-shot-man-holding-tennis-paddle_23-2149434230.jpg" },
    { id: "21", uri: "https://img.freepik.com/free-photo/palette-balls-field-low-angle_23-2149459003.jpg" },
    { id: "22", uri: "https://img.freepik.com/free-photo/padel-blade-racket-resting-net_657883-605.jpg" },
    { id: "23", uri: "https://img.freepik.com/free-photo/paddle-tennis-palette-ball-floor_23-2149459022.jpg" },
    { id: "24", uri: "https://img.freepik.com/free-photo/high-angle-tennis-paddle-ball_23-2149434138.jpg" },    
    { id: "25", uri: "https://img.freepik.com/free-photo/woman-playing-paddle-tennis-side-view_23-2149459048.jpg" },
    { id: "26", uri: "https://img.freepik.com/free-photo/paddles-balls-ready-playing-tennis-inside_23-2149444584.jpg" },
    { id: "27", uri: "https://img.freepik.com/free-photo/palette-balls-field-high-angle_23-2149459005.jpg" },
    { id: "28", uri: "https://img.freepik.com/free-photo/full-shot-man-holding-tennis-paddle_23-2149434230.jpg" },
    { id: "29", uri: "https://img.freepik.com/free-photo/palette-balls-field-low-angle_23-2149459003.jpg" },
    { id: "30", uri: "https://img.freepik.com/free-photo/padel-blade-racket-resting-net_657883-605.jpg" },
    { id: "31", uri: "https://img.freepik.com/free-photo/paddle-tennis-palette-ball-floor_23-2149459022.jpg" },
    { id: "32", uri: "https://img.freepik.com/free-photo/high-angle-tennis-paddle-ball_23-2149434138.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (uri) => {
    setSelectedImage(uri); // Set the selected image in the modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleImagePress(item.uri)}
      style={styles.imageWrapper}
    >
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Gallery Grid */}
      <FlatList
        data={images}
        numColumns={3} // Show 3 images per row
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.gallery}
      />

      {/* Modal to display the image in full screen */}
      <Modal
        visible={!!selectedImage} // Modal is visible when there's a selected image
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
            <Image source={{ uri: selectedImage }} style={styles.modalImage} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Light gray background
    padding: 10,
  },
  gallery: {
    flex: 1,
    marginBottom: 20,
  },
  imageWrapper: {
    margin: 5,
    borderRadius: 10,
    elevation: 5, // Add shadow effect for iOS
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden", // Ensures the image doesn't overflow the rounded corners
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker overlay background
  },
  modalContent: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    position: "relative",
    maxWidth: "90%",
  },
  modalImage: {
    width: "100%",
    height: 400,
    borderRadius: 15,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 5,
  },
  closeText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Gallery;
