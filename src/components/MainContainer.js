import React from 'react'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const nowPlayingMovies = useSelector(store=> store.movie?.nowPlayingMovies);
    if(nowPlayingMovies === null) return;
    const mainMovie= nowPlayingMovies[0];
  return (
     <div>
      {mainMovie && <div>
        <VideoBackground movieId={mainMovie.id}/>
        <VideoTitle title={mainMovie.original_title} description={mainMovie.overview}/>
      </div>}
    </div>
  )
}

export default MainContainer
