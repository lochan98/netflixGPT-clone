import { useSelector } from "react-redux";
import BackgroundVideo from "./backgroundVideo";
import VideoTitle from "./videoTitle";

const MainContainer = () => {
  const movieData = useSelector((mov) => mov?.movies?.nowPlayingMovies);
  if (!movieData) return;

  const firstMovie = movieData?.[0];
  const { title, overview, id } = firstMovie;

  return (
    <>
      <VideoTitle overview={overview} title={title} />
      <BackgroundVideo videoId={id} />
    </>
  );
};

export default MainContainer;
