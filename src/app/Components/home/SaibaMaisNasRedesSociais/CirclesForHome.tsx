'use client'

import Image from "next/image";
import { useEffect } from "react";

export default function CirclesForHome()
{
    useEffect(() =>
    {
        const circles = document.querySelectorAll('.circle');

        // Função que gera um deslocamento aleatório para cada círculo
        const moveCircles = () =>
        {
            circles.forEach(circle =>
            {
                const xOffset = (Math.random() - 0.5) * 100; // Ajuste a amplitude
                const yOffset = (Math.random() - 0.5) * 100; // Ajuste a amplitude

                (circle as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });

            // Anima novamente após o término da transição
            setTimeout(() =>
            {
                requestAnimationFrame(moveCircles);
            }, 3000); // Pausa de 3 segundos antes da próxima animação
        };

        // Adiciona uma transição suave para cada círculo
        circles.forEach(circle =>
        {
            (circle as HTMLElement).style.transition = "transform 2.9s ease-in-out";
        });

        // Inicia a animação
        moveCircles();
    }, []);

    return <div className="absolute -top-2">
        <div className=" relative  w-screen h-[30rem]">
            <Image src='./images/circulos/CirculoVermelho.svg' alt="Circulo Roxo" width={300} height={300}
                className="circle   absolute top-0 -left-[5rem]  " />
            <Image src='./images/circulos/CirculoRoxo.svg' alt="Circulo Vermelho" width={300} height={300}
                className=" circle  absolute bottom-0 -right-[5rem]  " />
        </div>
    </div>
}