import Image from "next/image";
import SecaoInicialProfessores from "./components/SecaoInicialProfessores";
import SecaoNossaHistoria from "./components/SecaoNossaHistoria/SecaoNossaHistoria";
import SecaoFundadoras from "./components/SecaoFundadoras/SecaoFundadoras";


export default async function Professores(/* { children }: Readonly<{ children: React.ReactNode }> */)
{
    return <main className="w-full h-full pt-32 relative overflow-x-hidden  z-10">

        <SecaoInicialProfessores />


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


    </main>
}