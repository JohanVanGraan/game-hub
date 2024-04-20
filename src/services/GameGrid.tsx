/** @format */

import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {games.map((games) => (
          <li key={games.id}>
            "ID = "{games.id}" "{games.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

//  const instance = axios.create({
//       baseURL:
//         "https://api.rawg.io/api/games?key=4feebb335c1340bfa436e6e959e2a9b6&dates=2019-09-01,2019-09-30&platforms=18,1,7",
//       timeout: 1000,
//     });
