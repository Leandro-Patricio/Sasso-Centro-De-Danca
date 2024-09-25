'use client'

import { useState, useLayoutEffect } from "react";

export default function OnlyVideo()
{
    const [darkness, setDarkness] = useState(1); // Inicialmente o brilho está normal (1)
    const videoHeight = () =>
    {
        const windowWidth = window && window.innerWidth;
        const videoAspectRatio = 1153 / 648.562; // Proporção do vídeo
        const height = windowWidth / videoAspectRatio;
        return height ?? 600
    }; // Valor de fallback no SSR

    useLayoutEffect(() =>
    {
        const handleScroll = () =>
        {
            const videoContainer = document.getElementById('video-container');
            if (videoContainer)
            {
                const rect = videoContainer.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const windowWidth = window.innerWidth;
                console.log(windowWidth)

                // Ponto em que o vídeo começa a desaparecer
                const startFade = 0; // Começa a desaparecer assim que começa a sair da tela
                // Ponto em que o vídeo desaparece completamente
                const endFade = videoHeight(); // Ajuste de buffer de 200px

                // A posição atual de rolagem
                const scrollTop = window.scrollY;

                // Se a posição do topo do vídeo é maior que o ponto de início do fade
                if (scrollTop >= startFade)
                {
                    const scrollDiff = scrollTop - startFade;
                    const darknessScale = Math.min(1, scrollDiff / (endFade - startFade));
                    setDarkness(1 - darknessScale); // Escurece de 1 até 0
                } else
                {
                    setDarkness(1); // Mantém o brilho total enquanto o vídeo está visível
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () =>
        {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="flex flex-col justify-center w-full">
            {/* Video Section */}
            <div id="video-container" className="w-full flex flex-col fixed top-0 -z-10">
                <div className="h-24 bg-black"></div>
                <video
                    src="/videos/ticTeaser.mp4"
                    controls
                    autoPlay
                    muted
                    preload="auto"
                    playsInline
                    loop
                    className={`w-full ${darkness === 0 && 'hidden'}`}
                    style={{ filter: `brightness(${darkness})` }}
                >
                    Este vídeo não pode ser reproduzido no momento.
                </video>
            </div>

            {/* Placeholder for video height */}
            <div className="transition-all duration-300" style={{ height: `${videoHeight()}px` }}></div>
        </section>
    );
}
