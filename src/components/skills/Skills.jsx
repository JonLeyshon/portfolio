import { skillsObject } from "./skillsPathObject";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="mt-10">
      <div className="subtitleContainer">
        <h2 className="subtitle">Skills</h2>
      </div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 py-20 lg:px-36 gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers only when 20% of the grid is in view
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {skillsObject.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center"
              initial={{ opacity: 0, x: 50 }} // Start offscreen to the right
              whileInView={{ opacity: 1, x: 0 }} // Animate only when in view
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }} // Runs only once when 20% of the element is visible
            >
              <img
                src={`/skills/${item.img}`}
                alt={item.name}
                className="size-14"
              />
              <p className="text-white">{item.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
