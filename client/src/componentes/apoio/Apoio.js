import "./Apoio.css";

import { useEffect, useState } from 'react';


import { imagesRight } from '../../data/img';

function Apoio(){


    const [bgIndex, setBgIndex] = useState(2);
    

    useEffect(() => {
        const interval = setInterval(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % imagesRight.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
   

    return (
              

        <section  style={{ backgroundImage: isMobile ? 'none' : `url(${imagesRight[bgIndex]})`}}>

            <h1 className="titulo">Apoio</h1>

            <div className="container-apoio-imagens">

                <a href="https://www.bb.com.br/site/">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212196&authkey=%21AC9rCAnoT8NYuZM"/>
                </a>
                
                <a href="https://www.brasilcap.com.br/">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212197&authkey=%21AIBwffIQqh7tsFw"/>
                </a>
                
                <a href="https://www.daycoval.com.br/">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212198&authkey=%21ABN04bbwI3UlbXk"/>
                </a>
                
                <a href="https://www.jsl.com.br/">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212199&authkey=%21ABljo8WMvN3cNyA"/>
                </a>

                
                <a href="https://www.cantustore.com.br/">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%21136&authkey=%21ACLburflDxxrsa0"/>
                </a>

                <a href="https://www.elecnor.com.br/">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%21150&authkey=%21AOx6pBhFFKuWTVc"/>
                </a>

                <a href="https://nubank.com.br/">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%21163&authkey=%21ADxoXvgJ9e3vskc"/>
                </a>

                <a href="https://www.copaenergia.com.br">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%21147&authkey=%21AErTYhGl89Ck7A0"/>
                </a>
                
                <a href="">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%21151&authkey=%21AFPQQ7MLY5YZ2d8"/>
                </a>

                <a href="https://itaenga.pe.gov.br/">
                    <img className="imagem-apoio" src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%21157&authkey=%21AI3VsfN35ihYRGU"/>
                </a>
            </div>

            





        </section>

        
        


			

				
            
            
    );

}

export default Apoio;



