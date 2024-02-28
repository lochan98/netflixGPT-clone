import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import { addTopRatedMovie } from "../redux/moviesSlice";

const useFetchTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useFetchTopRatedMovies;
