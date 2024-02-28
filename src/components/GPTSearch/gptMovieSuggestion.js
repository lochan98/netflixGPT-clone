import { useSelector } from "react-redux";
import MoviesList from "../secondaryMovieContainer/moviesList";

const GPTMovieSuggestion = () => {
  const { moviesList, movieNames } = useSelector((store) => store?.gptSearch);
  if (!moviesList) return null;
  return (
    <div className="m-4 p-4 bg-black text-white bg-opacity-70">
      {moviesList?.map((mov, index) => (
        <>
          <MoviesList movies={movieNames?.[index]} title={mov} />
        </>
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
