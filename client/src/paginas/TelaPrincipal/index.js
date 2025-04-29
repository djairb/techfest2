import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";


import './style.css';




import Footer from "../../componentes/Footer/Footer";


import CardLocation from "../../componentes/cardLocation/cardLocation";
import MainHome from "../../componentes/MainHome/MainHome";



import Apoio from "../../componentes/apoio/Apoio";
import StandSection from "../../componentes/StandSection/StandSection";
import ApresentacaoSection from "../../componentes/ApresentacaoSection/ApresentacaoSection";
import ShowSection from "../../componentes/ShowSection/ShowSection";
import PalestraSection from "../../componentes/PalestraSection/PalestraSection";
import OficinaSection from "../../componentes/OficinaSection/OficinaSection";
import GameSection from "../../componentes/GameSection/GameSection";
import LazerSection from "../../componentes/LazerSection/LazerSection";
import MainVideo from "../../componentes/video";
import PalcoSection from "../../componentes/PalcoSection/PalcoSection";
import CardMapa from "../../componentes/cardMapa/cardMapa";
import CampeonatoSection from "../../componentes/CampeonatoSection/CampeonatoSection";


function TelaPrincipal() {

  
  // const newUser = {
  //   nome: "Djair",
  //   id: 550
  // }

  // toggleUser(newUser); 

  return (

    <>   

      <main>

        <Navbar/>

        <MainHome />

        <MainVideo/>

        <OficinaSection

          title="Minicursos e Palestras"
          wallpaper="0"
        
        />

        <CampeonatoSection

          title="Campeonatos"
          wallpaper="1"

        />

        <StandSection

          title="Exposições e Espaços"
          wallpaper="2"        
        
        />

        <PalcoSection

          title="Palco, Música e Cultura"
          wallpaper="0"         
        
        />

        <CardMapa

        title="Mapa do Evento"
        wallpaper="1" 

        />

        <CardLocation

        title="Localização"
        wallpaper="2" 

        />



        <Apoio

        wallpaper="0"

        />

        {/* <PalestraSection

          title="Palestras"
        
        />

        <OficinaSection

          title="Oficinas"
        
        />     
       
        <StandSection

          title="Exposições em Stands"        
        
        />

        <GameSection

          title="Disputa de Games"
        
        />


        <ApresentacaoSection

          title="Apresentações Culturais"
        
        />

        <ShowSection

          title="Shows"
        
        /> */}


       


      </main>









      {/* add location
       */}

      <Footer />

    </>

  );

};

export default TelaPrincipal;