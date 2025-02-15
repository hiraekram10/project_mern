
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { auth } from './firebaseConfig.js'
import { createUserWithEmailAndPassword } from "firebase/auth";






const Register = ({ navigation }) => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')

  const handleRegister = async () => {


    if (password !== confirmpassword) {
      console.log('Error', 'Passwords do not match')
      return

    }
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user added succesfully", userCredential.user);


    } catch (error) {
      console.log(error);

    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Enter your personal information</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmpassword}
          onChangeText={setConfirmpassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <Text
              style={styles.signInLink}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// import React from 'react';
// import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// // import { log } from '@react-native-firebase/crashlytics';

// // Validation Schema
// const RegisterSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   phoneNo: Yup.number()
//     .typeError('Phone number must be a number')
//     .required('Phone number is required'),
// });

// const Register = () => {


//   const handleRegister = async (values) => {
//     try {
//       const response = await axios.post('http://192.168.0.6:5001/register', {
//         name: values.name,
//         email: values.email,
//         password: values.password,
//         phoneNo: values.phoneNo,
//       });
//       console.log(response.data.message);

//       Alert.alert('Success', response.data.message);
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert('Error', error.response?.data?.error);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ name: '', email: '', password: '', phoneNo: '' }}
//       validationSchema={RegisterSchema}
//       onSubmit={handleRegister}
//     >
//       {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//         <View style={styles.container}>
//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             onChangeText={handleChange('name')}
//             onBlur={handleBlur('name')}
//             value={values.name}
//           />
//           {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             onChangeText={handleChange('email')}
//             onBlur={handleBlur('email')}
//             value={values.email}
//             keyboardType="email-address"
//           />
//           {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             onChangeText={handleChange('password')}
//             onBlur={handleBlur('password')}
//             value={values.password}
//             secureTextEntry
//           />
//           {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//           <TextInput
//             style={styles.input}
//             placeholder="Phone Number"
//             onChangeText={handleChange('phoneNo')}
//             onBlur={handleBlur('phoneNo')}
//             value={values.phoneNo}
//             keyboardType="phone-pad"
//           />
//           {touched.phoneNo && errors.phoneNo && <Text style={styles.errorText}>{errors.phoneNo}</Text>}

//           <Button title="Register" onPress={handleSubmit} />
//         </View>
//       )}
//     </Formik>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    height: 46,
    width: 300,
    marginBottom: 45,
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "#B8EA3F",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1C2939",
    color: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#B8EA3F",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInText: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
  },
  signInLink: {
    color: "#B8EA3F",
    fontWeight: "bold",
  },
});

export default Register;
