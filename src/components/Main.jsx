import About from "./About";
import Background from "./Background";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Contact from "./contact";

const Main = () => {
  return (
    <main className="sans md:col-span-4">
      <Background />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
