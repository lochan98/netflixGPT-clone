import MovieCard from "./movieCard";

const MoviesList = ({ movies, title }) => {
  return (
    <div className="pt-6">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((mov) => (
            <div className="pr-4 cursor-pointer">
              <MovieCard key={mov?.id} poster_path={mov?.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
