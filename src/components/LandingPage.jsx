import React from "react";

const LandingPage = () => {
  return (
    <div className="p-10">
      <div className="text-white text-center flex flex-col justify-center h-screen">
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
