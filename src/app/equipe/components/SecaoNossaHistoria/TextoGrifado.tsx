'use client'

import { useRef, useEffect } from "react";

type TextoGrifadoProps = {
    texto: string
}

export default function TextoGrifado({ texto }: Readonly<TextoGrifadoProps>)
{

    const textRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() =>
    {
        const target = textRef.current; // Store the reference here
        if (!target) return; // Exit if the reference is not yet defined

        const observer = new IntersectionObserver(
            ([entry]) =>
            {
                const target = entry.target as HTMLElement;
                if (entry.isIntersecting)
                {
                    target.style.backgroundPosition = '0%'; // Preenche ao entrar na tela
                    target.style.color = 'black'; // Altera a cor do texto para preto
                } else
                {
                    //  target.style.backgroundPosition = '100%'; // Remove preenchimento ao sair da tela
                    //  target.style.color = 'white'; // Altera a cor do texto para preto
                }
            },
            { threshold: .5 } // Define visibilidade em 50%
        );


        observer.observe(target);


        return () => { observer.unobserve(target); };
    }, []);


    return <span>{"  "}
        <span
            ref={textRef}
            className="relative transition-all duration-[2500ms] ease-in-out"
            style={{
                backgroundImage: 'linear-gradient(to right, rgb(251, 238, 9, .7) 50%, transparent 50%)',
                backgroundSize: '200% 100%',
                padding: '2px',
                color: 'white', // Texto inicial como branco
                backgroundPosition: '100%',


            }}
        >
            {texto}
        </span>{"  "}
    </span>


}