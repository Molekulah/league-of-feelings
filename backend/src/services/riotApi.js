const axios = require("axios");

const riotApi = axios.create({
  baseURL: "https://br1.api.riotgames.com",
  params: {
    api_key: "RGAPI-c1d50142-57d5-4e09-b861-41dcc525f49f",
  },
});

module.exports = riotApi;
