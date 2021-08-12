const express = require("express");
const cors = require("cors");
const riotApi = require("./services/riotApi");
const app = express();

const getMatchiesData = async (matchIds) => {
  const matchiesData = await Promise.all(
    matchIds.map(async (matchId) => {
      const { data } = await riotApi.get(`/lol/match/v4/matches/${matchId}`);

      return data;
    })
  );

  const formattedData = matchiesData.map((match) => {
    const participants = match.participantIdentities
      .filter((pi) => {
        if (
          pi.player.summonerName === "Ca9" ||
          pi.player.summonerName === "luahp" ||
          pi.player.summonerName === "fast blades"
        ) {
          return true;
        } else {
          return false;
        }
      })
      .map((p) => {
        return {
          id: p.participantId,
          name: p.player.summonerName,
        };
      });

    const participantsIds = participants.map((p) => p.id);
    const participantInfos = match.participants.filter((math_participant) => {
      return participantsIds.includes(math_participant.participantId);
    });

    const kdas = participantInfos.map((pf) => {
      const { name } = participants.find((p) => p.id === pf.participantId);

      return {
        name: name,
        lane: pf.timeline.lane,
        id: pf.participantId,
        kills: pf.stats.kills,
        deaths: pf.stats.deaths,
        assists: pf.stats.assists,
      };
    });

    return {
      matchId: match.gameId,
      kdas: kdas,
    };
  });

  return formattedData;
};

app.use(cors());

app.get("/partidas", async (req, res) => {
  try {
    const { data } = await riotApi.get(
      "/lol/match/v4/matchlists/by-account/C2IofxYQuHjkF9Aw_fJ7WSelXAnech1CoDKJlodngAhsk0I",
      { params: { beginIndex: 0, endIndex: 10 } }
    );

    const matches = data.matches;

    const matchIds = matches.map((match) => match.gameId);

    const matchiesData = await getMatchiesData(matchIds);

    return res.send({ matchies: matchiesData });
  } catch (err) {
    return res.send({ message: err.message });
  }
});

app.listen(8080, () => {
  console.log("servidor iniciado");
});
