// import React from 'react';
// import { View, Text, Switch, StyleSheet } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Drawer = createDrawerNavigator();

// const AlertsScreen = () => (
//   <View style={styles.screenContainer}>
//     <Text>Alerts Screen</Text>
//   </View>
// );

// const ScheduleScreen = () => (
//   <View style={styles.screenContainer}>
//     <Text>Schedule Screen</Text>
//   </View>
// );

// const MessagesScreen = () => (
//   <View style={styles.screenContainer}>
//     <Text>Messages Screen</Text>
//   </View>
// );

// const NewsScreen = () => (
//   <View style={styles.screenContainer}>
//     <Text>News Screen</Text>
//   </View>
// );

// const InfoContactScreen = () => (
//   <View style={styles.screenContainer}>
//     <Text>Info/Contact Screen</Text>
//   </View>
// );

// const LogoutScreen = () => (
//   <View style={styles.screenContainer}>
//     <Text>Logout Screen</Text>
//   </View>
// );

// const CustomDrawerContent = (props) => (
//   <View style={styles.drawerContent}>
//     <View style={styles.menuItem}>
//       <Icon name="bell-outline" size={24} color="#fff" />
//       <Text style={styles.menuText}>Alerts</Text>
//       <Switch value={false} style={styles.switch} />
//     </View>
//     <View style={styles.menuItem}>
//       <Icon name="calendar-outline" size={24} color="#fff" />
//       <Text style={styles.menuText}>Schedule</Text>
//     </View>
//     <View style={styles.menuItem}>
//       <Icon name="message-outline" size={24} color="#fff" />
//       <Text style={styles.menuText}>Messages</Text>
//     </View>
//     <View style={styles.menuItem}>
//       <Icon name="newspaper-variant-outline" size={24} color="#fff" />
//       <Text style={styles.menuText}>News</Text>
//     </View>
//     <View style={styles.menuItem}>
//       <Icon name="information-outline" size={24} color="#fff" />
//       <Text style={styles.menuText}>Info/Contact</Text>
//     </View>
//     <View style={styles.menuItem}>
//       <Icon name="logout" size={24} color="#fff" />
//       <Text style={styles.menuText}>Logout</Text>
//     </View>
//   </View>
// );

// export default function Sidenav() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//         screenOptions={{
//           headerShown: false,
//           drawerStyle: {
//             backgroundColor: '#1a1a1a',
//           },
//         }}
//       >
//         <Drawer.Screen name="Alerts" component={AlertsScreen} />
//         <Drawer.Screen name="Schedule" component={ScheduleScreen} />
//         <Drawer.Screen name="Messages" component={MessagesScreen} />
//         <Drawer.Screen name="News" component={NewsScreen} />
//         <Drawer.Screen name="InfoContact" component={InfoContactScreen} />
//         <Drawer.Screen name="Logout" component={LogoutScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1a1a1a',
//   },
//   drawerContent: {
//     flex: 1,
//     backgroundColor: '#1a1a1a',
//     paddingVertical: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//     marginLeft: 20,
//   },
//   menuText: {
//     color: '#fff',
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   switch: {
//     marginLeft: 'auto',
//     marginRight: 20,
//   },
// });
