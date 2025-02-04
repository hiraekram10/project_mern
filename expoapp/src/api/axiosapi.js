import axios from 'axios'
import apiClient from ".";



// getmethod
const getReq= async(path)=>{
    try{
        const response=await apiClient.get(path)
        return response
        // const data = response?.data
    }catch(err){
   console.log(err,'error get');
   
    }
   
}
const postReq= async(path,data)=>{
    try{
        const response=await apiClient.post(path,data)
        return response
    }catch(err){
   console.log(err,'error post');
   
    }
   
}
const deleteReq= async(path,data)=>{
    try{
        const response=await axios.apiClient(path)
        return response
    }catch(err){
   console.log(err,'error delete');
   
    }
   
}
const updateReq= async(path,data)=>{
    try{
        const response=await apiClient.put(path,data)
        return response
    }catch(err){
   console.log(err,'error updtae');
   
    }
   
}

export {getReq,postReq,deleteReq,updateReq}