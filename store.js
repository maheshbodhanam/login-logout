import { configureStore } from "@reduxjs/toolkit";
import userReduser from '../Features/userSlice';


export default configureStore({
    reducer:{
        user:userReduser,
    },
});