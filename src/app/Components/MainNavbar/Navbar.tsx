import Image from "next/image";
import { LargeNav } from "./LargeNav";
import { linksNames, NavIndividualLinks } from "./NavLinks";
import { SmallNav } from "./SmallNav";
import Link from "next/link";


export default async function MainNavbar()
{
    return <header
        className="fixed w-full z-20 top-0 flex justify-evenly align-middle items-center p-5 
     bg-black  shadow-md shadow-purpleMain/20 h-24
     "
    >



        <Link href={'/'} className="flex justify-start">
            <Image src='/images/logos/LogoSemFundo.svg' width={40} height={40} alt="Sasso Logo" />
            <span className="flex gap-1 align-middle justify-start items-center">
                <span className="text-5xl font-bold">SASSO</span>
                <div className="flex flex-col justify-start align-middle text-sm font-extralight leading-3">
                    <span>Centro</span>
                    <span>de</span>
                    <span>dança</span>

                </div>
            </span>
        </Link>

        <div className="sm:hidden">
            <SmallNav>
                <nav className="flex flex-col gap-4 flex-1 justify-evenly translate-y-20">
                    {linksNames.map(link => 
                    {
                        return <NavIndividualLinks goTo={link} key='link' />
                    })}
                </nav>
            </SmallNav>

        </div>

        <div className="hidden sm:flex">
            <LargeNav />

        </div>


        {/*         <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSd8qxb41JXl8is6QnCpltWEcwyGMCo5e4pAlhnnGH_1IC1jtA/viewform?usp=sf_link'}

        >
            Matricule-se
        </Link>
 */}

    </header>
}