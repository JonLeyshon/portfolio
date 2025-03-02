import HamburgerNav from "./HamburgerNav";
import Theme from "./Theme";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleEachDropdown = (e) => {
    console.log("toggle each drop down triggered", e.target.id);
    if (e.target.id === "hamburger") {
      setIsDropdownOpen(false); // Close theme dropdown
      setIsMenuOpen((prev) => !prev); // Toggle hamburger menu
      console.log("hamburger toggled");
    } else if (e.target.id === "palette") {
      setIsMenuOpen(false); // Close hamburger menu
      setIsDropdownOpen((prev) => !prev); // Toggle theme dropdown
      console.log("palette toggled");
    }
  };

  return (
    <nav className="bg-secondary sticky top-0 z-20 flex w-full items-center justify-between p-4 md:bg-white md:h-screen md:flex-col md:justify-start md:border-r-2 md:border-primary">
      {/* Profile Image */}
      <div className="flex md:flex-col items-center">
        <a href="#home">
          <img
            src="/img/profile-image.png"
            alt="Profile Picture"
            className="w-10 rounded-full border-2 profile-b-color md:border-4 md:w-28 md:h-28 md:mt-10 lg:w-44 lg:h-44"
          />
        </a>
      </div>

      <div className="flex justify-between items-center w-20 md:w-auto h-full">
        <Theme
          toggleEachDropdown={toggleEachDropdown}
          isDropdownOpen={isDropdownOpen}
        />
        <HamburgerNav
          toggleEachDropdown={toggleEachDropdown}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Nav;
