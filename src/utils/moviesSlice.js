import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        mainMovieTrailer:null
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addMainMovieTrailer:(state,action)=>{
            state.mainMovieTrailer = action.payload
        }
    }
})

export const {addNowPlayingMovies,addMainMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;