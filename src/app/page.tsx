import Apresentacao from "./Components/Apresentacao";
import Footer from "./Components/Footer";
import MainNavbar from "./Components/MainNavbar/Navbar"
import OnlyVideo from "./Components/OnlyVideo";


export default async function LandingPage()
{
  return (<main className="flex flex-col gap-5">
    <MainNavbar />
    <OnlyVideo />
    <Apresentacao />
    <section className="bg-imagemParalax parallax grayscale
     bg-right-bottom  bg-no-repeat h-[30rem] w-full flex justify-center items-bottom">
    </section>
    <Footer />
  </main>
  );
}
