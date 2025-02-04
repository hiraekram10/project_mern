import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Bottomnav from "../navigation/Bottomnav";

const Home = ({ navigation }) => {
  // console.log('Home',navigation.openDrawer())
  const cards = [
    {
      title: "Find a Court",
      image: {
        uri: "https://img.freepik.com/free-photo/tennis-player-serving-hall_23-2147821248.jpg?ga=GA1.1.880866563.1733333951&semt=ais_hybrid",
      }, // Using the provided link
      icon: "tennisball-outline",
    },
    {
      title: "Find a History",
      image: {
        uri: "https://img.freepik.com/free-photo/tennis-ball-tennis-court_155003-13701.jpg?ga=GA1.1.880866563.1733333951&semt=ais_hybrid",
      }, // Replace with another URL or your image
      icon: "tennisball-outline",
    },
    {
      title: "Find a Membership" ,
      image: {
        uri: "https://img.freepik.com/free-photo/high-angle-palettes-balls_23-2149459008.jpg?ga=GA1.1.880866563.1733333951&semt=ais_hybrid",
      }, // Replace with another URL or your image
      icon: "trophy-outline",
    },
    {
      title: "About us",
      image: {
        uri: "https://img.freepik.com/free-photo/paddle-tennis-court-with-balls-low-angle_23-2149434233.jpg?ga=GA1.1.880866563.1733333951&semt=ais_hybrid",
      }, // Replace with another URL or your image
      icon: "stats-chart-outline",
    },
  ];

 useEffect(()=>{
 navigation.setOptions({

  headerLeft: () => (
    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
    <Icon name="menu"  style={styles.text} />
    </TouchableOpacity>
  ),
  
 })
 },[navigation])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Best Padel Pulse & Exclusive Club</Text>
        </View>
        <View style={styles.cardContainer}>
          {cards.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                // Navigate to the Booking page when the "Find a Court" card is pressed
                if (card.title === "Find a Court") {
                  navigation.navigate("CourtBookingApp", {
                    selectedCourt: card.title,
                    selectedDate: "2024-12-11", // You can dynamically set the date here
                  });
                }
              }}
            >
              <ImageBackground
                source={card.image}
                style={styles.cardImage}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={styles.overlay}>
                  <Icon name={card.icon} size={30} color="#fff" />
                  <Text style={styles.cardText}>{card.title}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/* add here bootm nav */}
      <Bottomnav/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#FFD700",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  cardContainer: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
  },
  cardImage: {
    height: 150,
    color:"#B8EA3F",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    color: "#B8EA3F",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "black",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    color:"black",
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 5,
  },
  text: {
    fontSize: 25,
color:"#b8ea3f",
    marginLeft: 10,
  },
});

export default Home;
