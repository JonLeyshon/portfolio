import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  return (
    <div className="bg-white p-10" id="projects">
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
