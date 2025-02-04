// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // WooCommerce API Credentials
//   const consumerKey = 'ck_670a282b18e14c4b0eb4f3572d0dddcaff9fab3d';
//   const consumerSecret = 'cs_d137f1d1faa5b94f4b3532945e56e30f5340657a';

//   // Product API URL
//   const productsUrl = 'https://padelpulse.pk/wp-json/wc/v3/products';

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Fetch Products
//       const productsResponse = await axios.get(productsUrl, {
//         auth: {
//           username: consumerKey,
//           password: consumerSecret,
//         },
//       });

//       setProducts(productsResponse.data);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Failed to fetch data. Please check your API or network.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderProduct = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.title}>{item.name}</Text>
//       <Text style={styles.subtitle}>Price: ${item.price || 'N/A'}</Text>
//       <Text>Description: {item.description || 'No description available'}</Text>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.center}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Products</Text>
//       {products.length === 0 ? (
//         <Text style={styles.emptyText}>No products available.</Text>
//       ) : (
//         <FlatList
//           data={products}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderProduct}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 16,
//   },
//   card: {
//     padding: 16,
//     marginBottom: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#888',
//   },
//   emptyText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#666',
//     marginVertical: 16,
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default App;

// import React from 'react';
// import login from './src/auth/login';
// import { View,Text } from 'react-native';
// import ProductList from './src/screens/ProductList';
// import BookingDetail from './src/screens/BookingDetail';
// import CourtBookingApp from './src/screens/CourtBookingApp';

// import Loginn from './src/auth/Loginn';

// const App = ()=> {
//   return (
//    <Loginn/>
//   )

// }

// export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import Loginn from "./src/auth/Loginn";
import login from "./src/auth/login";
import Login from "./src/auth/login";
import Register from "./src/auth/Register";
import Home from "./src/screens/Home";
import CourtBookingApp from "./src/screens/CourtBookingApp";
import ProductList from "./src/screens/ProductList";
import Bookingdetail from "./src/screens/Bookingdetail";
import AppNavigation from "./src/navigation";
import AppDrawer from "./src/navigation/drawer";
import Membership from "./src/screens/Membership";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  return (
  <Provider  store={store}>
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Loginn">
        <Stack.Screen name="Loginn" component={Loginn} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SignIn" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductList" component={ProductList}/>
        <Stack.Screen name="CourtBookingApp" component={CourtBookingApp}/>
        <Stack.Screen name="Bookingdetail" component={Bookingdetail} />

      </Stack.Navigator> */}
      {/* <AppNavigation/> */}
      <AppDrawer />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
