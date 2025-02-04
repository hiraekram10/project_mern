import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./Reducers/UserSlice";

const store = configureStore({
    reducer:{
        users:userReducer
    }
})


export default store