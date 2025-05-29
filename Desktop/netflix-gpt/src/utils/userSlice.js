import { createSlice } from "@reduxjs/toolkit";

// this is slice of Rdux store  creating and configuring it 
const userSlice = createSlice({
    name: 'user',
    initialState: null,
    // actions 
    reducers: {
        addUser:(state,action)=>
        {
            return action.payload;
        },
        removeUser: (state, action) =>
        {
            return null;
        }
    }
});

export default userSlice.reducer;
export const  {addUser,removeUser}= userSlice.actions;