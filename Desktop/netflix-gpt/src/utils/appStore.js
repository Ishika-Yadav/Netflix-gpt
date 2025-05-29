import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
 import movieReducer from "./movieSlice"

// configuring our React store mapping slice with reducer logic
const appStore = configureStore(
    {
        
        reducer: {
            user: userReducer,
            movies: movieReducer,
        }

    }
);

export default appStore;