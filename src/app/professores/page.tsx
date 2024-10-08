import Image from "next/image";
import ComplementoNossaHistoria from "./complementoNossaHistoria";
import BotaoNossaHistoria from "./botaoNossaHistoria";


export default async function Professores(/* { children }: Readonly<{ children: React.ReactNode }> */)
{
    return <main className="w-screen h-full pt-32">

        <section className="flex px-10 gap-10 z-10"> {/* Entrada */}
            <Image src={'/images/professores/equipeToda.png'} width={1000} height={1000} alt="Equipe sasso"
                className="w-4/6 h-auto z-10"
            />

            <div className="flex flex-col w-2/6 justify-evenly ">
                <span className="text-3xl font-bold text-center">DANCE COM O MAIOR TIME DE TALENTOS DE NITERÓI</span>
                <span className="text- font-normal">Conheça agora todo o corpo de primeira do centro de dança Sasso! </span>
            </div>


        </section>

        {/* wave divisória */}
        <Image src={'/images/waves/waveFixa.svg'} width={1000} height={1000} alt="Wave divisória"
            className="w-screen h-auto -translate-y-10 -z-10"
        />

        {/* nossa história */}

        <section className="flex px-10 gap-10 z-10 relative bg-transparent"> {/* Entrada */}
            <div className="flex flex-col w-4/6 gap-3 justify-evenly ">
                <span className="text-3xl font-bold text-center">Nossa história</span>
                <span className="text- font-normal">Na Sasso - Centro de Dança, acreditamos que a arte da dança tem o poder de transformar vidas e inspirar mudanças.
                    Com uma trajetória de mais de 5 anos, o centro foi fundado pelas talentosas Cris e Maria Sasso, que têm se dedicado a
                    promover a cultura da dança em Niterói e além. Por meio de espetáculos inovadores, formações artísticas e um compromisso com a inclusão social, a Sasso -
                    Centro de Dança vem moldando gerações de bailarinos, sempre com o propósito de unir a arte à conscientização social e ambiental.</span>

                <ComplementoNossaHistoria />
            </div>

            {/* logo com botão */}
            <div className="w-2/6">
                <div className="sticky top-32 flex flex-col flex-1 items-center ">
                    <Image src='/images/logos/LogoSemFundo.svg' width={150} height={150} alt="Sasso Logo" />
                    <span className="flex gap-1 align-middle justify-start items-center">
                        <span className="text-5xl font-bold">SASSO</span>
                        <div className="flex flex-col justify-start align-middle text-sm font-extralight leading-3">
                            <span>Centro</span>
                            <span>de</span>
                            <span>dança</span>
                        </div>
                    </span>
                    <BotaoNossaHistoria />
                </div>
            </div>
            {/* bola divisória direita */}

        </section>

        <Image src={'/images/circulos/CirculoVermelhoAmarelo.svg'} width={300} height={300} alt="bola divisória"
            className="absolute  -right-32 -translate-y-10 "
        />

        <section className="text-3xl font-bold text-center">
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