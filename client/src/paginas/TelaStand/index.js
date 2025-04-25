import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../../componentes/Navbar/Navbar";
import { standInternos } from "../../data/dados25";
import Footer from "../../componentes/Footer/Footer";

function TelaStand() {
  const { id } = useParams();
  const objetoStand = standInternos.find(item => item.id === Number(id));

  const navigate = useNavigate();

  const abrirPaginaTodos = () =>{
        
    navigate('/all-stands');

}
  

  return (
    <main className="main-container">
      <Navbar />

      <div className="containerConteudoSolo">

        <img src={objetoStand.imgSrc} />

        <h1>{objetoStand.titulo}</h1>

        <h2>Apresentado por: {objetoStand.responsavel}</h2>

        <p>{objetoStand.descricao}</p>

        <p>Stand: {objetoStand.stand} - {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>

        <button onClick={abrirPaginaTodos} className="botaoVerTodos">Todos</button>

      </div>

      
      <Footer />
    </main>
  );
}

export default TelaStand;