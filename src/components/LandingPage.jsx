import React from "react";

const LandingPage = () => {
  return (
    <div className="p-10">
      <div
        className="text-white text-center flex flex-col justify-center h-screen"
        id="home"
      >
        <div>
          <h1 className="text-8xl">Hi, I'm Jon.</h1>
          <h2 className="text-xl p-8">
            <span className="text-2xl font-bold">Full stack </span> engineer
            from <span className="text-2xl font-bold"> Liverpool, UK</span>.
            Focus on JavaScript,
            <span className="text-2xl font-bold"> React, MySQL </span> and Node.
          </h2>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/jon-leyshon-338534a9/"
            target="_blank"
          >
            <img
              className="w-20 mr-2 gentleZoom"
              src="/img/linkedin.svg"
              alt="LinkedIn Link"
            />
          </a>
          <a href="https://github.com/JonLeyshon" target="_blank">
            <img
              className="w-20 gentleZoom"
              src="/img/github.svg"
              alt="GitHub Link"
            />
          </a>
        </div>
        <div className="flex justify-center items-center gentleZoom mt-10 w-fit mx-auto">
          <a
            href="https://jonleyshoncodes.co.uk/JonLeyshon_CV_2024.pdf"
            className="navLink"
            target="_blank"
          >
            Resume
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center pt-40">
          <p className="text-2xl">About me...</p>
          <a href="#about">
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
