import Image from "next/image";
import SecaoInicialProfessores from "./components/SecaoInicialProfessores";
import SecaoNossaHistoria from "./components/SecaoNossaHistoria";


export default async function Professores(/* { children }: Readonly<{ children: React.ReactNode }> */)
{
    return <main className="w-screen h-full pt-32 ">

        <SecaoInicialProfessores />


        {/* wave divisória */}
        <Image src={'/images/waves/waveFixa.svg'} width={1000} height={1000} alt="Wave divisória"
            className="w-screen h-auto -translate-y-10 -z-10"
        />
        <SecaoNossaHistoria />

        <Image src={'/images/circulos/CirculoVermelhoAmarelo.svg'} width={300} height={300} alt="bola divisória"
            className="absolute  -right-32 -translate-y-10 "
        />

        {/* fundadoras */}

        <section className="text-3xl font-bold text-center pt-20">
            Fundadoras
            <div className="w-full justify-center flex ">


                <Image src='/images/professores/Cris Sasso.png' width={300} height={300} alt="Sasso Logo"
                    className="relative"
                />
                <Image src='/images/professores/Maria Sasso.png' width={300} height={300} alt="Sasso Logo"
                    className="relative"
                />

            </div>
        </section>


    </main>
}