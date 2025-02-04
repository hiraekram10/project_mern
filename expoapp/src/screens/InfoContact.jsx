import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Icons for better visuals

const InfoContact = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Info and Contact</Text> */}
      </View>

      {/* Info Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About the App</Text>
        <Text style={styles.sectionContent}>
          Welcome to our app! This platform is designed to provide an amazing experience and connect you with everything you need. Whether you're here to explore, learn, or connect, we're here to help!
        </Text>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>

        {/* Email */}
        <TouchableOpacity
          style={styles.contactRow}
          onPress={() => Linking.openURL('mailto:support@yourapp.com')}
        >
          <Icon name="mail-outline" size={24} color="#333" />
          <Text style={styles.contactText}>support@yourapp.com</Text>
        </TouchableOpacity>

        {/* Phone */}
        <TouchableOpacity
          style={styles.contactRow}
          onPress={() => Linking.openURL('tel:+1234567890')}
        >
          <Icon name="call-outline" size={24} color="#333" />
          <Text style={styles.contactText}>+1 234 567 890</Text>
        </TouchableOpacity>

        {/* Social Media */}
        <View style={styles.socialLinks}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://facebook.com/yourapp')}
          >
            <Icon name="logo-facebook" size={28} color="#4267B2" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://twitter.com/yourapp')}
          >
            <Icon name="logo-twitter" size={28} color="#1DA1F2" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://instagram.com/yourapp')}
          >
            <Icon name="logo-instagram" size={28} color="#C13584" style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 16,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
  },
  socialIcon: {
    marginRight: 16,
  },
});

export default InfoContact;
