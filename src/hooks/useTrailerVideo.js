import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTrailer } from "../redux/moviesSlice";

const useTrailerVideo = (videoId) => {
  const dispatch = useDispatch();

  const getVideoTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json.results.filter((res) => res.type === "Trailer");
    const { key } = trailer?.[0];
    dispatch(addTrailer({ key: key }));
  };

  useEffect(() => {
    getVideoTrailer();
  }, []);
};

export default useTrailerVideo;
