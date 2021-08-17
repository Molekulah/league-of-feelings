const axios = require("axios");

const riotApi = axios.create({
  baseURL: "https://br1.api.riotgames.com",
  params: {
    api_key: "RGAPI-e39da22b-141a-49ab-8854-a9601a580cd9",
  },
});

module.exports = riotApi;
