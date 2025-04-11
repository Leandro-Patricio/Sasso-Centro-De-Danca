'use client'
import Image from "next/image";
import RedesSociais from "./RedesSociais";
import { useEffect } from "react";

export default function SaibaMaisNasRedesSociais()
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

    return <section className="relative bg-bgMain overflow-hidden w-screen">
        <Image src='./images/circulos/CirculoRoxo.svg' alt="Circulo Roxo" width={300} height={300}
            className="circle   absolute top-0 -left-[5rem]  " />
        <Image src='./images/circulos/CirculoVermelho.svg' alt="Circulo Vermelho" width={300} height={300}
            className=" circle  absolute bottom-0 -right-[5rem]  " />

        <div className="z-10 flex flex-col text-center justify-center items-center 
    relative  gap-10  px-2">


            <h2 className="h1-title">Quer saber <br />quando e onde <br />será a nossa próxima <br />apresentação?</h2>
            <div className="text-xl font-semibold">Fique ligada nas nossas redes sociais!</div>
            <RedesSociais />
            <div className="text-xl font-semibold">Receba as nossas novidades! Adicine seu e-mail abaixo
                e as receba em primeira mão!</div>
            <form action="" className="w-fit rounded-full pl-2 bg-white relative z-10
        overflow-hidden flex justify-between focus-within:ring-[2px] focus-within:ring-inset  focus-within:ring-redMain focus-within:z-0">

                <input
                    type="email"
                    className="w-60 text-black focus:outline-none bg-transparent"
                    placeholder="Seu e-mail"
                />

                <button className="bg-yellowMain text-black h-full w-fit p-4 rounded-full
        relative focus:ring-4 focus:ring-purpleMain focus:ring-inset focus:outline-none">
                    Enviar
                </button>

            </form>
        </div>
    </section>
}