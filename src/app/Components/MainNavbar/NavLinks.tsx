import Link from "next/link"


type navLinksProps = { goTo: 'matriculese' | 'equipe' | 'home' /*| 'contato' | 'login'  */ }

export const linksNames: Array<'matriculese' | 'equipe' | 'home' /*| 'contato' | 'login' */> = ['home', 'matriculese', 'equipe', /* 'contato', "login" */]

const links = {
    home: { href: './', name: 'Início' },
    matriculese: { href: "https://docs.google.com/forms/d/e/1FAIpQLSd8qxb41JXl8is6QnCpltWEcwyGMCo5e4pAlhnnGH_1IC1jtA/viewform?usp=sf_link", name: 'Matricule-se' },
    equipe: { href: './equipe', name: 'Equipe' },
    /*   contato: { href: './contato', name: 'Contato' },
       login: { href: './login', name: 'Login' } */
}


export async function NavIndividualLinks({ goTo }: Readonly<navLinksProps>)
{
    const { href, name } = links[goTo]

    return <Link href={href} target={`${name === 'Matricule-se' ? "_blank" : "_self"}`} className="relative inline-block transition-all duration-300
    hover:text-yellowMain sm:hover:text-yellowMain after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5
     after:bg-purpleMain sm:after:bg-purpleMain after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
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