
import Image from "next/image";
import DancasIndividuaisRouteValidation from "./DancasIndividuaisRouteValdation";
import VerticalSlider from "./Components/VerticalSlider";
import { capitalizarIniciais } from "@/app/functions/CaptalizarIniciais";
import TagsDeDanca from "./Components/TagsDeDança";
import { textosDeDanca } from "./Components/TextosDeDança";
import { renderHighlightedText } from "@/app/functions/HighLigthText";


// Tipo para as props
type DancaProps = {
    params: Promise<{ dancasIndividuais: string }>;
};



export default async function DancaPage({ params }: Readonly<DancaProps>)
{
    // Normalizando o nome do parâmetro (substitui hifens por espaços e mantém consistência)

    const danca = await DancasIndividuaisRouteValidation(params);
    console.log(danca.nome)
    return (
        <main className="min-h-screen w-full flex justify-start px-2 sm:px-5 pb-10 mt-24 gap-2">

            <div className="w-1/3 max-w-[15rem] h-[80vh] overflow-hidden sticky top-24">
                <VerticalSlider danca={danca} />
            </div>


            <div className="flex flex-col w-full text-center justify-center pt-5 gap-2">

                <div>
                    <div className="font-detail text-sm">Dance ao ritmo de</div>
                    <h1 className="h1-title">{capitalizarIniciais(danca.nome)}</h1>
                </div>

                {danca.tags &&
                    <TagsDeDanca tags={danca.tags} />
                }
                <div className="w-full flex justify-center">
                    <Image
                        src={danca.imagem}
                        alt={danca.nome}
                        width={1000}
                        height={1000}
                        className="rounded-lg shadow-xl w-2/3 object-contain "
                    />
                </div>

                {textosDeDanca[danca.nome as keyof typeof textosDeDanca].texto.map((paragrafo, index) =>
                {
                    return <div key={`${danca.nome}-${index}`}
                        className="text-normal indent-4 pt-5 px-4 text-start"
                    >
                        {renderHighlightedText(paragrafo)}
                    </div>
                })}
            </div>


        </main>
    );

}
