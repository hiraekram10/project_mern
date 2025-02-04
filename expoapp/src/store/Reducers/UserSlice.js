import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE={
  users:[]
}
const userReducer=createSlice({
  name:"users",
  initialState:INITIAL_STATE,
  reducers:{
   getAllusers:(state,{payload})=>{
   state.users= payload
   },
   addUser:(state,{payload})=>{
   state.users.push(payload)
   }
   
  }

})
export const{getAllusers,addUser} =userReducer.actions;
export default userReducer.reducer