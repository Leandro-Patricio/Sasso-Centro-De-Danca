import Footer from "@/app/Components/Footer";
import Image from "next/image";
import TextoGrifado from "../components/SecaoNossaHistoria/TextoGrifado";

type StaffProps = {
    params: { staff: string }; // Permite qualquer string para `params.staff`
};

const profissionais = {
    'Leandro-Patricio': {
        nome: "Leandro Fernades Patrício", imagem: "/images/equipe/Leandro Patricio Grande.png",
        texto: [
            `Leandro Fernandes Patrício é um 
            {{highlightedText:desenvolvedor web apaixonado por criar experiências
            digitais envolventes e funcionais}}.
             Com um sólido background
        acadêmico em oceanografia e uma transição bem-sucedida para a programação, Leandro combina
        suas habilidades analíticas com um olhar criativo, resultando em soluções inovadoras
         que atendem às necessidades dos usuários. Sua experiência em tecnologias
          garante que cada projeto não apenas funcione
          perfeitamente, mas também tenha uma interface visual atraente.`
            ,
            `Dedicado à excelência, Leandro possui habilidades e experiências
             que lhe permitem {{highlightedText:criar funcionalidades dinâmicas e interativas que elevam a experiência
          dos usuários}} neste site de dança. Além disso, sua capacidade de gerenciar projetos de
          forma autônoma demonstra seu compromisso em entregar resultados de
           alta qualidade, dentro dos prazos estabelecidos.`
            ,
            `A paixão de Leandro por aprender e se adaptar a novas tecnologias 
        reflete sua versatilidade como desenvolvedor. Ele se destaca em ambientes colaborativos 
        e é sempre receptivo a feedbacks, {{highlightedText:buscando constantemente melhorar suas habilidades e 
        conhecimentos.}} Seu trabalho meticuloso e sua atenção aos detalhes garantem 
        que cada aspecto do site seja cuidadosamente planejado e executado.`
            ,
            `Com um enfoque centrado no usuário, Leandro está entusiasmado em 
        trazer uma visão única para o site de dança, oferecendo não apenas informações valiosas,
         mas também uma plataforma interativa que celebra a arte da dança. Ao escolher Leandro 
         como desenvolvedor, a Cris e a Maria optaram por {{highlightedText:um profissional comprometido em transformar
          ideias em realidade}}, elevando a presença digital deste projeto a novos patamares.`
        ]

    },
};


export default async function Staff({ params }: Readonly<StaffProps>)
{
    const staff = profissionais[params.staff as keyof typeof profissionais]


    return <main className="w-screen pt-32 relative
    flex flex-col gap-2 sm:gap-0 sm:grid sm:grid-cols-2 lg:grid-cols-3

    ">



        <section className="w-full flex flex-col align-middle gap-2 px-2 relative lg:col-span-2">

            <div className="text-3xl font-bold pb-5 text-center">
                {staff.nome}
            </div>

            <div className="h-full w-full  sm:hidden">
                <Image
                    src={staff.imagem}
                    width={500}
                    height={500}
                    alt={staff.nome}
                    className="
                       sticky top-32 right-0  transition-all duration-300 mx-auto
                         aspect-[500/597.677] 
                         grayscale"
                />
            </div>

            {staff.texto.map((paragrafo, index) =>
            {
                return <div key={`paragraph-${index}`}
                    className="text-normal indent-4 pt-5 px-4"
                >
                    {renderHighlightedText(paragrafo)}
                </div>
            })}

        </section>


        <div className="h-full w-full hidden sm:block">
            <Image
                src={staff.imagem}
                width={500}
                height={500}
                alt={staff.nome}
                className="
                       sticky top-32 right-0  transition-all duration-300
                         aspect-[500/597.677] 
                         grayscale"
            />
        </div>

        <div className="sticky top-32 col-span-2 lg:col-span-3">
            <Footer />
        </div>


    </main >
}



function renderHighlightedText(text: string)
{
    // Divide o texto usando o marcador {{highlightedText: ...}}
    const parts = text.split(/{{highlightedText:(.*?)}}/s);

    return parts.map((part: string, index: number) =>
    {
        // Se for uma parte destacada, retorna o componente TextoGrifado
        if (index % 2 === 1)
        {
            return <TextoGrifado key={part} texto={part.trim()} />;
        }
        // Caso contrário, retorna o texto normal
        return part;
    });
}
