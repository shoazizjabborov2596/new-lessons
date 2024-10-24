import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../react-redux/Reducer";


const store = configureStore({
    reducer:{
    users: Reducer,
    }
});


export default store;