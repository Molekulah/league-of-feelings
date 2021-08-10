import React, { useState, useEffect } from 'react';

import { api } from './services/api';
import './App.css';

const App = () => {
  const [contador, mudarContador] = useState(0);

  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    const buscaPartidas = async () => {
      const { data } = await api.get('/partidas');
      setPartidas(data);
    };

    buscaPartidas();
  }, []);

  const minhaFuncao = () => {
    mudarContador(contador + 1);

    console.log(contador);
  };

  return (
    <div className="App">
      {partidas.map((partida, index) => (
        <div key={index}>{partida.totalfeelings}</div>
      ))}

      <button onClick={minhaFuncao}>Mudar variável</button>
    </div>
  );
};

export default App;
