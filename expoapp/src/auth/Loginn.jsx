// import React from "react";
// import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";

// const Loginn = () => {
//   return (
//     <ImageBackground
//       source={{ uri: "https://media.istockphoto.com/id/1359882082/photo/a-young-man-hitting-a-paddle-ball.jpg?s=612x612&w=0&k=20&c=uS4gNE43QspKen4HxR_5xUaT3P92glF1b5-1byfQLic=" }} // Replace with your image URL
//       style={styles.background}
//     >
//       <View style={styles.overlay}>
//         <Text style={styles.title}>Play with a spirit power</Text>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Sign up</Text>
//         </TouchableOpacity>

//         <Text style={styles.footerText}>
//           Already have an account? <Text style={styles.linkText}>Sign in</Text>
//         </Text>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   overlay: {
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 25,
//     width: "80%",
//     alignItems: "center",
//     paddingVertical: 15,
//     marginBottom: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#93cb43",
//   },
//   footerText: {
//     color: "#FFFFFF",
//     fontSize: 14,
//   },
//   linkText: {
//     color: "#93cb43",
//     fontWeight: "bold",
//   },
// });

// export default Loginn;


import React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Login from "./login";

const Loginn = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: "https://media.istockphoto.com/id/1359882082/photo/a-young-man-hitting-a-paddle-ball.jpg?s=612x612&w=0&k=20&c=uS4gNE43QspKen4HxR_5xUaT3P92glF1b5-1byfQLic=" }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Play with a spirit power</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")} // Navigate to the Sign Up page
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}> {/* Navigate to the Sign In page */}
            <Text style={styles.linkText}onPress={()=> navigation.navigate("SignIn")}>Sign in</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#93cb43",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  linkText: {
    color: "#93cb43",
    fontWeight: "bold",
  },
});

export default Loginn;
