import { Suspense } from "react";
import BotaoNossaHistoria from "./botaoNossaHistoria";
import ComplementoNossaHistoria from "./complementoNossaHistoria";
import Image from "next/image";

export default async function SecaoNossaHistoria(/* { children }: Readonly<{ children: React.ReactNode }> */)
{
    return <section className="flex sm:flex-row flex-col px-10 gap-10 z-10 relative bg-transparent "> {/* Entrada */}
        <div className="flex flex-col w-full sm:w-4/6 gap-3 justify-evenly ">
            <span className="text-3xl font-bold text-center">Nossa história</span>
            <span className="text- font-normal">Na Sasso - Centro de Dança, acreditamos que a arte da dança tem o poder de transformar vidas e inspirar mudanças.
                Com uma trajetória de mais de 5 anos, o centro foi fundado pelas talentosas Cris e Maria Sasso, que têm se dedicado a
                promover a cultura da dança em Niterói e além. Por meio de espetáculos inovadores, formações artísticas e um compromisso com a inclusão social, a Sasso -
                Centro de Dança vem moldando gerações de bailarinos, sempre com o propósito de unir a arte à conscientização social e ambiental.</span>
            <div className="hidden sm:block">
                <Suspense fallback={<div>Loading...</div>}>
                    <ComplementoNossaHistoria />
                </Suspense>
            </div>
        </div>

        {/* logo com botão */}
        <div className="w-full sm:w-2/6">

            <div className="sm:sticky sm:top-32 flex flex-col flex-1 items-center ">
                <Image src='/images/logos/LogoSemFundo.svg'
                    width={150} height={150} alt="Sasso Logo"
                    className="w-[10rem] sm:w-auto h-auto" />
                <span className="flex gap-1 align-middle justify-start items-center">
                    <span className="text-5xl font-bold">SASSO</span>
                    <div className="flex flex-col justify-start align-middle text-sm font-extralight leading-3">
                        <span>Centro</span>
                        <span>de</span>
                        <span>dança</span>
                    </div>
                </span>
                <Suspense fallback={<div>Loading...</div>}>
                    <BotaoNossaHistoria />
                </Suspense>
            </div>
        </div>


        <div className="block sm:hidden">
            <Suspense fallback={<div>Loading...</div>}>
                <ComplementoNossaHistoria />
            </Suspense>
        </div>

    </section>
}