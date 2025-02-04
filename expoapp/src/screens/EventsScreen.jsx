// EventsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const events = [
  {
    id: '1',
    title: 'Paddleboarding at the Beach',
    description: 'Join us for a fun paddleboarding session by the beach!',
    date: '2024-12-15',
    location: 'Miami Beach',
  },
  {
    id: '2',
    title: 'Evening Yoga on the Water',
    description: 'Experience yoga on a paddleboard under the stars.',
    date: '2024-12-17',
    location: 'Lake Tahoe',
  },
  {
    id: '3',
    title: 'Paddleboarding Competition',
    description: 'Test your skills in our annual paddleboarding competition.',
    date: '2024-12-20',
    location: 'Santa Monica Pier',
  },
];

const EventsScreen = ({ navigation }) => {
  // Render each event item
  const renderEventItem = ({ item }) => (
    <TouchableOpacity
      style={styles.eventItem}
      onPress={() => navigation.navigate('EventDetails', { eventId: item.id })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
     color:"#B8EA3F",
  },
  eventItem: {
    backgroundColor: '#fff',
    padding: 15,
    color:"#B8EA3F",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  location: {
    fontSize: 14,
    color: '#555',
  },
});

export default EventsScreen;
