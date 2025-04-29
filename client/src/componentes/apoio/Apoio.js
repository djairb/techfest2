import "./Apoio.css";
import { useEffect, useState } from 'react';
import { imagesRight, logosMaster, logosOuro } from '../../data/img';

function Apoio(props) {
    const [bgIndex, setBgIndex] = useState(Number(props.wallpaper));

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % imagesRight.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const masterLink = [
        "https://www.bb.com.br/site/",
        "https://www.bbseguros.com.br/",
        "https://www.caixacapitalizacao.com.br/",
        "https://www.cantustore.com.br/",
        "https://www.copaenergia.com.br/",
        "https://jsl.com.br/",
        "https://www.elecnor.com.br/",
        "https://b3.com.br/",
        "https://www.brasilcap.com.br/",
        "https://www.man-es.com/pt/global-pt/brasil",
        "https://nubank.com.br/",
        "https://www.ticket.com.br/sobre/edenred/",
        "https://www.vwfs.com.br/"
    ];

    
    const ouroLink = [
        "https://zoomsocial.com.br/",
        "https://itaenga.pe.gov.br/",
        "https://www.acessowifi.com.br/",
        "https://www.instagram.com/carladiasassessoriaemeventos/",
        "https://www.instagram.com/pernambucoprefabricados/",
        
    ];

    // Duplicando as imagens para criar o efeito de loop infinito
   

    return (
        <section style={{ backgroundImage: isMobile ? 'none' : `url(${imagesRight[bgIndex]})` }}>

            <h1 className="titulo">Apoio Master</h1>

            <div className="container-apoio-imagens">
                {logosMaster.map((image, index) => (
                    <a href={masterLink[index % logosMaster.length]} target="_blank" rel="noopener noreferrer" key={index}>
                        <img src={image} alt={`Imagem ${index}`} />
                    </a>

                ))}

            </div>

            <h1 className="titulo">Apoio Ouro</h1>

            <div className="container-apoio-imagens">
                {logosOuro.map((image, index) => (
                    <a href={ouroLink[index % logosOuro.length]} target="_blank" rel="noopener noreferrer" key={index}>
                        <img src={image} alt={`Imagem ${index}`} />
                    </a>

                ))}

            </div>
            
        </section>
    );
}

export default Apoio;