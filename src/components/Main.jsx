import About from "./About";
import Background from "./Background";
import Footer from "./Footer";
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
      <Footer />
    </main>
  );
};

export default Main;
