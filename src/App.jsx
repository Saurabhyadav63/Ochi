import About from "./components/About";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Eye from "./components/Eye";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-950'>
    <Navbar/>
    <Landing/>
    <Marquee/>
    <About/>
    <Eye/>
    <Featured/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App
