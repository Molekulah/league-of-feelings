const express = require("express");

const app = express();

const partidaFake = [
  {
    data: "32/13/0000",
    kda: {
      luana: "0/10/150",
      bruno: "100/0/100",
      cassio: "10/5/2",
    },
    champion: {
      luana: "cerafina",
      bruno: "Mestre do Q",
      cassio: "Sapo",
    },
    feeling: {
      luana: "😭",
      bruno: "😁",
      cassio: "😁",
    },
    totalfeelings: "😁",
  },
  {
    data: "32/13/0000",
    kda: {
      luana: "0/10/150",
      bruno: "100/0/100",
      cassio: "10/5/2",
    },
    champion: {
      luana: "cerafina",
      bruno: "Mestre do Q",
      cassio: "Sapo",
    },
    feeling: {
      luana: "😭",
      bruno: "😁",
      cassio: "😁",
    },
    totalfeelings: "😁",
  },
  {
    data: "32/13/0000",
    kda: {
      luana: "0/10/150",
      bruno: "100/0/100",
      cassio: "10/5/2",
    },
    champion: {
      luana: "cerafina",
      bruno: "Mestre do Q",
      cassio: "Sapo",
    },
    feeling: {
      luana: "😭",
      bruno: "😁",
      cassio: "😁",
    },
    totalfeelings: "😁",
  },
  {
    data: "32/13/0000",
    kda: {
      luana: "0/10/150",
      bruno: "100/0/100",
      cassio: "10/5/2",
    },
    champion: {
      luana: "cerafina",
      bruno: "Mestre do Q",
      cassio: "Sapo",
    },
    feeling: {
      luana: "😭",
      bruno: "😁",
      cassio: "😁",
    },
    totalfeelings: "😁",
  },
];

app.get("/partidas", (req, res) => {
  return res.send(partidaFake);
});

app.listen(8080, () => {
  console.log("servidor iniciado");
});
