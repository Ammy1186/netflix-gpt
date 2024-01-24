import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ( {movie_id}) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movie_id);  

  return (
    <div className=" w-full overflow-hidden mt-[-10px]">
      <iframe  className="w-full aspect-video"
      src={"https://www.youtube.com/embed/" +
      trailerVideo?.key +
      "?&autoplay=1&mute=1&rel=0&showinfo=0&controls=0&loop=1"} 
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground