
import dynamic from "next/dynamic";
import Image from "next/image";

const MapaLocalizacaoSasso = dynamic(() => import("./MapaLocalizacaoSasso"), { ssr: false, });


export default async function Footer()
{
    return <footer className="flex flex-col gap-10 justify-center items-center align-middle w-full">

        <div id="logo" className="flex flex-col gap-2 items-center justify-center">
            <Image src='/images/logos/LogoSemFundo.svg' alt="Logo Sasso" width={200} height={200} className="w-40 h-40" />
            <span className="text-3xl font-bold">Sasso Centro de Dança</span>
        </div>

        <nav id="midia" className="flex gap-10 items-center justify-center">
            <a href="http://www.facebook.com/sassodanca/" target="_blank">
                <Image src='/images/logos/facebook.svg' alt="Facebook Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500 " />
            </a>
            <a href="https://www.instagram.com/sassodanca/" target="_blank">
                <Image src='/images/logos/instagram.svg' alt="Instagram Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
            </a>
            <a href="https://www.tiktok.com/@sassodanca" target="_blank">
                <Image src='/images/logos/tikTok.svg' alt="Tik Tok Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
            </a>
            <a href="https://wa.me/552127146848" target="_blank">
                <Image src='/images/logos/whatsapp.svg' alt="Whats App Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
            </a>
            <a href="mailto:contao@sassodanca.com" target="_blank">
                <Image src='/images/logos/email.svg' alt="E-mail Sasso Centro de Dança" width={200} height={200} className="w-6 h-6 hover:scale-150 transform-[scale] duration-500" />
            </a>
        </nav>



        <div className="flex gap-5 justify-around items-start align-middle w-full">

            <nav id="header" className="flex flex-col gap-2">
                <ul id="">
                    <li>Matricule-se</li>
                </ul>
            </nav>

            <nav id="contatos" className="flex flex-col gap-2">
                <span className="text-center">Entre em contato</span>
                <ul className="flex flex-col gap-2">
                    <li className="">
                        <a href="https://wa.me/552127146848" target="_blank" className="flex gap-2 items-center align-middle ">
                            <Image src='/images/logos/whatsapp.svg' alt="Whats App Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
                            <span>(21) 2714-6848</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.google.com.br/maps/dir//Sasso+-+Centro+de+Dan%C3%A7a+-+R.+Lopes+Trov%C3%A3o,+52+-+606+-+Icara%C3%AD,+Niter%C3%B3i+-+RJ,+24220-070/@-22.906499,-43.1138952,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x99837256d25043:0xa7f7020a45da806a!2m2!1d-43.1113203!2d-22.906504!3e0?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank" className="flex gap-2 items-center align-middle ">
                            <Image src='/images/logos/location.svg' alt="Localização Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
                            <span>Rua Lopes Trovão, 52 - sala 606, Niterói, Rio de Janeiro, Brazil 24220071</span>
                        </a>
                    </li>
                </ul>
                <MapaLocalizacaoSasso />

            </nav>

            <div id="parceiros"> parceiros</div>



        </div>


    </footer >
} 