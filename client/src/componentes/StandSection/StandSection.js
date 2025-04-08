import "./StandSection.css";

import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { EffectCoverflow } from 'swiper/modules';

import { standInternos } from "../../data/dados25";


import { useNavigate } from 'react-router-dom';
import CardStand from "../cardStand/cardStand";


register();

function StandSection(props) {

    const navigate = useNavigate();

    const abrirPaginaTodos = () =>{
        
        navigate('/all-stands');

    }

    return (

        <section>

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
                {standInternos.map((item) => (

                    <SwiperSlide key={item.id}>                                          

                        <CardStand

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

            <div className="degrade"></div>
        </section>      


    );
}

export default StandSection;