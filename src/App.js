import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/skills/skill";
import Works from "./components/Works/works";
import Experience from "./components/Experience/experience";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Intro />
    <Skill />
    <Works />
    <Experience />
    <Education />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
