import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovie:{},
        trailerVideo:{},
        popularMovie:{},
        topRatedMovie:{},
        upcomingMovie:{},
    },
    reducers: {

        addNowPlayingMovie:(state, action)=>{
            state.nowPlayingMovie= action.payload;
        },
         addPopularMovie:(state, action)=>{
            state.popularMovie= action.payload;
        },
         addTopRatedMovie:(state, action)=>{
            state.topRatedMovie= action.payload;
        },
         addUpcomingMovie:(state, action)=>{
            state.upcomingMovie= action.payload;
        },
        addTrailerVideo: (state, action) => {
          state.trailerVideo = action.payload; 
        }
    }

});
export default movieSlice.reducer
export const{addNowPlayingMovie,addTrailerVideo,addPopularMovie,addTopRatedMovie,addUpcomingMovie} = movieSlice.actions;