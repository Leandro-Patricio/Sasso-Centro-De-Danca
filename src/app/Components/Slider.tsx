'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type InfiniteSliderProps = {
    images: string[]
}

export default function InfiniteSlider({ images }: Readonly<InfiniteSliderProps>)
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Modificação aqui

    const startInterval = () =>
    {
        intervalRef.current = setInterval(() =>
        {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
    };

    const stopInterval = () =>
    {
        if (intervalRef.current !== null)
        { // Verificação para garantir que não é null
            window.clearInterval(intervalRef.current);
        }
    };

    const handleNext = () =>
    {
        stopInterval(); // Para o intervalo ao clicar em "avançar"
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        startInterval(); // Reinicia o intervalo após a ação
    };

    const handlePrev = () =>
    {
        stopInterval(); // Para o intervalo ao clicar em "voltar"
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        startInterval(); // Reinicia o intervalo após a ação
    };


    useEffect(() =>
    {
        startInterval(); // Começa o intervalo quando o componente é montado

        return () => stopInterval(); // Limpa o intervalo quando o componente é desmontado
    }, [images.length]);

    return (
        <div className="w-full overflow-hidden relative h-52" ref={sliderRef}>
            <div
                className="flex transition-transform duration-1000 ease-in-out items-center align-middle"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index: number) => (
                    <div className="min-w-full h-full flex align-middle items-center" key={index}>
                        <Image
                            src={image}
                            width={50}
                            height={50}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
            {/* Botão para voltar */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                &#9664;
            </button>

            {/* Botão para avançar */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                &#9654;
            </button>
        </div>
    );
};
