const axios = require("axios");

const riotApi = axios.create({
  baseURL: "https://br1.api.riotgames.com",
  params: {
    api_key: "RGAPI-1209ccfa-19b6-4d70-92e5-1da6b0e96bd1",
  },
});

module.exports = riotApi;
