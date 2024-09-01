import { useState } from "react";

const About = () => {
  const [skillsOpen, setSkillsOpen] = useState(null);

  return (
    <div className="bg-slate-200">
      <div className="subtitleContainer">
        <h2 className="subtitle">About Me</h2>
      </div>
      <div className="bg-slate-200 p-16">
        <img
          src="/img/profile-image.png"
          alt=""
          className="border-4 border-primary rounded-full my-10 mx-auto"
        />
        <p className="text-xl text-center p-4">
          I am a
          <span className="text-primary font-bold"> Full Stack Developer </span>
          who recently completed a 30-week software engineering Bootcamp at
          <span className="text-primary font-bold"> The Jump </span>
          Digital School. The program gave me solid experience with JavaScript,
          React, Node.js, and both SQL and NoSQL databases. I worked on
          real-world projects that strengthened my skills in both front-end and
          back-end development.
        </p>
        <p className="text-xl p-4 text-center">
          I am passionate about building dynamic, responsive web applications
          with clean and efficient code. I am eager to apply my skills in
          creating impactful, user-friendly solutions as I continue to grow as a
          developer.
        </p>
      </div>
      <div className="bg-white py-10">
        <div className="subtitleContainer">
          <h2 className="subtitle">Skills</h2>
        </div>
        <div className="w-4/5 border-primary border-4 m-10 text-center rounded-md mx-auto">
          <div className="flex flex-col justify-center items-center p-2">
            <h3
              className="border-b-4 border-primary w-fit cursor-pointer"
              onClick={() => setSkillsOpen(skillsOpen === 1 ? null : 1)}
            >
              Front-End
            </h3>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                skillsOpen === 1
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-wrap justify-center mt-8 gap-4">
                <img
                  src="img/frontend/html.svg"
                  alt="Html5"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/css.svg"
                  alt="CSS3"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/js.svg"
                  alt="Javascript"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/react.svg"
                  alt="React"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/sass.svg"
                  alt="Sass"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/typescript.svg"
                  alt="Typescript"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/tailwind.svg"
                  alt="Tailwind"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/vite.svg"
                  alt="Vite"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/figma.svg"
                  alt="Figma"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/frontend/vscode.svg"
                  alt="Vs Code"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 border-primary border-4 m-10 text-center rounded-md mx-auto">
          <div className="flex flex-col justify-center items-center py-2 px-8">
            <h3
              className="border-b-4 border-primary w-fit cursor-pointer"
              onClick={() => setSkillsOpen(skillsOpen === 2 ? null : 2)}
            >
              Back-End
            </h3>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                skillsOpen === 2
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-wrap justify-center mt-8 gap-4">
                <img
                  src="img/backend/sql.svg"
                  alt="SQL"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/backend/mongodb.svg"
                  alt="MongoDB"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/backend/aws.svg"
                  alt="AWS"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/backend/node.svg"
                  alt="Node"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/backend/npm.svg"
                  alt="NPM"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/backend/postgres.svg"
                  alt="Postgresql"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/backend/graphql.svg"
                  alt="GraphQL"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <img
                  src="img/backend/firebase.svg"
                  alt="Firebase"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
