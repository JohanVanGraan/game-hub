/** @format */

//4feebb335c1340bfa436e6e959e2a9b6

import axios from "axios";

export default axios.create({
  params: {
    baseURL: "https://api.rawg.io/api",
    key: "4feebb335c1340bfa436e6e959e2a9b6",
  },
});
// GET https://api.rawg.io/api/games?key=4feebb335c1340bfa436e6e959e2a9b6&dates=2019-09-01,2019-09-30&platforms=18,1,7
