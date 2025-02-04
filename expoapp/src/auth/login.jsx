// import React,{useState} from "react";
// import { View, Text, TextInput, Alert, TouchableOpacity,Image } from "react-native";
// import styles from "./design.js";
// // import { LoginFun } from "../services/auth.js";

// const Login = () => {
//   const [lemail,setLemail] = useState('')
//   const [lpassword,setLpassword] = useState('')


  
//   const handleLogin = async () => {
//     // if(lemail || lpassword){
//     //   Alert.alert("please fill all inputs")
//     //   return
//     // }
//     try{
//       await LoginFun(lemail,lpassword)
//       console.log("succesfully logged in");
//     setLemail('')
//     setLpassword('')
      

//     }catch(error){
//   Alert.alert('authntication error')
//   console.log(error);
  
//     }
    
    
//   };

 

//   return (
//     <View style={styles.container}>
//       <View>
//       <Image style={styles.logo}
//         source={require('../assets/images/logo.png')} // Replace with the path to your logo
//       /> 
//       </View>
//       <Text style={styles.title}>
//         Login
//       </Text>

//       <View style={styles.inputSec}>


//         <TextInput inputMode="email"
//           keyboardType="email-address"
//           placeholder="Email address*"
//           style={styles.input}
//           onChangeText={(text)=>setLemail(text)}

          

//         ></TextInput>
//       </View>
//       <View style={styles.inputSec}>

//         <TextInput
//           placeholder={"Password*"}
//           textContentType="password"
//           style={styles.input}
//           secureTextEntry
//           onChangeText={(text)=>setLpassword(text)}
//         ></TextInput>
//       </View>
//       <View style={styles.forText}>
//         <Text style={styles.textColor}>Forget Password</Text>
//       </View>


//       <View style={styles.linkContainer}>

//         <TouchableOpacity style={styles.btn} onPress={handleLogin}>
//           <Text style={styles.btnText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.bottomSec}>
//         <Text>Don't have an account</Text>
//         <TouchableOpacity >
//           <Text style={styles.textColor}>Sign Up</Text>
//         </TouchableOpacity>
      
//       </View>
//     </View>
//   );
// };

// export default Login;



import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import {auth} from './firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = ({ navigation }) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleLogin = async () => {
  
    console.log(navigation.navigate('Home'));
    
    try{
     const userCredenial = await signInWithEmailAndPassword(auth,email,password)
      console.log("succesfully logged in", userCredenial.user);
    
   

    }catch(error){
  Alert.alert('authntication error')
  console.log(error);
  
    }
    
    
  };



  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Sign In Form */}
      <View style={styles.form}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subheading}>Login to continue using the app</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
        </View>

        {/* Social Login */}
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/google-logo.png",
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://tse2.mm.bing.net/th?id=OIP._LzA7iL-rEdxaMz6kV0qYwHaHZ&pid=Api&P=0&h=220",
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Log In Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <Text style={styles.signUpText}>
          Don’t have an account?{" "}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate("Register")} // Navigate to Register Screen
          >
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  logoContainer: {},
  logo: {
    alignItems: "center",
    width: 250,
    height: 38,
    marginLeft: 50,
  },
  form: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B8EA3F",
    textAlign: "center",
  },
  subheading: {
    fontSize: 14,
    color: "#bbb",
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#1C1F3A",
    color: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#B8EA3F",
    marginVertical: 10,
  },
  orContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  orText: {
    color: "#fff",
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  loginButton: {
    backgroundColor: "#B8EA3F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  loginButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpText: {
    color: "#bbb",
    textAlign: "center",
    fontSize: 14,
  },
  signUpLink: {
    color: "#B8EA3F",
    fontWeight: "bold",
  },
});

export default Login;
