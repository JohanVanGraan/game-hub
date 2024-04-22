/** @format */

import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);

    axios
      .get<FetchGenresResponse>(
        "https://api.rawg.io/api/genres?key=4feebb335c1340bfa436e6e959e2a9b6",
        { signal }
      )
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};
export default useGenres;
