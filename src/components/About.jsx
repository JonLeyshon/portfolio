import { useState } from "react";

const About = () => {
  const [skillsOpen, setSkillsOpen] = useState(null);

  return (
    <div className="" id="about">
      <div className="info p-10 bg-slate-200">
        <div className="subtitleContainer">
          <h2 className="subtitle">About Me</h2>
        </div>
        <div className="bg-slate-200 md:p-16 ">
          <img
            src="/img/profile-image.png"
            alt=""
            className=" w-72 border-4 border-primary rounded-full my-10 mx-auto md:w-60 md:hidden "
          />
          <p className="text-xl text-center p-4">
            I am a
            <span className="text-primary font-bold">
              {" "}
              Full Stack Developer{" "}
            </span>
            who completed the 30-week software engineering Bootcamp at
            <span className="text-primary font-bold"> The Jump </span>
            Digital School. The program gave me solid experience with
            JavaScript, React, Node.js, and both SQL and NoSQL databases. I
            worked on real-world projects that strengthened my skills in both
            front-end and back-end development.
          </p>
          <p className="text-xl p-4 text-center">
            I am passionate about building dynamic, responsive web applications
            with clean and efficient code. I am eager to apply my skills in
            creating impactful, user-friendly solutions as I continue to grow as
            a developer.
          </p>
        </div>
      </div>

      <div className="skills bg-slate-200 p-10">
        <div className="pb-20 md:pb-32">
          <div className="subtitleContainer">
            <h2 className="subtitle">Skills</h2>
          </div>

          {/* Front-End Section */}
          <div className="lg:flex lg:gap-4">
            <div className="w-4/5 border-primary border-4 m-10 text-center rounded-md mx-auto">
              <div className="flex flex-col justify-center items-center p-2">
                <h3
                  className="border-b-4 border-primary w-fit cursor-pointer md:cursor-default"
                  onClick={() => setSkillsOpen(skillsOpen === 1 ? null : 1)}
                >
                  Front-End
                </h3>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    skillsOpen === 1
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  } md:max-h-screen md:opacity-100`}
                >
                  <div className="flex flex-wrap justify-center mt-8 gap-4">
                    {[
                      { img: "html.svg", name: "HTML5" },
                      { img: "css.svg", name: "CSS3" },
                      { img: "js.svg", name: "JavaScript" },
                      { img: "react.svg", name: "React" },
                      { img: "sass.svg", name: "Sass" },
                      { img: "typescript.svg", name: "TypeScript" },
                      { img: "tailwind.svg", name: "Tailwind" },
                      { img: "vite.svg", name: "Vite" },
                      { img: "figma.svg", name: "Figma" },
                      { img: "vscode.svg", name: "VS Code" },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center"
                      >
                        <img
                          src={`img/frontend/${skill.img}`}
                          alt={skill.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                        />
                        <p className="text-center mt-2 text-sm">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Back-End Section */}
            <div className="w-4/5 border-primary border-4 m-10 text-center rounded-md mx-auto">
              <div className="flex flex-col justify-center items-center py-2 px-8">
                <h3
                  className="border-b-4 border-primary w-fit cursor-pointer md:cursor-default"
                  onClick={() => setSkillsOpen(skillsOpen === 2 ? null : 2)}
                >
                  Back-End
                </h3>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    skillsOpen === 2
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  } md:max-h-screen md:opacity-100`}
                >
                  <div className="flex flex-wrap justify-center mt-8 gap-4">
                    {[
                      { img: "sql.svg", name: "SQL" },
                      { img: "mongodb.svg", name: "MongoDB" },
                      { img: "aws.svg", name: "AWS" },
                      { img: "node.svg", name: "Node.js" },
                      { img: "npm.svg", name: "NPM" },
                      { img: "postgres.svg", name: "PostgreSQL" },
                      { img: "graphql.svg", name: "GraphQL" },
                      { img: "firebase.svg", name: "Firebase" },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center"
                      >
                        <img
                          src={`img/backend/${skill.img}`}
                          alt={skill.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                        />
                        <p className="text-center mt-2 text-sm">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
