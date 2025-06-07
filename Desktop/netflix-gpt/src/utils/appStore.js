import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./searchGPTSlice";
import configReducer from "./configSlice";
 

// configuring our React store mapping slice with reducer logic
const appStore = configureStore(
    {
        
        reducer: {
            user: userReducer,
            movies: movieReducer,
            gpt: gptReducer,
            config:configReducer,
        }

    }
);

export default appStore;