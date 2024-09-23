import Footer from "./Components/Footer";
import MainNavbar from "./Components/Navbar"
import VideosAndSliders from "./Components/VideosAndSliders";



export default async function LandingPage()
{
  return (<>
    <MainNavbar />
    <VideosAndSliders />

    <Footer />
  </>
  );
}
