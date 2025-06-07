import { createSlice } from "@reduxjs/toolkit";


const searchGPTSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearch:false,
    },
    reducers: {
        toggleGPTSearchView :(state,action)=>{
            state.showGPTSearch = !state.showGPTSearch;
        },
    
    }   

});

export default searchGPTSlice.reducer;
// extracting actions
export const {toggleGPTSearchView}=searchGPTSlice.actions;