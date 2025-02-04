import React from 'react';
import { View, Text, StyleSheet, Image, Linking, ScrollView } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo1.png')} // Use a local image for the logo
          style={styles.logo}
        />
        <Text style={styles.title}>About Us</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionContent}>
          We are here to make paddleboarding accessible for all, providing fun and adventure for all skill levels.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Story</Text>
        <Text style={styles.sectionContent}>
          Founded by paddleboarding enthusiasts, PaddleApp aims to build a community of water lovers.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionContent}>
          Email: <Text style={styles.link} onPress={() => Linking.openURL('mailto:support@paddleapp.com')}>support@paddleapp.com</Text>
        </Text>
        <Text style={styles.sectionContent}>
          Phone: <Text style={styles.link} onPress={() => Linking.openURL('tel:+1234567890')}>+1 234 567 890</Text>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Follow Us</Text>
        <View style={styles.socialLinks}>
          <Text style={styles.link} onPress={() => Linking.openURL('https://facebook.com/paddleapp')}>Facebook</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://twitter.com/paddleapp')}>Twitter</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://instagram.com/paddleapp')}>Instagram</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#B8EA3F',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  socialLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default AboutUsScreen;
