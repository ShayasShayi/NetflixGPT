import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { NOWPLAYING_URL, OPTIONS } from "../utils/constants";

const useNowPlayingMovies= ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        getNowPlayiingMovies();
    },[]);

    const getNowPlayiingMovies = async()=>{
        const data = await fetch(NOWPLAYING_URL,OPTIONS);
        const json = await data.json();
        
        dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;