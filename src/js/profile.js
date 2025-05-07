const button = document.querySelector("button");
const forestQuantityElement = document.querySelector("#forest-quantity-input");
const userNameInputElement = document.querySelector("#username");
const forestQuantity = 15;
const userName = "Usuário Test";

const getData = () => {
  const bioInputElement = document.getElementById("bio");

  return {
    userBio: bioInputElement?.value,
  };
};

forestQuantityElement.textContent = forestQuantity;
userNameInputElement.value = userName;

button.addEventListener("click", (e) => {
  e.preventDefault();

  alert(getData().userBio);
});
