const button = document.querySelector("button");
const userNameInputElement = document.querySelector("#username");
const userName = "Usuário Test";

const getData = () => {
  const treeQuantityInputElement = document.getElementById("tree-quantity");
  const treeTypeInputElement = document.getElementById("tree-type");

  return {
    treeQuantity: treeQuantityInputElement?.value,
    treeType:
      treeTypeInputElement?.value !== "null"
        ? treeTypeInputElement?.value
        : undefined,
  };
};

const clearAllErrors = () => {
  const fields = ["tree-quantity-input", "tree-type-input"];

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
  if (input === "treeQuantity") {
    setErrorText("tree-quantity-input", message);
  }

  if (input === "treeType") {
    setErrorText("tree-type-input", message);
  }
};

const validateData = (data) => {
  clearAllErrors();
  let errors = 0;

  if (!data.treeQuantity) {
    setError("treeQuantity", "Arvores plantadas é obrigatório.");
    errors += 1;
  } else if (
    Number.isNaN(Number(data.treeQuantity)) ||
    !Number.isInteger(Number(data.treeQuantity))
  ) {
    setError("treeQuantity", "Informe um número inteiro válido.");
    errors += 1;
  }

  if (!data.treeType) {
    setError("treeType", "Tipo de arvore é obrigatório.");
    errors += 1;
  }

  if (errors === 0) {
    alert("tudo ok!!");
  }
};

userNameInputElement.value = userName;

button.addEventListener("click", (e) => {
  e.preventDefault();

  validateData(getData());
});
