const axios = require("axios");

const riotApi = axios.create({
  baseURL: "https://br1.api.riotgames.com",
  params: {
    api_key: "RGAPI-55f751de-2f91-43cf-89a9-5f96146f6026",
  },
});

module.exports = riotApi;
