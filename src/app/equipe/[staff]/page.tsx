import Footer from "@/app/Components/Footer";
import Image from "next/image";

type StaffProps = {
    params: { staff: string }; // Permite qualquer string para `params.staff`
};

{/*   w-[150px] sm:w-[300px] md:w-[500px] h-auto */ }

const profissionais = {
    'Leandro-Patricio': {
        nome: "Leandro Fernades Patrício", imagem: "/images/equipe/Leandro Patricio Grande.png",
        texto: [
            `Leandro Fernandes Patrício é um desenvolvedor web apaixonado 
        por criar experiências digitais envolventes e funcionais. Com um sólido background
        acadêmico em oceanografia e uma transição bem-sucedida para a programação, Leandro combina
        suas habilidades analíticas com um olhar criativo, resultando em soluções inovadoras
         que atendem às necessidades dos usuários. Sua experiência em tecnologias como HTML,
         CSS, JavaScript, React e Next.js garante que cada projeto não apenas funcione
          perfeitamente, mas também tenha uma interface visual atraente.`
            ,
            `Dedicado à excelência, Leandro possui uma forte habilidade
         em análise de dados e uma experiência valiosa em trabalhar com APIs e bancos de dados.
         Isso permite que ele crie funcionalidades dinâmicas e interativas que elevam a experiência
          do usuário em seu site de dança. Além disso, sua capacidade de gerenciar projetos de
          forma autônoma demonstra seu compromisso em entregar resultados de
           alta qualidade, dentro dos prazos estabelecidos.`
            ,
            `A paixão de Leandro por aprender e se adaptar a novas tecnologias 
        reflete sua versatilidade como desenvolvedor. Ele se destaca em ambientes colaborativos 
        e é sempre receptivo a feedbacks, buscando constantemente melhorar suas habilidades e 
        conhecimentos. Seu trabalho meticuloso e sua atenção aos detalhes garantem 
        que cada aspecto do site seja cuidadosamente planejado e executado.`
            ,
            `Com um enfoque centrado no usuário, Leandro está entusiasmado em 
        trazer uma visão única para o site de dança, oferecendo não apenas informações valiosas,
         mas também uma plataforma interativa que celebra a arte da dança. Ao escolher Leandro 
         como desenvolvedor, você está optando por um profissional comprometido em transformar
          ideias em realidade, elevando a presença digital do seu projeto a novos patamares.`
        ]

    },
};


export default async function Staff({ params }: StaffProps)
{
    const staff = profissionais[params.staff as keyof typeof profissionais]


    return <main className="w-screen pt-32 relative
    grid grid-cols-2
    ">


        <section className="gap-5 px-2 relative">

            <div className="text-3xl font-bold pb-5 text-center">
                {staff.nome}
            </div>

            {staff.texto.map((parafrago, index) =>
            {
                return <div key={`paragraph-${index}`}
                    className="text-normal indent-4 pt-5"
                >
                    {parafrago}
                </div>
            })}

        </section>


        <div className="h-full">
            <Image
                src={staff.imagem}
                width={500}
                height={500}
                alt={staff.nome}
                className="
                       sticky top-32  transition-all duration-300
                         aspect-[500/597.677] 
                         grayscale"
            />


        </div>

        <div className="sticky top-32 col-span-2">
            <Footer />
        </div>


    </main >
}

