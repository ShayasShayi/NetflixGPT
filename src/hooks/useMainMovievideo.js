import { useDispatch } from "react-redux";
import { addMainMovieTrailer} from "../utils/moviesSlice";
import { useEffect } from "react";
import { MAINMOVIE_VEDIOS, OPTIONS } from "../utils/constants";

const useMainMovieVideo= (movieId)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        getNowPlayiingMovies();
    },[]);

    const getNowPlayiingMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",OPTIONS);
        const json = await data.json();
        const mainMovieTrailer= json.results.filter(movie=>movie.type ==="Trailer")[0];
        dispatch(addMainMovieTrailer(mainMovieTrailer));
    }
}

export default useMainMovieVideo;