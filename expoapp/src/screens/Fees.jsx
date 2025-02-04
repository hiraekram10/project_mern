import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons

const FeesScreen = ({ navigation }) => {
  const items = [
    { id: '1', icon: 'wallet-outline', title: 'Active fees', subtitle: 'Your fees' },
    { id: '2', icon: 'time-outline', title: 'Previous fees', subtitle: 'History of previous fees' },
    { id: '3', icon: 'cart-outline', title: 'Subscribe', subtitle: 'Subscribe to a new fee' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => alert(`${item.title} clicked`)}>
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={24} color="#fff" />
      </View>
      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#B8EA3F',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    color:"#B8EA3F",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B8EA3F',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default FeesScreen;
