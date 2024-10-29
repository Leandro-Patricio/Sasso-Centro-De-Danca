import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const fundadorasInfo = {
    Cris: {
        nome: "Cristiana Patrício Sasso",
        imgAlt: 'Foto da fundadora Cris Sasso',
        imagem: "/images/professores/Cris Sasso.png",
        paragrafo1: `Cristiana Sasso descobriu sua paixão pela dança na infância, 
        sendo inspirada por artistas e professores ao seu redor. Desde então,
        ela dedicou sua vida a essa arte, tornando-se uma dançarina excepcional
        e uma referência na área. Com uma abordagem carismática e técnica, Cristiana
        sempre buscou se aprimorar, explorando diversos estilos que vão do clássico ao
        contemporâneo.`,
        paragrafo2: ` Como fundadora do Sasso - Centro de Dança, 
        Cristiana se dedica a transmitir seu amor pela dança aos alunos, 
        incentivando a criatividade e a expressão pessoal. Sua visão inovadora e
         comprometimento com a formação de novos talentos transformaram o centro em
          um espaço de aprendizado e crescimento, onde cada aluno é incentivado a 
          desenvolver seu próprio estilo e voz na dança.`

    },

    Maria: {
        nome: "Maria Sasso",
        imgAlt: 'Foto da fundadora Cris Sasso',
        imagem: "/images/professores/Maria Sasso.png",
        paragrafo1: ` Maria Sasso cresceu envolvida na arte da dança,
        guiada desde cedo pela paixão e talento de sua mãe, Cris.
        Desde seus primeiros passos, ela demonstrou dedicação e uma
       conexão especial com a dança, aprimorando- se em diversos estilos e,
       com o tempo, trazendo uma visão contemporânea e inovadora para o Sasso -
       Centro de Dança.`,
        paragrafo2: ` Hoje, Maria atua como coordenadora artística,
       contribuindo com sua sensibilidade e criatividade para cada espetáculo e
       formação. Seu compromisso com a dança vai além do palco, envolvendo-se
       profundamente em projetos de impacto social e ambiental, que são marcas
       registradas do centro.`
    }
}


type FundadoraIndividualProps = {
    crisOuMaria: 'Cris' | 'Maria',
    fundadoraDaVez: 'Cris' | 'Maria' | ""
    setFundadoraDaVez: Dispatch<SetStateAction<"" | "Cris" | "Maria">>
}


export default function FundadoraIndividual({ crisOuMaria, fundadoraDaVez, setFundadoraDaVez }: Readonly<FundadoraIndividualProps>)
{
    const fundadora = fundadorasInfo[crisOuMaria];
    const nomeDaOutraFundadora = crisOuMaria === "Cris" ? "Maria" : "Cris"
    const outraFundaroda = fundadorasInfo[nomeDaOutraFundadora];

    const handleClickNaFundadora = () =>
    {
        if (fundadoraDaVez === nomeDaOutraFundadora)
        {
            setFundadoraDaVez("")
        } else if (fundadoraDaVez !== nomeDaOutraFundadora)
        {
            setFundadoraDaVez(nomeDaOutraFundadora)
        }
    }

    return <div className='relative focus:border-[1px] border-mainYellow
   '>

        <button onClick={handleClickNaFundadora}        >
            <Image src={fundadora.imagem} width={500} height={500}
                alt={fundadora.imgAlt}
                className=" aspect-[354.854/483]"
            />
        </button>


        {fundadoraDaVez === crisOuMaria &&

            <div className="absolute top-0 left-0 w-full h-full z-20
                            bg-black/90
                            flex flex-1 flex-col justify-start align-middle items-start gap-2
                            overflow-y-auto overflow-x-hidden
                             
            ">


                <div className="sticky -top-0 p-2 
                w-full flex align-middle justify-between items-center
                        text-xl font-bold text-center bg-black bg-opacity-95
                         shadow-sm shadow-purpleMain/20">
                    <span className="text-purpleMain">

                        {outraFundaroda.nome}
                    </span>
                    <button className="p-2 
                 hover:scale-110 transition-all duration-300
                hover:text-redMain
                "
                        onClick={() => setFundadoraDaVez("")}
                    >X</button>
                </div>

                <div className="flex flex-1 
        flex-col justify-start align-middle items-start gap-5 p-2" >


                    <div className=" indent-4">{outraFundaroda.paragrafo1}</div>
                    <div className=" indent-4">{outraFundaroda.paragrafo2}</div>
                </div>

                <button className="p-2 w-full
                bg-purpleMain/20
                 hover:scale-110 transition-all duration-1000
                hover:bg-redMain hover:text-white
                "
                    onClick={(event) =>
                    {
                        event.stopPropagation(); // Evita que o evento de clique se propague
                        setFundadoraDaVez(nomeDaOutraFundadora);
                    }}
                >Clique aqui para conhecer a {crisOuMaria}</button>
            </div>}
    </div>
}