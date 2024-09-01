import About from "./About";
import Background from "./Background";
import LandingPage from "./LandingPage";
import Projects from "./Projects";

const Main = () => {
  return (
    <main className="sans">
      <Background />
      <LandingPage />
      <About />
      <Projects />
    </main>
  );
};

export default Main;
