import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";


function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />

    <SocialLinks />
   </div>
  );
}

export default App;
