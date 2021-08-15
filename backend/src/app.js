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
          pi.player.summonerName === "fast blades" ||
          pi.player.summonerName === "Ocalor" ||
          pi.player.summonerName === "Marimarizinha" ||
          pi.player.summonerName === "PH 30cm" ||
          pi.player.summonerName === "To saindo"
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
      const pof = (
        (pf.stats.kills + pf.stats.assists) / pf.stats.deaths +
        (pf.stats.totalMinionsKilled + pf.stats.neutralMinionsKilled) * 0.008
      ).toFixed(2);

      const getFeeling = () => {
        if (pof > 3 && pof < 5) return "happy";
        if (pof >= 5) return "so happy";
        if (pof < 3 && pof > 1) return "sad";
        if (pof <= 1) return "so sad";
        return "neutral";
      };

      const feeling = getFeeling();

      return {
        name: name,
        lane: pf.timeline.lane,
        win: pf.stats.win,
        kills: pf.stats.kills,
        deaths: pf.stats.deaths,
        assists: pf.stats.assists,
        farm: pf.stats.totalMinionsKilled + pf.stats.neutralMinionsKilled,

        pof,
        feeling,
      };
    });

    const getTotalFeelings = () => {
      if (finalPof > 3 && finalPof < 5) return "happy";
      if (finalPof >= 5) return "so happy";
      if (finalPof < 3 && finalPof > 1) return "sad";
      if (finalPof <= 1) return "so sad";
      return "neutral";
    };

    const totalPof = kdas
      .reduce((acm, { pof }) => acm + Number(pof), 0)
      .toFixed(2);
    const finalPof = (totalPof / 3).toFixed(2);
    const totalFeelings = getTotalFeelings();

    return {
      matchId: match.gameId,
      kdas: kdas,
      finalPof,
      totalFeelings,
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
