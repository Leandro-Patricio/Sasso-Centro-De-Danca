import Link from "next/link"


type navLinksProps = { goTo: 'matriculese' /* | 'videos' | 'sobreNos' | 'contato' | 'login'  */ }

export const linksNames: Array<'matriculese'/*  | 'videos' | 'sobreNos' | 'contato' | 'login' */> = ['matriculese',/*  'videos', 'sobreNos', 'contato', "login" */]

const links = {
    matriculese: { href: "https://docs.google.com/forms/d/e/1FAIpQLSd8qxb41JXl8is6QnCpltWEcwyGMCo5e4pAlhnnGH_1IC1jtA/viewform?usp=sf_link", name: 'Matricule-se' },
    /*     videos: { href: './', name: 'Vídeos' },
        sobreNos: { href: './', name: 'Sobre Nós' },
        contato: { href: './contato', name: 'Contato' },
        login: { href: './login', name: 'Login' } */
}


export async function NavIndividualLinks({ goTo }: navLinksProps)
{
    const { href, name } = links[goTo]

    return <Link href={href} target="_blank" className="relative inline-block transition-all duration-300
    hover:text-darkBlue sm:hover:text-mainYellow after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5
     after:bg-darkBlue sm:after:bg-mainYellow after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
        {name}
    </Link>
}

export async function NavLinks()
{
    return <nav className="flex flex-col flex-1 justify-evenly ">
        {linksNames.map(link => 
        {
            return <NavIndividualLinks goTo={link} key='link' />
        })}
    </nav>
}