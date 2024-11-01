import Apresentacao from "./Components/Apresentacao";
import Dancas from "./Components/Dancas/Dancas";
import Footer from "./Components/Footer";

import OnlyVideo from "./Components/home/OnlyVideo";
import SaibaMaisNasRedesSociais from "./Components/home/SaibaMaisNasRedesSociais";



export default async function LandingPage()
{
  return (<main className="flex flex-col gap-5 relative w-full">

    <OnlyVideo />

    <Apresentacao />
    <Dancas />
    <SaibaMaisNasRedesSociais />
    <section className="bg-imagemParalax parallax grayscale
     bg-right-bottom  bg-no-repeat h-[20rem] sm:h-[30rem] w-full flex justify-center items-bottom ">
    </section>
    <Footer />
  </main>
  );
}
