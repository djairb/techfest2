import React from "react";

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Navbar from "../../componentes/Navbar/Navbar";

import { standInternos } from "../../data/dados25";
import Footer from "../../componentes/Footer/Footer";

function TelaStand() {

  const { id } = useParams();

  
  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;



  const objetoStand = standInternos.find(item => item.id === Number(id));


  return (

    <>

      <Navbar />


      <main className="mainTelaStand">

        <h1>{objetoStand.titulo}</h1>

        {console.log(objetoStand)}

        {/* <img src={objetoStand.imgSrc} />

        <div className="standTexto">

          <h1>{objetoStand.titulo}</h1>

          <h2>Oferecido por: {objetoStand.subtitulo}</h2>

          <p>{objetoStand.descricao}</p>

          <p>Local: {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>

          {/* <iframe className="iframeInscricao" src="https://docs.google.com/forms/d/e/1FAIpQLSdarQ47NfcNIU59uxMQcKU8TgF-VsxeCflZ-oKZ309eAzt1gg/viewform?embedded=true" frameborder="0">Carregando…</iframe> */}

          

              

        {/* <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button> */}


      </main>


      <Footer />

    </>





  );




};

export default TelaStand;