import React from "react";



import { useLocation, useNavigate } from 'react-router-dom';


import { palcoList } from "../../data/dados25";

import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import CardStand from "../../componentes/cardStand/cardStand";
import CardPalco from "../../componentes/cardPalco/cardPalco";

function TelaTodosCardsPalco() {

  
  const location = useLocation();

  const navigate = useNavigate();
  // Obtém o dado do state

  return (

    <main className="main-container">      

      <Navbar />

      

        <h1 className="titulo titleApresent">Palco, Música e Cultura</h1>

        <div className="containerTelaTodosCards">

          {palcoList.map((item) => (

                  <CardPalco

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

export default TelaTodosCardsPalco;