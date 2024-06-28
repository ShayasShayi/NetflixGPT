import React from "react";
import useMainMovieVideo from "../hooks/useMainMovievideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMainMovieVideo(movieId);
  const mainMovieTrailer = useSelector(store=>store.movie.mainMovieTrailer);
  if(mainMovieTrailer === null)return
  return (
    <div className="w-screen">
      <iframe className="w-screen h-[600px] aspect-video absolute"
        src={"https://www.youtube.com/embed/" + mainMovieTrailer.key+ "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
