'use client'

import { useState, useLayoutEffect, useEffect } from "react";

export default function VideoComponent()
{

    const [darkness, setDarkness] = useState(1); // Inicialmente o brilho está normal (1)
    const [onlyVideoHeight, setOnlyVideoHeight] = useState<number>(0); // Controla a altura do vídeo
    const videoHeight = () =>
    {
        if (typeof window !== 'undefined')
        {
            const windowWidth = window && window.innerWidth;
            const windowHeight = window && window.innerHeight;
            //  const videoTelaPequena = document.getElementById('videoTicTelaGrande')?.classList.contains('hidden') // Verifica se o video da tela pequena está oculto

            if (windowWidth < 768)
            {
                // Se a tela for mais alta do que larga, o vídeo ocupa a altura total
                //    const videoAspectRatio = 369 / 656; // Proporção do vídeo
                return windowHeight;
            } else if (windowWidth >= 768)
            {
                // const widthVideo = document.getElementById('videoTicTelaGrande')?.offsetWidth  // Verifica se o video da tela pequena está oculto
                const heightVideo = document.getElementById('videoTicTelaGrande')?.offsetHeight
                return heightVideo as number + 80
            }
            return 0; // Retorna 0 caso o vídeo não seja encontrado ou a janela não esteja definida

        }

    };

    useEffect(() =>
    {
        const updateVideoHeight = () => { setOnlyVideoHeight(videoHeight() as number); };

        updateVideoHeight(); // Calcula a altura ao carregar a página
        window.addEventListener('resize', updateVideoHeight); // Recalcula ao redimensionar

        return () => { window.removeEventListener('resize', updateVideoHeight); };
    }, []);


    useLayoutEffect(() =>
    {
        const handleScroll = () =>
        {
            const videoContainer = document.getElementById('video-container');
            if (videoContainer && typeof window !== 'undefined')
            {
                const startFade = 0; // Começa a desaparecer assim que começa a sair da tela
                const endFade = window.innerHeight - 300; // Ponto em que o vídeo desaparece completamente

                const scrollTop = window.scrollY;// A posição atual de rolagem

                if (scrollTop >= startFade)// Se a posição do topo do vídeo é maior que o ponto de início do fade
                {
                    const scrollDiff = scrollTop - startFade;
                    const darknessScale = Math.min(1, scrollDiff / (endFade - startFade));
                    setDarkness(1 - darknessScale); // Escurece de 1 até 0
                }
                else setDarkness(1); // Mantém o brilho total enquanto o vídeo está visível

            }
        };
        typeof window !== 'undefined' && window.addEventListener('scroll', handleScroll);

        return () =>
        {
            typeof window !== 'undefined' && window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(darkness);
    return (
        <section className={`flex flex-col justify-center w-full ${typeof window !== 'undefined' ? onlyVideoHeight : 'h-screen'}
      
        `}
            style={{ height: onlyVideoHeight ? `${onlyVideoHeight}px` : '100vh' }}>

            {/* h-[calc(100vh-48px)] videoHeight */}
            {/* Video Section */}
            <div id="video-container" className={`w-full flex flex-col fixed -top-5   ${darkness === 0 && 'hidden'}`}>
                <div className={`h-24 bg-black`}></div>
                <video
                    id="videoRuaTelaPequena"
                    src="/videos/rua.mp4"
                    // controls
                    autoPlay
                    muted
                    preload="auto"
                    playsInline
                    loop
                    className={`w-full ${darkness === 0 && 'hidden'} md:hidden `}
                    style={{ filter: `brightness(${darkness})` }}
                >
                    Este título não pode ser reproduzido no momento.
                </video>
                <video
                    id="videoTicTelaGrande"
                    src="/videos/ticTeaser.mp4"
                    // controls
                    autoPlay
                    muted
                    preload="auto"
                    playsInline
                    loop
                    className={`w-full lg:w-auto lg:max-h-[calc(100vh-48px)] 
                    hidden md:flex ${darkness === 0 && 'hidden'} 
                    justify-start align-top`}
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
