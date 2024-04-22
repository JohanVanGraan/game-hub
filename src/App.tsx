/** @format */

import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./services/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // 1024 wide
        }}
        templateColumns={{ base: "ifr", lg: "200px 1fr" }}
      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            {<GenreList />}
          </GridItem>
        </Show>
        <GridItem area='main'>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
