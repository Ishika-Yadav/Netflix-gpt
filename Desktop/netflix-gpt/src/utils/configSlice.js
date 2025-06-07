import { createSlice } from "@reduxjs/toolkit";
// config for lang option
const configSlice= createSlice({
    name: 'config',
    initialState :{
        lang:"en",
    },
    reducers:{
        changeLanguage : (state, action )=>{
            // change lang with thew help of action.payload
            state.lang = action.payload;

        }
    },

});

export const {changeLanguage}= configSlice.actions;
export default configSlice.reducer;