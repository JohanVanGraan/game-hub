/** @format */

//import useData from "./useData";
import genres from "../Data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres"); // get genres from web server RAWG Video Games Database rawg.io
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
