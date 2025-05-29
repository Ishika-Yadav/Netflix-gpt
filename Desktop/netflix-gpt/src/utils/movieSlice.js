import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovie:{},
        trailerVideo:{}
    },
    reducers: {

        addNowPlayingMovie:(state, action)=>{
            state.nowPlayingMovie= action.payload;
        },
        addTrailerVideo: (state, action) => {
          state.trailerVideo = action.payload; 
        }
    }

});
export default movieSlice.reducer
export const{addNowPlayingMovie,addTrailerVideo} = movieSlice.actions;