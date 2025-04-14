import RedesSociais from "./RedesSociais";
import NewsletterFormForHome from "./NewsletterFormForHome";
import CirclesForHome from "./CirclesForHome";

export default async function SaibaMaisNasRedesSociais()
{

    return <section className="relative  w-screen">

        <CirclesForHome />

        <div className="z-10 flex flex-col text-center justify-center items-center 
    relative  gap-10  px-2">


            <h2 className="h1-title">Quer saber <br />quando e onde <br />será a nossa próxima <br />apresentação?</h2>
            <div className="text-xl font-semibold">Fique ligada nas nossas redes sociais!</div>

            <RedesSociais />

            <div className="text-xl font-semibold">Receba as nossas novidades! Adicine seu e-mail abaixo
                e as receba em primeira mão!</div>
            <NewsletterFormForHome />
        </div>
    </section>
}