const ProjectSG = () => {
  return (
    <div className="p-6 flex justify-center">
      <div className="relative group w-72 h-96 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        {/* Project Image */}
        <img
          src="/img/saltgames-demo.png"
          alt="Salt Games"
          className="w-full h-full object-cover"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-4 space-y-4">
          {/* Project Title */}
          <h3 className="text-white text-xl font-bold">Salt Games</h3>

          {/* Project Description */}
          <p className="text-white text-sm text-center">
            Choose your speech sound and play a selection of 3 games in this
            full-stack project.
          </p>

          {/* Tech Stack */}
          <div className="text-white text-sm flex flex-wrap justify-center space-x-3 mt-2">
            <span className="bg-gray-800 py-1 px-2 rounded-md">React</span>
            <span className="bg-gray-800 py-1 px-2 rounded-md">Redux</span>
            <span className="bg-gray-800 py-1 px-2 rounded-md">Node</span>
            <span className="bg-gray-800 py-1 px-2 rounded-md">Express</span>
            <span className="bg-gray-800 py-1 px-2 rounded-md">MySQL</span>
          </div>

          {/* Links to GitHub and Live Demo */}
          <div className="flex space-x-6 mt-4">
            {/* GitHub Link */}
            <a
              href="https://github.com/JonLeyshon/SALTGames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white transform transition-transform hover:scale-110"
            >
              <svg
                viewBox="0 -0.5 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z"
                ></path>
              </svg>
              <span className="mt-1">GitHub</span>
            </a>

            {/* Live Demo Link */}
            <a
              href="https://projects.saltgames.jonleyshoncodes.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white transform transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <span className="mt-1">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSG;
