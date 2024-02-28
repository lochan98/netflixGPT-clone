import { useSelector } from "react-redux";
import useTrailerVideo from "../../hooks/useTrailerVideo";

const BackgroundVideo = ({ videoId }) => {
  const keyId = useSelector((data) => data?.movies?.trialer?.key);
  useTrailerVideo(videoId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${keyId}?&autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
