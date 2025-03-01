import React from "react";
import { ReactTyped } from "react-typed";

const LandingPage = () => {
  return (
    <div className="px-10 py-10">
      <div
        className="text-landingText text-center flex flex-col justify-evenly md:justify-center h-screen"
        id="home"
      >
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl h-28">
            <ReactTyped
              strings={["Hi, I'm Jon!"]}
              showCursor={false}
              typeSpeed={100}
            />
          </h1>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl mb-4 ">
            Full-Stack Software Engineer | Liverpool, UK
          </h2>
          <p className="text md:text-lg lg:text-xl mb-4 ">
            Two years of experience building responsive, user-friendly web
            applications that look great on any device.
          </p>
          <h2 className="text-xl p-8">
            Focus on
            <span className="text-2xl font-bold">
              {" "}
              JavaScript, React, MySQL{" "}
            </span>{" "}
            and <span className="text-2xl font-bold">Node</span>.
          </h2>
        </div>

        <div className="flex justify-center items-center mt-10 w-fit mx-auto">
          <a
            href="https://jonleyshoncodes.co.uk/JonLeyshon_CV_2024.pdf"
            className="navLink"
            target="_blank"
          >
            <button className="relative w-52 h-12 mt-8 rounded-xl mx-auto flex items-center justify-center overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:border-white/50 active:scale-95">
              <span className="relative z-10 flex items-center gap-2 text-black font-semibold text-sm tracking-wide">
                Download CV
                <img
                  src="img/download.svg"
                  alt="download"
                  className="w-5 h-5 opacity-80 transition-opacity group-hover:opacity-100"
                />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
              <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-white/10 to-white/0 opacity-30"></span>
            </button>
          </a>
        </div>
        <div>
          <a
            href="#skills"
            className="flex flex-col justify-center items-center pt-10"
          >
            <p className="text-2xl gentleZoom">Skills</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 animate-bounce mt-2 gentleZoom"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
