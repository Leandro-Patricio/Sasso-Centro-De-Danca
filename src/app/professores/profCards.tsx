import Image from "next/image";
import Link from "next/link";

const profs = [
    { nome: "Cristiana Sasso", imagem: "/images/dancas/jazz.png" },
    { nome: "Corpo-Ciente", imagem: "/images/dancas/corpoCiente.png", descricao: "Corpo e mente em sintonia! Venha descobrir essa dança e encontre seu equilíbrio." },
/*     { nome: "Hip Hop", imagem: "/images/dancas/hipHop.png", descricao: "Entre na batida! O Hip Hop é o ritmo perfeito para se expressar com estilo e força." },
    { nome: "Ballet", imagem: "/images/dancas/ballet.png", descricao: "O Ballet é pura elegância e arte! Aprenda os passos que transformam movimento em poesia." },
    { nome: "Sapateado", imagem: "/images/dancas/sapateado.png", descricao: "Sapateie ao som da música! Venha sentir o ritmo e deixar sua marca na pista de dança. Solo preparado para o seus pés brilharem!" },
    { nome: "Dança Criativa", imagem: "/images/dancas/dancaCriativa.png", descricao: "Libere sua imaginação com a Dança Criativa! Mova-se livremente e crie sua própria arte." },
    { nome: "Contemporâneo", imagem: "/images/dancas/contemporaneo.png", descricao: "Explore novos movimentos! A dança contemporânea combina emoção, técnica e liberdade." },
    { nome: "K-Pop", imagem: "/images/dancas/kPop.png", descricao: "Sinta a energia do K-Pop! Venha aprender as coreografias mais badaladas da atualidade e se divertir com a gente." },
    { nome: "Dança Mãe e Filha", imagem: "/images/dancas/maeFilha.png", descricao: "Conecte-se com sua filha através da dança! Juntas, criem momentos únicos e especiais, com passos especializados para cada uma!" },
    { nome: "Passinho", imagem: "/images/dancas/passinho.png", descricao: "O Passinho é puro ritmo! Dance conosco e faça parte dessa cultura cheia de energia. Para crianças a partir de 2 anos." }
 */];


type ProfCardsProps = {
    imagem: string
    name: string
    descricao: string
}

export default async function ProfCards({ imagem, name, descricao }: Readonly<ProfCardsProps>)
{

    return <div className="relative flex flex-col justify-end items-center align-middle w-72 h-72 overflow-hidden group">

        <Image
            src={imagem}
            alt={imagem}
            width={300}
            height={400}
            className="absolute top-0 left-0 w-full h-full  transition-transform duration-500 group-hover:scale-110"
        />
        <Link href={href} id="textoDescricao"
            className="w-full absolute top-0 text-base font-semibold bg-[#1F1F1F] bg-opacity-90 
                transition-all duration-500 delay-[400ms]  p-1
                group-hover:translate-y-0 -translate-y-10"
        >
            Saiba mais
        </Link>

        <div className="bg-[#141414] p-2 w-full text-2xl font-semibold flex flex-col gap-2 transition-transform duration-500 group-hover:translate-y-0 translate-y-16">


            <span className="border-b-[1px] border-purpleMain shadow shadow-purpleMain">
                {name}
            </span>

            <span id="textoDescricao"
                className="text-sm font-normal bg-[#1F1F1F] bg-opacity-50 transition-all duration-500 delay-100 group-hover:translate-y-0 translate-y-16"
            >
                {descricao}
            </span>
        </div>
    </div>

}
