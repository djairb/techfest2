import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../../componentes/Navbar/Navbar";
import { campeonatoList } from "../../data/dados25";
import Footer from "../../componentes/Footer/Footer";

function TelaCampeonato() {
  const { id } = useParams();
  const objetoStand = campeonatoList.find(item => item.id === Number(id));

  const navigate = useNavigate();

  const abrirPaginaTodos = () =>{
        
    navigate('/campeonato-all');

}
  

  return (
    <main className="main-container">
      <Navbar />

      <div className="containerConteudoSolo">

        <img src={objetoStand.imgSrc} />

        <h1>{objetoStand.titulo}</h1>

        <img
        
          className= {objetoStand.tipo == "freefire" ? "campeonatoLogo freeFireLogo" : "campeonatoLogo"}
          
          src={objetoStand.logo}
          
          />

        <p>{objetoStand.descricao}</p>

        <p>Responsável: {objetoStand.responsavel}</p>

        <p>{objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>

        {objetoStand.link &&
        
          <iframe

            className="iframeInscricao"

            src={objetoStand.link}



            frameborder="0">

            Carregando…


          </iframe>


        }

        

        <button onClick={abrirPaginaTodos} className="botaoVerTodos">Todos</button>

        

      </div>

      
      <Footer />
    </main>
  );
}

export default TelaCampeonato;