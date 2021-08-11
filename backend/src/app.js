const express = require("express");
const cors = require("cors");
const riotApi = require("./services/riotApi");
const app = express();

app.use(cors());

app.get("/partidas", async (req, res) => {
  const { data } = await riotApi.get(
    "/lol/match/v4/matchlists/by-account/XZ4DjuUYDzApUwzOtc5EWekItbLw86DeHXcSkxS-f2xx3YM",
    { params: { beginIndex: 0, endIndex: 10 } }
  );

  console.log(data.matches);
  const partidas = data.matches;
  
  const partidasIds = partidas.map((partida) => partida.gameId);
  const { data: match } = await riotApi.get("/lol/match/v4/matches/2330840761");
  
const

  return res.send({ message: partidasIds });
});

app.listen(8080, () => {
  console.log("servidor iniciado");
});
