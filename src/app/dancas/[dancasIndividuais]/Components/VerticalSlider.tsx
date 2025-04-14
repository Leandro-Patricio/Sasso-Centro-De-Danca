'use client';

import Image from "next/image";
import { useState } from "react";

type VerticalSliderProps = {
    danca: {
        href: string;
        nome: string;
        imagem: string;
        descricao: string;
    }
}


export default function VerticalSlider({ danca }: Readonly<VerticalSliderProps>)
{
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [danca.imagem, danca.imagem, danca.imagem, danca.imagem, danca.imagem, danca.imagem,];

    const goToSlide = (index: number) => { setCurrentIndex(index); };

    const nextSlide = () =>
    {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () =>
    {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };


    return <>
        <div
            className="flex flex-col transition-transform duration-300 gap-2 relative text-white"
            style={{ transform: `translateY(-${currentIndex * 10}%)` }}
        >
            {images.map((img, index) => (
                <div key={index} className="w-full h-fit">
                    <Image
                        src={img}
                        alt={`Slide ${index}`}
                        width={300}
                        height={300}
                        className="rounded-lg shadow-xl w-full h-full object-contain"
                    />
                </div>
            ))}
        </div>
        <button
            onClick={prevSlide}
            className="absolute top-2 left-1/2 transform -translate-x-1/2  px-2 rounded-full shadow-md
            bg-purpleMain/70 hover:bg-purpleMain
            "
        >
            ↑
        </button>
        <button
            onClick={nextSlide}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-2 rounded-full shadow-md
                bg-purpleMain/70 hover:bg-purpleMain
            "
        >
            ↓
        </button>

        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
            {images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-yellowMain' : 'bg-gray-400'}`}
                />
            ))}
        </div>



    </>
}