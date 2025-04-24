import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../../componentes/Navbar/Navbar";
import { palcoList } from "../../data/dados25";
import Footer from "../../componentes/Footer/Footer";

function TelaPalco() {
  const { id } = useParams();
  const objetoStand = palcoList.find(item => item.id === Number(id));

  const navigate = useNavigate();

  const abrirPaginaTodos = () =>{
        
    navigate('/palco-all');

}
  

  return (
    <main className="main-container bgChange">
      <Navbar />

      <div className="containerConteudoSolo">

        <img src={objetoStand.imgSrc} />

        <h1>{objetoStand.titulo}</h1>

        {objetoStand.foto && (
          <img className="imagemResponsavel" src={objetoStand.foto} alt={`Foto de ${objetoStand.responsavel}`} />
        )}

        <h2>Apresentado por: {objetoStand.responsavel}</h2>

        <p>{objetoStand.descricao}</p>

        <p>Local: {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>

        <button onClick={abrirPaginaTodos} className="botaoVerTodos">Todos</button>

      </div>

      
      <Footer />
    </main>
  );
}

export default TelaPalco;