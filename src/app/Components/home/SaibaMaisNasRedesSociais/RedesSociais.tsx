import Image from "next/image";
import Link from "next/link";

export default async function RedesSociais()
{
    return <nav id="midia" className="flex flex-wrap gap-10 items-center justify-center">

        <Link href="http://www.facebook.com/sassodanca/" target="_blank"
            className="">
            <Image src='/images/logos/facebook.svg' alt="Facebook Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
        </Link>
        <Link href="https://www.instagram.com/sassodanca/" target="_blank">
            <Image src='/images/logos/instagram.svg' alt="Instagram Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
        </Link>
        <Link href="https://www.tiktok.com/@sassodanca" target="_blank">
            <Image src='/images/logos/tikTok.svg' alt="Tik Tok Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
        </Link>
        <Link href="https://www.youtube.com/@sassodanca" target="_blank">
            <Image src='/images/logos/youtube.svg' alt="Youtube Sasso Centro de Dança" width={200} height={200} className="w-6 h-6 hover:scale-150 transform-[scale] duration-500" />
        </Link>
        <Link href="https://open.spotify.com/user/31msqzbspvvdpuqt4igd2waom2bm?si=7a30f85a25ae4ea5&nd=1&dlsi=3d1eb32b3f094488" target="_blank">
            <Image src='/images/logos/spotify.svg' alt="Spotify Sasso Centro de Dança" width={200} height={200} className="w-6 h-6 hover:scale-150 transform-[scale] duration-500" />
        </Link>
        <Link href="https://wa.me/552127146848" target="_blank">
            <Image src='/images/logos/whatsapp.svg' alt="Whats App Sasso Centro de Dança" width={200} height={200} className="w-5 h-5 hover:scale-150 transform-[scale] duration-500" />
        </Link>
        <Link href="mailto:contao@sassodanca.com" target="_blank">
            <Image src='/images/logos/email.svg' alt="E-mail Sasso Centro de Dança" width={200} height={200} className="w-6 h-6 hover:scale-150 transform-[scale] duration-500" />
        </Link>
    </nav>

}