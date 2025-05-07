const button = document.querySelector("button");
const inputs = document.querySelectorAll('input[name="theme"]');
let theme;

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

const getData = () => {
  const userInputElement = document.getElementById("username");
  const passwordInputElement = document.getElementById("password");
  const confirmPasswordInputElement =
    document.getElementById("confirm-password");

  return {
    user: userInputElement?.value,
    password: passwordInputElement?.value,
    confirmPassword: confirmPasswordInputElement?.value,
    theme,
  };
};

const clearAllErrors = () => {
  const fields = [
    "username-input",
    "password-input",
    "confirm-password-input",
    "theme-input",
  ];

  fields.forEach((field) => {
    const elementContainer = document.querySelector(
      `#${field} .input-error-container`
    );

    if (elementContainer) {
      elementContainer.textContent = "";
    }
  });
};

const setErrorText = (inputContainerId, message) => {
  const elementContainer = document.querySelector(
    `#${inputContainerId} .input-error-container`
  );

  if (elementContainer) {
    const newElement = document.createElement("p");
    newElement.textContent = message;
    elementContainer.appendChild(newElement);
  }
};

const setError = (input, message) => {
  if (input === "username") {
    setErrorText("username-input", message);
  } else if (input === "password") {
    setErrorText("password-input", message);
  } else if (input === "confirmPassword") {
    setErrorText("confirm-password-input", message);
  } else if (input === "theme") {
    setErrorText("theme-input", message);
  }
};

const validateData = (data) => {
  clearAllErrors();
  let errors = 0;

  if (!data.user) {
    setError("username", "Usuário é obrigatório.");
    errors += 1;
  }

  if (!data.password) {
    setError("password", "Senha é obrigatório.");
    errors += 1;
  }

  if (!data.confirmPassword) {
    setError("confirmPassword", "Confirmar senha é obrigatório.");
    errors += 1;
  } else if (data.password !== data.confirmPassword) {
    setError(
      "confirmPassword",
      "Valor informado é diferente da senha informada."
    );
    errors += 1;
  }

  if (!data.theme) {
    setError("theme", "Tema é obrigatório.");
  }

  if (errors === 0) {
    localStorage.setItem("theme", data.theme);
  }
};

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    const themeInputValue = e.target.value;
    changeBackGroundColor(themeInputValue);

    theme = themeInputValue;
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  validateData(getData());
});
