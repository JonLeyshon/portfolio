import { motion } from "framer-motion";
import ProjectSG from "./ProjectSG";
import ProjectWR from "./ProjectWR";
import ProjectWeather from "./ProjectWeather";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsJMDB from "./ProjectsJDMB";
import ProjectsSolarSystem from "./ProjectsSolarSystem";

const Projects = () => {
  return (
    <div className=" p-10 text-mainText" id="projects">
      <div className="subtitleContainer">
        <h2 className="subtitle">Projects</h2>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="flex flex-wrap justify-center items-center py-10 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers only when 20% of the grid is in view
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          key="project1"
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 50 }} // Start offscreen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate only when in view
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Runs only once when 20% of the element is visible
        >
          <ProjectSG />
        </motion.div>

        <motion.div
          key="project2"
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 50 }} // Start offscreen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate only when in view
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Runs only once when 20% of the element is visible
        >
          <ProjectsJMDB />
        </motion.div>

        <motion.div
          key="project3"
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 50 }} // Start offscreen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate only when in view
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Runs only once when 20% of the element is visible
        >
          <ProjectsSolarSystem />
        </motion.div>

        <motion.div
          key="project4"
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 50 }} // Start offscreen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate only when in view
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Runs only once when 20% of the element is visible
        >
          <ProjectWR />
        </motion.div>

        <motion.div
          key="project5"
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 50 }} // Start offscreen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate only when in view
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Runs only once when 20% of the element is visible
        >
          <ProjectWeather />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
