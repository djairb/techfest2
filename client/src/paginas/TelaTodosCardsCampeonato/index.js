import React from "react";

import { campeonatoList } from "../../data/dados25";

import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";

import CardCampeonato from "../../componentes/cardCampeonato/cardCampeonato";

function TelaTodosCardsCampeonato() {

  
   return (

    <main className="main-container">      

      <Navbar />

      

        <h1 className="titulo titleApresent">Campeonatos</h1>

        <div className="containerTelaTodosCards">

          {campeonatoList.map((item) => (

                  <CardCampeonato

                    id={item.id}
                    imgSrc={item.imgSrc}
                    titulo={item.titulo}
                    foto={item.foto}
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

export default TelaTodosCardsCampeonato;