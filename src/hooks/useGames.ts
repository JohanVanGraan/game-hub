/** @format */

import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    axios
      .get(
        "https://api.rawg.io/api/games?key=4feebb335c1340bfa436e6e959e2a9b6",
        { signal }
      )
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};
export default useGames;
