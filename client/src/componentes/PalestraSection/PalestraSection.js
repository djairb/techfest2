import "./PalestraSection.css";

import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { EffectCoverflow } from 'swiper/modules';

import {apresentacaoList, palestraList} from "../../data/dadosBackup";


import { useNavigate } from 'react-router-dom';



import CardPalestra from "../cardPalestra/cardPalestra";


register();

function PalestraSection(props) {

    const navigate = useNavigate();

    const eventoDados = {

        tipo: "apresentacao"
    }

    const abrirPaginaTodos = () =>{
        
        navigate('/tela-todos-palestra', { state: eventoDados });

    }

    return (

        <section>

            <h1 className="titulo">{props.title}</h1>            

            <Swiper

                slidesPerView={4}

                style={{

                    "--swiper-pagination-color": "#72c000",
                    "--swiper-navigation-color": "#72c000",

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
                    delay: 2000
                }}
                modules={[EffectCoverflow]}
                pagination={{ clickable: true }}
                navigation
                className="swiperMaster"             
            >
                {palestraList.map((item) => (

                    <SwiperSlide key={item.id}>                        
                                                                  
                        <CardPalestra

                            id={item.id}
                            imgSrc={item.imgSrc}
                            titulo={item.titulo}
                            palestranteNome={item.palestranteNome}
                            local={item.local}
                            data={item.data}
                            horario={item.horario}
                            palestranteImgSrc={item.palestranteImgSrc}                         
                        
                        />
                       
                    </SwiperSlide>
                ))}
            </Swiper>

            <button onClick={abrirPaginaTodos} className="botaoVerTodos">Ver Todos</button>

            <div className="degrade"></div>
        </section>      


    );
}

export default PalestraSection;