import React from "react";
import { useParams } from 'react-router-dom';
import Navbar from "../../componentes/Navbar/Navbar";
import { standInternos } from "../../data/dados25";
import Footer from "../../componentes/Footer/Footer";

function TelaStand() {
  const { id } = useParams();
  const objetoStand = standInternos.find(item => item.id === Number(id));
  

  return (
    <main className="main-container">
      <Navbar />

      <div className="containerConteudoSolo">

        <img src={objetoStand.imgSrc} />

        <h1>{objetoStand.titulo}</h1>

        <h2>Apresentado por: {objetoStand.responsavel}</h2>

        <p>{objetoStand.descricao}</p>

        <p>Local: {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>

      </div>
      <Footer />
    </main>
  );
}

export default TelaStand;