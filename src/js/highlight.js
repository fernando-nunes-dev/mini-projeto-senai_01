const tableBody = document.querySelector("tbody");

const highlightItems = [
  {
    avatar: "../images/pau-brasil.webp",
    user: "ana-silva",
    imageAlt: "pau brasil",
  },
  {
    avatar: "../images/castanheira.webp",
    user: "bruno-oliveira",
    imageAlt: "castanheira",
  },
  {
    avatar: "../images/peroba-rosa.webp",
    user: "carla-souza",
    imageAlt: "peroba rosa",
  },
];

const setTableData = () => {
  tableBody.textContent = "";

  highlightItems.forEach((data) => {
    const row = document.createElement("tr");

    Object.keys(data)
      .filter((itemKey) => itemKey !== "imageAlt")
      .forEach((key) => {
        const td = document.createElement("td");

        if (key === "avatar") {
          const img = document.createElement("img");
          img.src = data.avatar;
          img.alt = data.imageAlt;
          img.classList.add("avatar-image");
          td.classList.add("image-td");

          td.appendChild(img);
        } else {
          td.textContent = data[key];
        }

        row.appendChild(td);
      });

    tableBody.appendChild(row);
  });
};

setTableData();
