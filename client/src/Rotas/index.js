import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaPrincipalCrud from "../paginas/TelaPrincipal - crud";
import TelaPrincipal from "../paginas/TelaPrincipal";

import TelaUsuario from "../paginas/TelaUser";
import TelaLogin from "../paginas/TelaLogin";
import TelaTodosCardsStand from "../paginas/TelaTodosCardsStand";
import TelaStand from "../paginas/TelaStand";
import TelaTodosCardsApresentacao from "../paginas/TelaTodosCardsApresentacao";

import TelaPalestra from "../paginas/TelaPalestra";
import TelaTodosCardsPalestra from "../paginas/TelaTodosCardsPalestra";
import TelaOficina from "../paginas/TelaOficina";
import TelaTodosCardsOficina from "../paginas/TelaTodosCardsOficina";
import TelaGame from "../paginas/TelaGame";
import TelaTodosCardsGame from "../paginas/TelaTodosCardsGame";
import TelaTodosCardsLazer from "../paginas/TelaTodosCardsLazer";
import TelaApresentacao from "../paginas/TelaApresentacao";
import TelaShow from "../paginas/TelaShow";
import TelaPalco from "../paginas/TelaPalco";
import TelaTodosCardsPalco from "../paginas/TelaTodosCardsPalco";
import TelaTodosCardsCampeonato from "../paginas/TelaTodosCardsCampeonato";
import TelaCampeonato from "../paginas/TelaCampeonato";

const Rotas = () => (
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<TelaPrincipal />} />
      <Route exact path='/pagina-crud' element={<TelaPrincipalCrud />} />
      
      <Route exact path='/tela-usuario' element={<TelaUsuario />} />
      <Route exact path='/tela-login' element={<TelaLogin />} />
      <Route exact path='/all-stands' element={<TelaTodosCardsStand />} />
      <Route exact path='/oficina-all' element={<TelaTodosCardsOficina />} />

      <Route exact path='/campeonato-all' element={<TelaTodosCardsCampeonato />} />

      <Route exact path='/palco-all' element={<TelaTodosCardsPalco />} />
      <Route exact path='/campeonato/:id' element={<TelaCampeonato />} />
      <Route exact path='/oficina/:id' element={<TelaOficina />} />
      <Route exact path='/stand/:id' element={<TelaStand />} />
      <Route exact path='/palco/:id' element={<TelaPalco />} />
      <Route exact path='/tela-todos-apresentacao' element={<TelaTodosCardsApresentacao />} />
      
      <Route exact path='/tela-palestra' element={<TelaPalestra />} />
      <Route exact path='/tela-todos-palestra' element={<TelaTodosCardsPalestra />} />
      <Route exact path='/tela-oficina' element={<TelaOficina />} />
      <Route exact path='/tela-todos-oficina' element={<TelaTodosCardsOficina />} />
      <Route exact path='/tela-game' element={<TelaGame />} />
      <Route exact path='/tela-todos-game' element={<TelaTodosCardsGame />} />
      <Route exact path='/tela-todos-lazer' element={<TelaTodosCardsLazer />} />
      <Route exact path='/tela-apresentacao' element={<TelaApresentacao />} />
      <Route exact path='/tela-show' element={<TelaShow />} />



          




      
    </Routes>
  </HashRouter>
);

export default Rotas;