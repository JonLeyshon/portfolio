import { useEffect, useState } from "react";
import { changeTheme, colorsObject } from "./themeChangeUtils";

const Theme = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  //open menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className=" ">
      <div className="fixed top-4 right-14 size-10 md:size-12 bg-secondary rounded-full flex justify-center items-center z-30">
        <button onClick={toggleMenu}>
          <img
            src={isOpen ? "/img/close.svg" : "/img/pallete.svg"}
            alt="theme"
            className="size-6 md:size-8"
          />
        </button>
      </div>
      <ul className={`fixed top-20 right-14 z-20 ${isOpen ? "" : "hidden"}`}>
        <li
          className="size-10 md:size-12 mb-2 bg-green-500 rounded-full cursor-pointer"
          onClick={() => {
            toggleMenu();
            changeTheme(
              colorsObject.green.primary,
              colorsObject.green.secondary
            );
          }}
        ></li>
        <li
          className="size-10 md:size-12 mb-2 bg-orange-500 rounded-full cursor-pointer"
          onClick={() => {
            toggleMenu();
            changeTheme(
              colorsObject.orange.primary,
              colorsObject.orange.secondary
            );
          }}
        ></li>
        <li
          className="size-10 md:size-12 mb-2 bg-blue-500 rounded-full cursor-pointer"
          onClick={() => {
            toggleMenu();
            changeTheme(colorsObject.blue.primary, colorsObject.blue.secondary);
          }}
        ></li>

        <li
          className="size-10 md:size-12 mb-2 bg-yellow-500 rounded-full cursor-pointer"
          onClick={() => {
            toggleMenu();
            changeTheme(
              colorsObject.yellow.primary,
              colorsObject.yellow.secondary
            );
          }}
        ></li>
        <li
          className="size-10 md:size-12 mb-2 bg-purple-500 rounded-full cursor-pointer"
          onClick={() => {
            toggleMenu();
            changeTheme(
              colorsObject.purple.primary,
              colorsObject.purple.secondary
            );
          }}
        ></li>
      </ul>
    </div>
  );
};

export default Theme;
