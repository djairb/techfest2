import './cardLocation.css';

import { useEffect, useState } from 'react';

import { imagesRight } from '../../data/img';


function CardLocation(props) {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [bgIndex, setBgIndex] = useState(3);

    useEffect(() => {
            const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % imagesRight.length);
            }, 4000);
    
            return () => clearInterval(interval);
        }, []);

    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (

        <section style={{ backgroundImage: isMobile ? 'none' : `url(${imagesRight[bgIndex]})` }}>

            <h1 className="titulo">{props.title}</h1>

            <iframe className='iframeLocalizacao' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.666418158454!2d-35.30186922499361!3d-7.929865992093945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba723be8539df%3A0xcd1169236520ab2e!2sCTACS%20-%20Centro%20Tecnologico%20da%20Associa%C3%A7%C3%A3o%20Conex%C3%A3o%20Social!5e0!3m2!1spt-BR!2sbr!4v1711306998918!5m2!1spt-BR!2sbr"  
            allowfullscreen=""
            loading="lazy"></iframe>

                    

            <div className="degradeNovo"></div>
        </section>
    );
}

export default CardLocation;