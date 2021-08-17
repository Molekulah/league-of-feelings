import React, { useEffect } from 'react';

// import { api } from './services/api';
import './App.css';
const App = () => {
  useEffect(() => {}, []);

  return (
    <div
      className=" text-center text-light bg-dark"
      style={{ height: '100vh' }}
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

      <div className="container px-4">
        <div style={{ fontSize: 125 }}>😩</div>

        <div className="row ">
          <div className=" bg-danger col-md-4 offset-md-4">
            <p className="h2" style={{ margin: 20 }}>
              TRISTEZA
            </p>
          </div>
        </div>
      </div>

      <div className="container p-3 ">
        <table className="table table-danger ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Lane</th>
              <th scope="col">KDA</th>
              <th scope="col">Feelings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">B</th>
              <td>Jungle</td>
              <td>*/*/*</td>
              <td>😢</td>
            </tr>
            <tr>
              <th scope="row">C</th>
              <td> Adcarry</td>
              <td>*/*/*</td>
              <td>😊</td>
            </tr>
            <tr>
              <th scope="row">L</th>
              <td>Support</td>
              <td>*/*/*</td>
              <td>😢</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
