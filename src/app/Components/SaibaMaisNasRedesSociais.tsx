'use client'
import Image from "next/image";
import RedesSociais from "./RedesSociais";
import { useEffect } from "react";

export default function SaibaMaisNasRedesSociais()
{
    useEffect(() =>
    {
        const circles = document.querySelectorAll('.circle');

        const moveCircles = () =>
        {
            circles.forEach(circle =>
            {
                // Gera um deslocamento aleatório
                const xOffset = (Math.random() - 0.5) * 100; // Ajuste a amplitude
                const yOffset = (Math.random() - 0.5) * 100; // Ajuste a amplitude

                // Atualiza a posição do círculo com transição
                circle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });

            // Chama a função de movimento novamente após um intervalo
            setTimeout(moveCircles, 3000); // Ajuste o tempo para a próxima animação
        };

        // Inicia a animação
        moveCircles();

        // Limpeza: Se necessário, você pode remover o listener aqui
        return () =>
        {
            // Se você estiver usando eventos, remova-os aqui
        };
    }, []);

    return <section className=" flex flex-col text-center justify-center items-center 
    relative overflow-hidden h-screen w-screen gap-10  bg-bgMain">
        <Image src='./images/circulos/CirculoRoxo.svg' alt="Circulo Roxo" width={300} height={300}
            className="circle  absolute top-0 -left-[5rem] transition-transform duration-[3000ms] linear " />
        <Image src='./images/circulos/CirculoVermelho.svg' alt="Circulo Vermelho" width={300} height={300}
            className=" circle absolute bottom-0 -right-[5rem] transition-transform duration-[3000ms] linear " />

        <h2 className="text-3xl font-bold">Quer saber <br />quando e onde <br />será a nossa próxima <br />apresentação?</h2>
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
    </section>
}