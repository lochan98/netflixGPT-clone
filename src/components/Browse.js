import Header from "./Header";
import MainContainer from "./mainMovie/mainContainer";
import SecondaryContainer from "./secondaryMovieContainer/secondaryContainer";
import useFetchNowPlayingMoviesMovies from "../hooks/useFetchNowPlayingMovies";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchNowPopularMovies from "../hooks/useFetchPopularMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch/gptSearchPage";

const Browse = () => {
  const gptSearch = useSelector((store) => store?.gptSearch?.gptSearch);
  useFetchNowPlayingMoviesMovies();
  useFetchUpcomingMovies();
  useFetchTopRatedMovies();
  useFetchNowPopularMovies();
  return (
    <>
      <Header />

      {gptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
