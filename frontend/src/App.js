import React, { useEffect, useState } from "react";

import { api } from "./services/api";
import "./App.css";

const App = () => {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    const fetchMatchies = async () => {
      const { data } = await api.get("/partidas");
      console.log(data.matchies);
      setPartidas(data.matchies);
    };

    fetchMatchies();
  }, []);

  return (
    <div
      className=" cover-container  text-center text-light w-100 h-100 mx-auto flex-column bg-dark"
      style={{ height: "100vh" }}
    >
      <div className="px-4 py-5 text-center">
        <p className="h1 display-2 p-2 fw-bold">League of Fellings</p>
        <div className="col-lg-6 mx-auto">
          <p className=" h2 lead  p-2 ">
            Aqui podemos ver uma imagem de tamanha tristeza e desigualdade,
            enquanto uns ajudam o time, outros pensam apenas na própria sensação
            e frag, ou seja, jogo individual e sem sensibilidade
          </p>
        </div>
      </div>

      {partidas?.map((partida) => (
        <div className="container " key={partida.matchId}>
          {
            <div className="container">
              <div className="row ">
                <div
                  className={` ${
                    partida.totalFeelings === "sad" ? "bg-danger" : "bg-primary"
                  } align-items-center justify-content-center d-flex `}
                >
                  <p className="h2" style={{ margin: 20 }}>
                    {partida.totalFeelings === "🙁" && "TRISTEZA"}
                    {partida.totalFeelings === "😭" && "TRISTEZA"}
                    {partida.totalFeelings === "😀" && "FELICIDADE"}
                    {partida.totalFeelings === "😁" && "FELICIDADE"}
                  </p>
                  <br></br>
                  <div style={{ fontSize: 50 }}>{partida.totalFeelings}</div>
                </div>
              </div>
              <table
                className={` ${
                  partida.totalFeelings === "sad"
                    ? "table-danger"
                    : "table-primary"
                } table  `}
              >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Lane</th>
                    <th scope="col">KDA</th>
                    <th scope="col">Feelings</th>
                  </tr>
                </thead>
                <tbody>
                  {partida?.kdas?.map((kda) => (
                    <tr key={kda.name}>
                      <th scope="row">{kda.name}</th>
                      <td>{kda.lane}</td>
                      <td>{`${kda.kills}/${kda.deaths}/${kda.assists}`}</td>
                      <td>{kda.feeling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default App;
