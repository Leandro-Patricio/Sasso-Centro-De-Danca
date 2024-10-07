import Image from "next/image";

export default async function Apresentacao()
{
    return <section className="w-full flex sm:flex-row flex-col  px-2 gap-5 z-10">

        <Image src='/images/professores/equipeSouSasso.png' width={500} height={500} alt="Equipe Sasso"
            className="w-full sm:w-1/2 rounded-full " />

        <div className="flex flex-col w-full sm:w-1/2  justify-around items-center text-start">
            <h1 className="text-xl font-bold">
                Bem-vinda à <br />
                <span className="text-3xl font-bold">                    Sasso!                </span>
            </h1>

            <span className="text-justify indent-4">
                Somos a escola de dança de Niterói com maior variedade de danças,
                com professores que valorizam cada aluna.{" "}
                <span className="font-semibold underline">
                    Aqui ninguém fica sem dançar!
                </span>

            </span>
            <span className="text-justify indent-4">
                Temos aulas de níveis desde avançado ao iniciante.
                Crianças a partir de 2 anos estão super convidadas!
            </span>
            <span className="text-justify indent-4">
                Horários flexíveis preços que cabem no seu bolso! Venha experimentar:
            </span>
            {/*             <ul className="grid grid-cols-2 gap-x-5">
                <li><a href="/jazz-iniciante">Jazz</a></li>
                <li><a href="/corpo-ciente">Corpo-Ciente</a></li>
                <li><a href="/hip-hop-joy-i">Hip Hop</a></li>
                <li><a href="/ballet-mini-joy-i">Ballet</a></li>
                <li><a href="/sapateado-joy-i">Sapateado</a></li>
                <li><a href="/danca-criativa">Dança Criativa</a></li>
                <li><a href="/contemporaneo">Contemporâneo</a></li>
                <li><a href="/k-pop">K-Pop</a></li>
                <li><a href="/danca-mae-e-filha">Dança Mãe e Filha</a></li>
                <li><a href="/passinho">Passinho</a></li>
            </ul> */}

        </div>
    </section>
}