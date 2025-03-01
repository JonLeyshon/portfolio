//regex to ensure validhex
const isValidHex = (hex) => /^#([0-9A-Fa-f]{3}){1,2}$/.test(hex);
export const changeTheme = (hex1, hex2) => {
  if (isValidHex(hex1) && isValidHex(hex2)) {
    const root = document.documentElement;

    //set css variables
    root.style.setProperty("--color-primary", hex1);
    root.style.setProperty("--color-secondary", hex2);
  } else {
    console.error("invalid hex color(s), please check and provide hex values");
  }
};

export const colorsObject = {
  orange: {
    primary: "#FF8C00",
    secondary: "#FFA733",
  },
  blue: {
    primary: "#007BFF",
    secondary: "#339DFF",
  },
  green: {
    primary: "#28A745",
    secondary: "#4FC86E",
  },
  yellow: {
    primary: "#FFC107",
    secondary: "#FFD54F",
  },
  purple: {
    primary: "#6F42C1",
    secondary: "#8A5CD1",
  },
};
