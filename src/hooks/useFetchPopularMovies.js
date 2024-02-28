import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import { addPopularMovie } from "../redux/moviesSlice";

const useFetchNowPopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useFetchNowPopularMovies;
