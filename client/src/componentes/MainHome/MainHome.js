import './MainHome.css'

import calendario from "../../img/calendar-home.png";

import location from "../../img/location-home.png";

import logoGrande from "../../img/logoGrande.png";

import Typed from 'typed.js';
import { useEffect, useState } from 'react';

import { images } from '../../data/img';




function MainHome() {


    const dataEvento = new Date(2025, 4, 7, 8, 0, 0); // Ano, Mês (0-11), Dia, Hora, Minuto, Segundo -- O mês de março é o número 2 no JavaScript, pois os meses são indexados a partir de 0.

    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const indiceAleatorio = Math.floor(Math.random() * 4) + 1; // Gera um número entre 1 e 4
        setBgIndex(indiceAleatorio);
      }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    // Estado para armazenar a contagem regressiva
    const [contagem, setContagem] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
    });

    // Efeito para atualizar a contagem regressiva a cada segundo
    useEffect(() => {
        const atualizarContagem = () => {
            const agora = new Date();
            const diferenca = dataEvento - agora;

            // Calcular dias, horas, minutos e segundos
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            // Atualizar o estado da contagem
            setContagem({
                dias,
                horas,
                minutos,
                segundos,
            });
        };

        // Chamar a função a cada segundo
        const intervalo = setInterval(atualizarContagem, 1000);

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(intervalo);
    }, []);

    // Formatar a contagem regressiva
    const contagemFormatada = `${contagem.dias} dias, ${contagem.horas} horas, ${contagem.minutos} minutos e ${contagem.segundos} segundos`;

    useEffect(() => {
        const typed = new Typed('#my-h1', {
            strings: ['O Maior Evento de Tecnologia da Mata Norte está de volta!'],
            typeSpeed: 40,
            backSpeed: 20,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (

        <section className='sectionMain' style={{ backgroundImage: `url(${images[bgIndex]})` }}>

            <div className='mainHome'>

                <div className='containerTexto'>

                    <h1 id="my-h1"></h1>
                    <div className='icon-date-calendar'>

                        <img src={calendario}></img>
                        <h2><a>07</a>, <a>08</a> e <a>09</a> de Maio</h2>

                    </div>

                    <div className='icon-date-calendar'>

                        <img src={location}></img>
                        <h2><a>Lagoa de Itaenga</a>, Pernambuco, Brasil.</h2>

                    </div>
                    <h2>Faltam <a>{contagemFormatada}</a>!</h2>

                </div>

                <div className='containerLogo'>

                    <img className="logoGrande" src={logoGrande} alt="logo-techFest" />


                </div>


            </div>

            <div className="degradeNovo"></div>

        </section>




    );
}

export default MainHome;