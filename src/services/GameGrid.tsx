/** @format */

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "../components/GameCard";
import GameCardSkeleton from "../components/GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={3} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

//  const instance = axios.create({
//       baseURL:
//         "https://api.rawg.io/api/games?key=4feebb335c1340bfa436e6e959e2a9b6&dates=2019-09-01,2019-09-30&platforms=18,1,7",
//       timeout: 1000,
//     });
