const axios = require("axios");

const riotApi = axios.create({
  baseURL: "https://br1.api.riotgames.com",
  params: {
    api_key: "RGAPI-b040dbd2-415f-430c-a53e-d41206c930a4",
  },
});

module.exports = riotApi;
