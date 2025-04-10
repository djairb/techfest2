
import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { EffectCoverflow } from 'swiper/modules';

import { palcoList } from "../../data/dados25";


import { useNavigate } from 'react-router-dom';
import CardStand from "../cardStand/cardStand";
import CardPalco from "../cardPalco/cardPalco";

import { imagesRight } from '../../data/img';
import { useEffect, useState } from 'react';


register();

function PalcoSection(props) {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [bgIndex, setBgIndex] = useState(Number(props.wallpaper));

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

    const navigate = useNavigate();

    const abrirPaginaTodos = () =>{
        
        navigate('/palco-all');

    }

    return (

        <section style={{ backgroundImage: isMobile ? 'none' : `url(${imagesRight[bgIndex]})` }}>

            <h1 className="titulo">{props.title}</h1>
            

            <Swiper

                slidesPerView={4}

                style={{

                    "--swiper-pagination-color": "#e52320",
                    "--swiper-navigation-color": "#e52320",

                }}

                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={2}
                loop={true}

                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,

                    }
                }
                autoplay={{
                    delay: 3000
                }}
                modules={[EffectCoverflow]}
                pagination={{ clickable: true }}
                navigation
                className="swiperMaster"             
            >
                {palcoList.map((item) => (

                    <SwiperSlide key={item.id}>                                          

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

                    </SwiperSlide>
                ))}
            </Swiper>

            <button onClick={abrirPaginaTodos} className="botaoVerTodos">Todos</button>

            <div className="degradeNovo"></div>
        </section>      


    );
}

export default PalcoSection;