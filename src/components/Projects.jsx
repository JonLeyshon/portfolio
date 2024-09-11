import ProjectSG from "./ProjectSG";
import ProjectWeather from "./ProjectWeather";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsJMDB from "./ProjectsJDMB";

const Projects = () => {
  return (
    <div className="bg-white p-10 " id="projects">
      <div className="subtitleContainer">
        <h2 className="subtitle">Projects</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center py-12">
        {/* <ProjectsCarousel /> */}
        <ProjectSG />
        <ProjectsJMDB />
        <ProjectWeather />
      </div>
    </div>
  );
};

export default Projects;
