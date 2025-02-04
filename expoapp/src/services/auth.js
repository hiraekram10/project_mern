// import auth from '@react-native-firebase/auth';




export const registerFun = async(email,password)=>{
   
   
    
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email,password);
        console.log("User signed up:", userCredential.user);
        
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          console.error("The email address is already in use.");
      } else {
          console.error("Error signing up:", error.message);
      }
      }


}

export const LoginFun= async(email,password)=>{
try{
  const userCredential = await auth().signInWithEmailAndPassword(email,password);
        console.log("User login:", userCredential.user);
  
}catch(error){
  const mssg = error.message
  const code = error.code
  console.log(mssg,code);
  
  
}
}


