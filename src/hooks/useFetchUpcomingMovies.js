import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import { addUpcomingMovie } from "../redux/moviesSlice";

const useFetchUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useFetchUpcomingMovies;
