import React from "react";
import { ReactTyped } from "react-typed";

const LandingPage = () => {
  return (
    <div className="p-10">
      <div
        className="text-landingText text-center flex flex-col justify-center h-screen"
        id="home"
      >
        <div>
          <h1 className="text-8xl">
            <ReactTyped
              strings={["Hi, I'm Jon!"]}
              showCursor={false}
              typeSpeed={100}
            />
          </h1>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl mb-4">
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

        <div className="flex justify-center items-center gentleZoom mt-10 w-fit mx-auto">
          <a
            href="https://jonleyshoncodes.co.uk/JonLeyshon_CV_2024.pdf"
            className="navLink"
            target="_blank"
          >
            <p className="inline-block">Resume</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 inline-block ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="#about"
            className="flex flex-col justify-center items-center pt-40"
          >
            <p className="text-2xl gentleZoom">About me...</p>
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
