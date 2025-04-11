
import Link from "next/link";
import DancasCards from "./DancasCards";

const dancas = [
    { href: "./", nome: "Jazz", imagem: "/images/dancas/jazz.png", descricao: "Jazz como você nunca viu antes. Venha dançar com a gente e ser feliz. Professores consagrados na área." },
    { href: "./", nome: "Corpo-Ciente", imagem: "/images/dancas/corpoCiente.png", descricao: "Corpo e mente em sintonia! Venha descobrir essa dança e encontre seu equilíbrio." },
    { href: "./", nome: "Hip Hop", imagem: "/images/dancas/hipHop.png", descricao: "Entre na batida! O Hip Hop é o ritmo perfeito para se expressar com estilo e força." },
    { href: "./", nome: "Ballet", imagem: "/images/dancas/ballet.png", descricao: "O Ballet é pura elegância e arte! Aprenda os passos que transformam movimento em poesia." },
    { href: "./", nome: "Sapateado", imagem: "/images/dancas/sapateado.png", descricao: "Sapateie ao som da música! Venha sentir o ritmo e deixar sua marca na pista de dança. Solo preparado para o seus pés brilharem!" },
    { href: "./", nome: "Dança Criativa", imagem: "/images/dancas/dancaCriativa.png", descricao: "Libere sua imaginação com a Dança Criativa! Mova-se livremente e crie sua própria arte." },
    { href: "./", nome: "Contemporâneo", imagem: "/images/dancas/contemporaneo.png", descricao: "Explore novos movimentos! A dança contemporânea combina emoção, técnica e liberdade." },
    { href: "./", nome: "K-Pop", imagem: "/images/dancas/kPop.png", descricao: "Sinta a energia do K-Pop! Venha aprender as coreografias mais badaladas da atualidade e se divertir com a gente." },
    { href: "./", nome: "Dança Mãe e Filha", imagem: "/images/dancas/maeFilha.png", descricao: "Conecte-se com sua filha através da dança! Juntas, criem momentos únicos e especiais, com passos especializados para cada uma!" },
    { href: "./", nome: "Passinho", imagem: "/images/dancas/passinho.png", descricao: "O Passinho é puro ritmo! Dance conosco e faça parte dessa cultura cheia de energia. Para crianças a partir de 2 anos." }
];


export default async function Dancas()
{
    return <section className="w-full h-full flex flex-wrap gap-3 p-3 justify-center align-middle items-center bg-bgMain">
        {dancas.map((danca, index) =>
        {
            return <>
                {index < 6 &&
                    <div className={`justify-center items-center align-middle text-center flex
                    ${index < 2 && "sm:flex hidden"}
                    `}>
                        <DancasCards href={danca.href} imagem={danca.imagem} name={danca.nome} descricao={danca.descricao} key={danca.nome} />
                    </div>

                }

            </>

        }
        )}

        <div className="w-screen flex justify-center">
            <Link href='/dancas'
                className=" z-10
                    w-4/5  flex justify-center px-4 py-2 border-2
                    text-center font-detail font-thin
                    active:scale-95
                    border-purpleMain rounded-lg 
                    text-white bg-purpleMain transition-all duration-300 ease-in-out
                    focus:outline-none focus:ring-4 focus:ring-yellowMain focus:ring-opacity-50
                    hover:bg-yellowMain hover:text-purpleMain hover:border-yellowMain
                    
                    "
            >
                Clique para conhecer nossas outras danças
            </Link>
        </div>
    </section>
}
