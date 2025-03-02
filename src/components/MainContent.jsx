// import About from "./About";
import Background from "./background/Background";
import Footer from "./Footer";
import LandingPage from "./landing/LandingPage";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";

const Main = () => {
  return (
    <main className="sans md:col-span-4 text-white  overflow-hidden">
      <Background />
      <LandingPage />
      <div
        className="border-t border-gray-400 dark:border-gray-300 w-3/4 mx-auto"
        id="skills"
      />

      <Skills />
      <div className="border-t border-gray-400 dark:border-gray-300 w-3/4 mx-auto" />

      <Projects />
      <div className="border-t border-gray-400 dark:border-gray-300 w-3/4 mx-auto" />

      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
