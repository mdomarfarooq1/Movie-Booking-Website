import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loadersReducer";
import usersReducer from './usersSlice';

const store =  configureStore({
    reducer: {
        loaders: loadersReducer,
        users: usersReducer,
    },
});

export default store;