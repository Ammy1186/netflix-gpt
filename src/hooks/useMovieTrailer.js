import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { addTraliorMovies } from "../Utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();  
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMainMovie = async() =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos?language=en-US', API_OPTIONS)

    const json = await data.json();
    console.log("list", json);

    const filtereddata = json.results.filter((item) => item.type === "Trailer");
    const trailer = filtereddata.length ? filtereddata[0] : json.results(0);
    dispatch(addTraliorMovies(trailer));
  }

  useEffect( () => {
    !trailerVideo && getMainMovie();
  }, [])
};

export default useMovieTrailer;