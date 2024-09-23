import Image from "next/image";
import Link from "next/link";


export default async function MainNavbar()
{
    return <nav className=" flex justify-evenly align-middle items-center p-2">


        <div className="flex justify-start">
            <Image src='/images/logos/LogoOnlyImage.svg' width={50} height={50} alt="Sasso Logo" />
            <span className="flex flex-col align-middle justify-start">
                <span>Sasso</span>
                <span>Centro de dança</span>
            </span>
        </div>

        <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSd8qxb41JXl8is6QnCpltWEcwyGMCo5e4pAlhnnGH_1IC1jtA/viewform?usp=sf_link'}

        >
            Matricule-se
        </Link>


    </nav>
}