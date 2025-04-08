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

      {console.log(objetoStand)}
      <p>{objetoStand.descricao}</p>
      {console.log(objetoStand.descricao)}

      {/* <div className="containerConteudoSolo">
        {objetoStand ? (
          <p>{objetoStand.descricao}</p>
        ) : (
          <p>Carregando detalhes do stand...</p>
          // Ou renderizar null: null
        )}
        {objetoStand && (
          <p>Local: {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>
        )}
      </div> */}
      <Footer />
    </main>
  );
}

export default TelaStand;