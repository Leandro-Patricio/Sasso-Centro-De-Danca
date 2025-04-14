import Footer from "@/app/Components/Footer";
import Image from "next/image";
import StaffRouteValidation from "./StaffRouteValidation";
import { profissionaisStaff } from "./Staff";
import { renderHighlightedText } from "@/app/functions/HighLigthText";

type StaffProps = {
    params: Promise<{ staffUrl: string }>; // Permite qualquer string para `params.staff`
};


export default async function Staff({ params }: Readonly<StaffProps>)
{

    const staff = await StaffRouteValidation(params);

    const staffSpecificInfo = profissionaisStaff[staff.nome as keyof typeof profissionaisStaff];

    return <main className="w-screen pt-32 relative
    flex flex-col gap-2 sm:gap-0 sm:grid sm:grid-cols-2 lg:grid-cols-3    ">

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

            {staffSpecificInfo.texto.map((paragrafo, index) =>
            {
                return <div key={`${staffSpecificInfo.nome}-${index}`}
                    className="text-normal indent-4 pt-5 px-4"
                >
                    {renderHighlightedText(paragrafo)}
                </div>
            })}

        </section>


        <div className="h-full w-full hidden sm:block">
            <Image
                src={staffSpecificInfo.imagem}
                width={500}
                height={500}
                alt={staffSpecificInfo.nome}
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



