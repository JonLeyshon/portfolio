import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectsJMDB from "./ProjectsJDMB";
import ProjectSG from "./ProjectSG";
import ProjectWeather from "./ProjectWeather";

const ProjectsCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1300, min: 880 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 880, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} className="pt-10 pb-28">
      <ProjectSG />
      <ProjectsJMDB />
      <ProjectWeather />
    </Carousel>
  );
};

export default ProjectsCarousel;
