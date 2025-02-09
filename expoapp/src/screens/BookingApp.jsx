import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { simplybook } from "../api/simplybook";

const BookingApp = ({ navigation }) => {
  const [courts, setCourts] = useState([]);
  const [performers, setPerformers] = useState([]);
  const [person, setPerson] = useState(0);

  useEffect(() => {
    simplybook
      .getEventList()
      .then((fetchedData) => setCourts(Object.values(fetchedData)));
    simplybook
      .getPerformers()
      .then((fetchedData) => setPerformers(Object.values(fetchedData)));
  }, []);

  const handleClick = (item) => {
    if (!performers?.[0].id || !person) {
      return;
    }

    navigation.navigate("CourtBookingApp", {
      eventId: item.id,
      name: item.name,
      performerId: performers[0].id,
      count: person,
    });
  };

  const renderCourtItem = ({ item }) => (
    <View style={styles.courtItem}>
      <Image
        src={`https://padelpuls.simplybook.asia${item.picture_path}`}
        style={styles.courtImage}
      />
      <Text style={styles.courtName}>{item.name}</Text>
      <Text style={styles.courtName}>+{item.bonus} rewards points</Text>
      <Text style={styles.courtName}>{item.duration} min</Text>
      <Text style={styles.courtPrice}>Price: {item.price} PKR</Text>
      <TextInput
        style={styles.input}
        value={person}
        onChangeText={setPerson}
        keyboardType="numeric"
        placeholder="Enter person"
      />
      <Button title="Select" onPress={() => handleClick(item)} />
    </View>
  );

  return (
    <FlatList
      data={courts}
      renderItem={renderCourtItem}
      keyExtractor={(item) => item.name}
    />
  );
};

export default BookingApp;

const styles = StyleSheet.create({
  courtItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  courtImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  courtName: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  courtPrice: {
    fontSize: 16,
    color: "#888",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});
