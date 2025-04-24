import './cardMapa.css';
import { useEffect, useState, useRef } from 'react';
import { imagesRight } from '../../data/img';
import imagemMapa from "../../img/mapa/mapa_hight.jpg";

function CardMapa(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [bgIndex, setBgIndex] = useState(Number(props.wallpaper));
    const [scale, setScale] = useState(0.4); // Zoom inicial
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Posição da imagem
    const [initialPositionX, setInitialPositionX] = useState(0); // Posição inicial X
    const [initialPositionY, setInitialPositionY] = useState(0); // Posição inicial Y
    const dragging = useRef(false);
    const lastPosition = useRef({ x: 0, y: 0 });
    const touchStart = useRef({ x: 0, y: 0 });

    const minScale = 0.2;  // Limite mínimo do zoom
    const maxScale = 1.2;    // Limite máximo do zoom

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % imagesRight.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Definindo a posição inicial da imagem (centrada, por exemplo)
        setInitialPositionX((window.innerWidth - 600) / 2); // Exemplo de posicionamento central
        setInitialPositionY((window.innerHeight - 400) / 2); // Exemplo de posicionamento central
    }, []);

    const handleMouseDown = (e) => {
        dragging.current = true;
        lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
        if (!dragging.current) return;
        const dx = e.clientX - lastPosition.current.x;
        const dy = e.clientY - lastPosition.current.y;
        setPosition((pos) => ({
            x: pos.x + dx,
            y: pos.y + dy
        }));
        lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
        dragging.current = false;
    };

    // Eventos para dispositivos móveis
    const handleTouchStart = (e) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchMove = (e) => {
        if (e.touches.length > 1) return; // Se houver mais de um toque, ignorar movimento

        const dx = e.touches[0].clientX - touchStart.current.x;
        const dy = e.touches[0].clientY - touchStart.current.y;
        setPosition((pos) => ({
            x: pos.x + dx,
            y: pos.y + dy
        }));
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
        // Aqui pode ser um lugar para resetar algo, mas geralmente não é necessário
    };

    const zoomIn = () => {
        setScale((prevScale) => Math.min(prevScale + 0.1, maxScale)); // Limita o aumento do zoom
    };

    const zoomOut = () => {
        setScale((prevScale) => Math.max(prevScale - 0.1, minScale)); // Limita a redução do zoom
    };

    return (
        <section style={{ backgroundImage: isMobile ? 'none' : `url(${imagesRight[bgIndex]})` }}>
            <h1 className="titulo">{props.title}</h1>

            {/* Controles de zoom */}
            <div className="zoom-controls">
                <button onClick={zoomIn}>🔍+</button>
                <button onClick={zoomOut}>🔍-</button>
            </div>

            {/* Área da imagem navegável */}
            <div
                className="image-container"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}  // Evento de toque
                onTouchMove={handleTouchMove}    // Evento de movimento de toque
                onTouchEnd={handleTouchEnd}      // Evento de fim de toque
            >
                <img
                    src={imagemMapa}
                    alt="Imagem navegável"
                    className="zoomable-image"
                    style={{
                        transform: `translate(${position.x + initialPositionX}px, ${position.y + initialPositionY}px) scale(${scale})`
                    }}
                />
            </div>

            <div className="degradeNovo"></div>
        </section>
    );
}

export default CardMapa;
