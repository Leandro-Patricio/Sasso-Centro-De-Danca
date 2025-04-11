'use client'

import Image from "next/image"
import Link from "next/link"

type EquipeCardsProps = {
    imagem: string
    name: string
    href: string
}


export default function CardEquipe({ imagem, name, href }: Readonly<EquipeCardsProps>)
{
    return <Link href={href}
        className="relative flex flex-col justify-end items-center align-middle 
    w-40 h-40 sm:w-60 sm:h-60 overflow-hidden group">

        <Image
            src={imagem}
            alt={imagem}
            width={300}
            height={400}
            className="absolute top-0 left-0 w-full h-full
              transition-transform duration-500 group-hover:scale-110"
        />
        <Link href={href} id="textoDescricao"
            className="w-full absolute top-0 text-sm bg-[#1F1F1F] bg-opacity-90 
            transition-all duration-500 delay-[400ms]  p-1
            group-hover:translate-y-0 -translate-y-10"
        >
            Saiba mais
        </Link>

        <div className="bg-[#141414] p-2 w-full text-lg font-semibold 
        flex flex-col gap-2 transition-transform duration-500 z-10
        border-b-[1px] border-redMain shadow-sm shadow-redMain
        ">

            <span className="">
                {primeiroEUltimoNome(name)}
            </span>
        </div>
    </Link>
}


function primeiroEUltimoNome(nomeCompleto: string)
{
    const nomes = nomeCompleto.trim().split(" ");
    if (nomes.length === 1) return nomes[0]; // Caso haja apenas um nome
    return `${nomes[0]} ${nomes[nomes.length - 1]}`;
}