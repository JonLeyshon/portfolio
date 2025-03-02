import { changeTheme, colorsObject } from "./themeChangeUtils";

const Theme = ({ toggleEachDropdown, isDropdownOpen }) => {
  return (
    <div className="md:fixed md:top-4 right-10 relative">
      <div className="size-10 md:size-12 bg-secondary rounded-full flex justify-center items-center z-30">
        <button>
          <img
            src={isDropdownOpen ? "/img/close.svg" : "/img/pallete.svg"}
            alt="theme"
            className={isDropdownOpen ? "size-10" : "size-8"}
            onClick={(e) => toggleEachDropdown(e)}
            id="palette"
          />
        </button>
      </div>

      {/*Sliding Dropdown Background */}
      <div
        className={`absolute -right-2 w-16 bg-secondary rounded-lg md:rounded-full overflow-hidden transition-all duration-300 ${
          isDropdownOpen
            ? "h-auto max-h-96 md:my-4 py-6 opacity-100"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-2">
          <li
            className="size-10 md:size-12 bg-green-500 rounded-full cursor-pointer"
            onClick={() => {
              toggleEachDropdown({ target: { id: "palette" } });
              changeTheme(
                colorsObject.green.primary,
                colorsObject.green.secondary
              );
            }}
          ></li>
          <li
            className="size-10 md:size-12 bg-orange-500 rounded-full cursor-pointer"
            onClick={() => {
              toggleEachDropdown({ target: { id: "palette" } });
              changeTheme(
                colorsObject.orange.primary,
                colorsObject.orange.secondary
              );
            }}
          ></li>
          <li
            className="size-10 md:size-12 bg-blue-500 rounded-full cursor-pointer"
            onClick={() => {
              toggleEachDropdown({ target: { id: "palette" } });
              changeTheme(
                colorsObject.blue.primary,
                colorsObject.blue.secondary
              );
            }}
          ></li>
          <li
            className="size-10 md:size-12 bg-yellow-500 rounded-full cursor-pointer"
            onClick={() => {
              toggleEachDropdown({ target: { id: "palette" } });
              changeTheme(
                colorsObject.yellow.primary,
                colorsObject.yellow.secondary
              );
            }}
          ></li>
          <li
            className="size-10 md:size-12 bg-purple-500 rounded-full cursor-pointer"
            onClick={() => {
              toggleEachDropdown({ target: { id: "palette" } });
              changeTheme(
                colorsObject.purple.primary,
                colorsObject.purple.secondary
              );
            }}
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default Theme;
