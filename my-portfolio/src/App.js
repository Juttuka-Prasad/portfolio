import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Sidebar />

      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
