/** @format */

import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./services/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { GameQuery } from "./App";

export function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // 1024 wide
        }}
        templateColumns={{ base: "ifr", lg: "250px 1fr" }}
      >
        <GridItem area='nav'>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            {
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            }
          </GridItem>
        </Show>
        <GridItem area='main'>
          <box>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} paddingLeft={2} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelecSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </box>
        </GridItem>
      </Grid>
    </>
  );
}
