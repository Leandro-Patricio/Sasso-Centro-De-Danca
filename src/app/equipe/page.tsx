import Image from "next/image";
import SecaoNossaHistoria from "./components/SecaoNossaHistoria/SecaoNossaHistoria";
import SecaoFundadoras from "./components/SecaoFundadoras/SecaoFundadoras";
import SecaoInicialEquipe from "./components/SecaoInicialEquipe";
import SecaoDemaisProfissionais from "./components/SecaoDemaisEquipe/SecaoDemaisEquipe";


export default async function Equipe(/* { children }: Readonly<{ children: React.ReactNode }> */)
{
    return <main className="w-full h-full pt-32 relative   z-10">
        {/* overflow-x-hidden */}
        <SecaoInicialEquipe />


        {/* wave divisória */}
        <Image src={'/images/waves/waveFixa.svg'} width={1000} height={1000} alt="Wave divisória"
            className="w-screen h-auto -translate-y-10 -z-10"
        />
        <SecaoNossaHistoria />

        <Image src={'/images/circulos/CirculoVermelhoAmarelo.svg'} width={300} height={300} alt="bola divisória"
            className="absolute  -right-32 -translate-y-10 -z-10"
        />

        {/* fundadoras */}

        <SecaoFundadoras />


        <SecaoDemaisProfissionais />

    </main>
}