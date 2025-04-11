import Link from "next/link"
import Image from "next/image";


type DancasCardsProps = {
    imagem: string
    name: string
    descricao: string
    href: string
}

export default async function DancasCards({ imagem, name, descricao, href }: Readonly<DancasCardsProps>)
{
    return <div className="relative flex flex-col justify-end items-center align-middle w-72 h-72 overflow-hidden group">
        <Link href={href}>
            <Image
                src={imagem}
                alt={imagem}
                width={300}
                height={400}
                className="absolute top-0 left-0 w-full h-full  transition-transform duration-500 group-hover:scale-110"
            />
        </Link>
        <Link href={href} id="textoDescricao"
            className="w-full absolute top-0 text-base font-semibold bg-[#1F1F1F] bg-opacity-90 
                transition-all duration-500 delay-[400ms]  p-1
                group-hover:translate-y-0 -translate-y-10 font-detail"
        >
            Saiba mais
        </Link>

        <div className="bg-[#141414] p-2 w-full text-2xl font-semibold flex flex-col gap-2 transition-transform duration-500 group-hover:translate-y-0 translate-y-16">

            <span className="w-full flex justify-center text-center font-title ">
                <span className="w-fit shadow-[0_10px_20px_-5px_rgba(139,92,246,0.3)]
                                group-hover:shadow-lg group-hover:shadow-purpleMain
                                transition-shadow duration-300 ease-in-out">
                    {name}
                </span>
            </span>
            <span id="textoDescricao"
                className="text-sm font-normal bg-[#1F1F1F] bg-opacity-50 transition-all duration-500 delay-100 group-hover:translate-y-0 translate-y-16"
            >
                {descricao}
            </span>
        </div>
    </div >

}