import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Aboutme from "../pages/Aboutme";

function Home() {

    return (
       <> 
       <Hero/>
       <Aboutme/>
       <Projects/>
       <Contact/>
       <CTA/>
       </>
    );

}

export default Home;