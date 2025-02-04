// EventDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDetailsScreen = ({ route }) => {
  const { eventId } = route.params;

  // In a real app, you would fetch the event details from an API or state based on eventId
  const event = {
    id: eventId,
    title: 'Paddleboarding at the Beach',
    description: 'Join us for a fun paddleboarding session by the beach!',
    date: '2024-12-15',
    location: 'Miami Beach',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.location}>{event.location}</Text>
      <Text style={styles.description}>{event.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"#B8EA3F",
  },
  date: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
  location: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
});

export default EventDetailsScreen;
