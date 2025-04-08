import React from "react";

import './style.css';


import { useLocation, useNavigate } from 'react-router-dom';


import { standInternos } from "../../data/dados25";

import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import CardStand from "../../componentes/cardStand/cardStand";

function TelaTodosCardsStand() {

  
  const location = useLocation();

  const navigate = useNavigate();
  // Obtém o dado do state

  return (

    <main className="main-container">      

      <Navbar />

      

        <h1 className="titulo titleApresent">Stands</h1>

        <div className="containerTelaTodosCards">

          {standInternos.map((item) => (

                  <CardStand

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

export default TelaTodosCardsStand;