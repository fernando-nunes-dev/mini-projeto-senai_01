const getBackGroundClass = (inputValue) => {
  switch (inputValue) {
    case "pau-brasil":
      return "pau-brasil";
    case "castanheira":
      return "castanheira";
    case "peroba-rosa":
      return "peroba-rosa";

    default:
      return undefined;
  }
};

const clearBackgroundClasses = () => {
  const containerElement = document.getElementById("app-container");

  if (containerElement) {
    containerElement.classList.remove("unselected-theme");
    containerElement.classList.remove("pau-brasil");
    containerElement.classList.remove("castanheira");
    containerElement.classList.remove("peroba-rosa");
  }
};

const changeBackGroundColor = (inputValue) => {
  const containerElement = document.getElementById("app-container");
  const className = getBackGroundClass(inputValue);

  if (containerElement && className) {
    clearBackgroundClasses();
    containerElement.classList.add(className);
  }
};

const setBackgroundColor = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    changeBackGroundColor(theme);
  }
};

setBackgroundColor();
