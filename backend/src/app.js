const express = require("express");
const cors = require("cors");

const app = express();

const partidaFake = [
  {
    data: "32/13/0000",
    kda: {
      luana: "1/1/1",
      bruno: "1/1/1",
      cassio: "1/1/1",
    },
    champion: {
      luana: "Seraphine",
      bruno: "Master Yi",
      cassio: "Tristana",
    },
    feeling: {
      luana: "😁",
      bruno: "😁",
      cassio: "😁",
    },
    totalfeelings: "😁",
  },
  {
    data: "32/13/0001",
    kda: {
      luana: "2/2/2",
      bruno: "2/2/2",
      cassio: "2/2/2",
    },
    champion: {
      luana: "Karma",
      bruno: "Lee Sin",
      cassio: "Tristana",
    },
    feeling: {
      luana: "😭",
      bruno: "😭",
      cassio: "😭",
    },
    totalfeelings: "😭",
  },
  {
    data: "32/13/0002",
    kda: {
      luana: "3/3/3",
      bruno: "3/3/3",
      cassio: "3/3/3",
    },
    champion: {
      luana: "Sona",
      bruno: "Yasuo",
      cassio: "Tristana",
    },
    feeling: {
      luana: "😭",
      bruno: "😁",
      cassio: "😭",
    },
    totalfeelings: "😭",
  },
  {
    data: "32/13/0003",
    kda: {
      luana: "4/4/4",
      bruno: "4/4/4",
      cassio: "4/4/4",
    },
    champion: {
      luana: "Lulu",
      bruno: "Jax",
      cassio: "Tristana",
    },
    feeling: {
      luana: "😭",
      bruno: "😁",
      cassio: "😁",
    },
    totalfeelings: "😁",
  },
];

app.use(cors());

app.get("/partidas", (req, res) => {
  return res.send(partidaFake);
});

app.listen(8080, () => {
  console.log("servidor iniciado");
});
