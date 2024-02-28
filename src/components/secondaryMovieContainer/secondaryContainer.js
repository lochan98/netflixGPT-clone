import { useSelector } from "react-redux";
import MoviesList from "./moviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);

  return (
    <>
      <div className="-mt-72 relative z-20 text-white">
        <MoviesList movies={movies} title={"Now Playing"} />
      </div>
      <div className="bg-black">
        <MoviesList movies={popularMovies} title={"Popular Movies"} />
        <MoviesList movies={topRatedMovies} title={"Top Rated Movies"} />
        <MoviesList movies={upcomingMovies} title={"Upcoming Movies"} />
      </div>
    </>
  );
};

export default SecondaryContainer;
