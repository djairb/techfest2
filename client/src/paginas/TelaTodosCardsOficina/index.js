import React from "react";



import { useLocation, useNavigate } from 'react-router-dom';


import { oficinaList, palcoList } from "../../data/dados25";

import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";

import CardOficina from "../../componentes/cardOficina/cardOficina";

function TelaTodosCardsOficina() {

  
  const location = useLocation();

  const navigate = useNavigate();
  // Obtém o dado do state

  return (

    <main className="main-container">      

      <Navbar />

      

        <h1 className="titulo titleApresent">Oficinas</h1>

        <div className="containerTelaTodosCards">

          {oficinaList.map((item) => (

                  <CardOficina

                    id={item.id}
                    imgSrc={item.imgSrc}
                    titulo={item.titulo}
                    responsavel={item.responsavel}
                    local={item.local}
                    data={item.data}
                    horario={item.horario}
                    stand={item.stand}
                  />


                ))}

        </div>


      <Footer/>

    

    </main>

    

  );

};

export default TelaTodosCardsOficina;