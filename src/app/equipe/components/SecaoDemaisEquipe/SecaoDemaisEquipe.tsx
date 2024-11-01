
import CardEquipe from "./CardEquipe";

const professores = [
    { href: "./", nome: "Diego da Cruz Carvalho Braga", imagem: "/images/dancas/jazz.png" },
    { href: "./", nome: "Carlos Alberto de Moraes Junior", imagem: "/images/dancas/corpoCiente.png" },
    { href: "./", nome: "Isabela da Silva Bernardo", imagem: "/images/dancas/hipHop.png" },
    { href: "./", nome: "Juliana Feijo de Souza Bastos", imagem: "/images/dancas/ballet.png" },
    { href: "./", nome: "Mylena Athaydes da Silva Dias de Azevedo", imagem: "/images/dancas/sapateado.png" },
    { href: "./", nome: "Tereza C P Santos", imagem: "/images/dancas/dancaCriativa.png" },
];

const naoProfessores = [
    { href: "./equipe/Leandro-Patricio", nome: "Leandro Fernandes Patrício", imagem: "/images/equipe/Leandro Patricio.png" },
];



export default async function SecaoDemaisEquipe()
{
    return <section className="w-full flex flex-col pt-20 gap-10 px-2 sm:px-10">


        <div className="text-3xl font-bold text-center ">
            Professoras(es)
        </div>

        <div className="w-full flex flex-wrap 
    gap-3 p-3 justify-center align-middle items-center bg-bgMain">

            {professores.map((professor) =>
            {
                return <div className="flex"
                    key={professor.nome}>
                    <CardEquipe
                        href={professor.href}
                        imagem={professor.imagem}
                        name={professor.nome}
                    />
                </div>
            }
            )}
        </div>

        {/* seção não-professores */}
        <div className="text-3xl font-bold text-center ">
            Por detrás das câmeras
        </div>

        <div className="w-full flex flex-wrap 
    gap-3 p-3 justify-center align-middle items-center bg-bgMain">

            {naoProfessores.map((naoProfessor) =>
            {
                return <div className="flex"
                    key={naoProfessor.nome}>
                    <CardEquipe
                        href={naoProfessor.href}
                        imagem={naoProfessor.imagem}
                        name={naoProfessor.nome}
                    />
                </div>
            }
            )}
        </div>

    </section>
}