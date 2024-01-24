import React, { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';

const useNowPlayingMovies = () => {
  
    const dispatch = useDispatch()
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

    const getNowPlayingMovies = async () =>{
        const data = await fetch(url, API_OPTIONS);

        const json = await data.json();
        //console.log("list", json.results);
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect( () =>{
        getNowPlayingMovies();
    }, [])
  
}

export default useNowPlayingMovies