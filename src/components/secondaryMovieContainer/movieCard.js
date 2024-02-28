import { IMG_CDN_URL } from "../../utils/contants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-32">
      <img alt="card-img" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
