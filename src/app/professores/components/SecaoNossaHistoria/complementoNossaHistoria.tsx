'use client'

import { useSearchParams, } from "next/navigation";
import { useMemo } from "react";
import TextoGrifado from "./TextoGrifado";

export default function ComplementoNossaHistoria()
{

    const searchParams = useSearchParams();
    const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
    const nossaHistoriaParams = params.get('nossaHistoria')

    const nossaHistoriaAberta = nossaHistoriaParams ?? false




    return <div className={`${!nossaHistoriaAberta ? 'h-0 p-0' :
        'h-[92rem] xs:h-[62rem] sm:h-[75rem] md:h-[55rem] lg:h-[45rem] xl:h-[35rem] p-5 '} 
    flex flex-col justify-evenly items-start
    bg-purpleMain/20
    rounded-lg overflow-hidden
    transition-all duration-1000  flex flex-col 
     gap-4 items-end justify-start text-start child:indent-4`}>

        <div className="text-2xl font-bold text-center w-full">A história da Sasso - Centro de Dança</div>
        <span>
            Sua trajetória começa com a paixão inabalável da Cristiana Sasso pela dança, uma paixão que
            floresceu desde a sua infância. Essa paixão expandiu ainda mais quando Maria, sua filha, veio ao mundo.
            Desde os primeiros passos da Maria, Cris foi sua primeira professora, transmitindo não apenas técnicas de dança, mas também
            <TextoGrifado
                texto={"valores fundamentais, como a disciplina e a empatia."} />
            A conexão entre mãe e filha é visível não apenas em suas performances, mas também na visão compartilhada de usar
            a dança como uma forma de expressão e transformação social.    </span>
        <span>
            Com o tempo, a Sasso se tornou uma referência na cena artística de Niterói, promovendo espetáculos que abordam temas urgentes, como a preservação ambiental
            e a diversidade cultural. O centro não é apenas um espaço de formação de bailarinos;
            <TextoGrifado
                texto={" é um verdadeiro laboratório de ideias onde arte e consciência social se entrelaçam."} />
            Projetos como “Lâmina” (2023) exemplificam o compromisso do Sasso em usar a dança como ferramenta de transformação, sensibilizando o público sobre
            questões ambientais e promovendo debates sobre o consumo consciente e a preservação da fauna brasileira.    </span>
        <span>
            Além de seu impacto artístico, a Sasso se destaca por sua atuação social. Com iniciativas voltadas para a inclusão de jovens de baixa renda e a criação de
            oportunidades profissionais, o centro tem apadrinhado grupos como a Ekeep Movin e, mais recentemente, formou sua própria companhia profissional de dança.
            Essa dedicação à inclusão e à diversidade faz parte do DNA do Sasso, que busca não apenas excelência, mas também

            <TextoGrifado
                texto={"formar cidadãos conscientes e engajados na construção de um mundo mais justo e sustentável."} />

        </span>
    </div>



}