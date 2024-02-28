import GPTMovieSuggestion from "./gptMovieSuggestion";
import GPTMovieSearchBar from "./gptSearchBar";
import { MAIN_BG_IMG } from "../../utils/contants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={MAIN_BG_IMG} alt="background-img" />
      </div>
      <GPTMovieSearchBar />
      <GPTMovieSuggestion />
    </>
  );
};

export default GPTSearch;
