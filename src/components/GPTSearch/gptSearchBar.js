import { useState } from "react";
import openai from "../../utils/openAI";
import { API_OPTIONS } from "../../utils/contants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../../redux/gptSlice";

const GPTMovieSearchBar = () => {
  const [searchText, setSearchText] = useState(null);
  const dispatch = useDispatch();
  const gptQuery =
    "act as a movie recomendation system and suggest some movies with the query : " +
    searchText +
    "only give me name of 5 movies comma seprated like the example result given ahead. Example result : DON,HERA,PHEri,DON2,MOM";

  const movieListData = async (movieList) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieList}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const onSearchClick = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const movieList = chatCompletion?.choices[0].message.content.split(",");
    const tmdbPromiseList = movieList.map((mov) => movieListData(mov));
    const allData = await Promise.all(tmdbPromiseList);
    dispatch(addGPTMovies({ movieList: movieList, movieNames: allData }));
  };

  return (
    <div className="pt-[10%] flex justify-center bg">
      <form
        className="grid grid-cols-12 bg-black w-1/2 rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-6 m-4 rounded col-span-9"
          type="text"
          name="GPTSearch"
          placeholder="type Here to do GPT Search"
        />
        <button
          className="bg-red-700 py-2 px-4 m-4 rounded text-white col-span-3"
          onClick={onSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTMovieSearchBar;
