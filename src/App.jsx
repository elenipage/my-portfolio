import { useState, useEffect } from 'react'
import './App.css'
import { Nav } from './components/Nav'

function App() {
  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const current = sections.find((section) => {
        const element = document.getElementById(section.id);
        return (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        );
      });
      setActiveSection(current ? current.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <>
    <Nav activeSection={activeSection} setActiveSection={setActiveSection} sections={sections}/>
    <section id="about" className="min-h-screen bg-gray-100 py-[80px] pl-[550px]">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4">Write about yourself here!</p>
      </section>

      <section id="projects" className="min-h-screen py-[80px] bg-gray-200 pl-[550px]">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4">Showcase your projects here!</p>
      </section>
    </>
  )
}

export default App
