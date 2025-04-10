import "./Apoio.css";
import { useEffect, useState } from 'react';
import { imagesRight, logosApoio } from '../../data/img';

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

    const quemEstaLink = [
        "https://www.bb.com.br/site/",
        "https://nubank.com.br/",
        "https://www.daycoval.com.br/",
        "https://jsl.com.br/",
        "https://www.cantustore.com.br/",
        "https://www.elecnor.com.br/",
        "https://www.brasilcap.com.br/",
        "https://www.copaenergia.com.br/",
        "https://itaenga.pe.gov.br/",
        "",
    ];

    // Duplicando as imagens para criar o efeito de loop infinito
   

    return (
        <section style={{ backgroundImage: isMobile ? 'none' : `url(${imagesRight[bgIndex]})` }}>
            <h1 className="titulo">Apoio</h1>

            <div className="container-apoio-imagens">
                {logosApoio.map((image, index) => (
                    <a href={quemEstaLink[index % logosApoio.length]} target="_blank" rel="noopener noreferrer" key={index}>
                        <img src={image} alt={`Imagem ${index}`} />
                    </a>

                ))}

            </div>
        </section>
    );
}

export default Apoio;