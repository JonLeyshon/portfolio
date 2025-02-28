import ProjectSG from "./ProjectSG";
import ProjectWeather from "./ProjectWeather";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsJMDB from "./ProjectsJDMB";

const Projects = () => {
  return (
    <div className="bg-white p-10 text-mainText" id="projects">
      <div className="subtitleContainer">
        <h2 className="subtitle">Projects</h2>
      </div>
      <div>
        <ProjectsCarousel />
      </div>
    </div>
  );
};

export default Projects;
