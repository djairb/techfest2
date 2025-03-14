import React, { useEffect, useState } from 'react';

function MainVideo() {
    useEffect(() => {
        // Aqui você pode adicionar algum código adicional, caso precise manipular o iframe de forma personalizada.
    }, []);

    return (
        <section>
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/DqdZbdetM4s?autoplay=1&mute=1&loop=1&playlist=DqdZbdetM4s"
                    title="Conheça a Associação Conexão Social"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}

export default MainVideo;
