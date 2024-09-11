const Footer = () => {
  return (
    <div className="flex justify-evenly items-center px-4 py-4 bg-white">
      <div>
        <div>&copy; Jon Leyshon 2024</div>
      </div>
      <div className="flex pl-2">
        <a
          href="https://www.linkedin.com/in/jon-leyshon-338534a9/"
          target="_blank"
          className="pr-3 gentleZoom"
        >
          <img
            src="/img/linkedin.svg"
            alt="Jon Leyshon's LinkedIn"
            className="w-10"
          />
        </a>
        <a
          href="https://github.com/JonLeyshon"
          target="_blank"
          className="gentleZoom"
        >
          <img
            src="/img/github.svg"
            alt="Jon Leyshon's github"
            className="w-10"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
