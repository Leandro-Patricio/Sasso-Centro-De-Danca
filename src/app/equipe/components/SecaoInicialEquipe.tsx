import Image from "next/image";

export default async function SecaoInicialEquipe(/* { children }: Readonly<{ children: React.ReactNode }> */)
{
    return <section className="flex sm:flex-row flex-col px-10 gap-10 z-10 align-middle itens-center h-fit"> {/* Entrada */}


        <div className="flex flex-col  justify-evenly  z-10">
            <span className="text-3xl font-bold text-center">DANCE COM O MAIOR TIME DE TALENTOS DE NITERÓI</span>
            <span className="text- font-normal">Conheça agora todo o corpo de primeira do centro de dança Sasso! </span>
        </div>

        <Image src={'/images/equipe/equipeToda.png'} width={1000} height={1000} alt="Equipe sasso"
            className=" z-10 max-w-[100%] h-[100%]"
        />


    </section>

}