const tableBody = document.querySelector("tbody");

const dataItems = [
  { user: "ana-silva", treeType: "Ipês" },
  { user: "bruno-oliveira", treeType: "Angicos" },
  { user: "carla-souza", treeType: "Aroeiras" },
  { user: "daniel-costa", treeType: "Jequitibás" },
  { user: "elisa-martins", treeType: "Peroba do campo" },
  { user: "felipe-rocha", treeType: "Ipês" },
  { user: "giovana-barros", treeType: "Angicos" },
  { user: "heitor-ribeiro", treeType: "Aroeiras" },
  { user: "isabela-ferreira", treeType: "Jequitibás" },
  { user: "joao-pereira", treeType: "Peroba do campo" },
  { user: "karla-almeida", treeType: "Ipês" },
  { user: "leo-moraes", treeType: "Angicos" },
  { user: "marina-teixeira", treeType: "Aroeiras" },
  { user: "nicolas-gomes", treeType: "Jequitibás" },
  { user: "olivia-santana", treeType: "Peroba do campo" },
  { user: "pedro-dias", treeType: "Ipês" },
  { user: "quiteria-vasconcelos", treeType: "Angicos" },
  { user: "rafael-nogueira", treeType: "Aroeiras" },
  { user: "sara-lima", treeType: "Jequitibás" },
  { user: "tiago-araujo", treeType: "Peroba do campo" },
];

const setTableData = () => {
  tableBody.textContent = "";

  dataItems.forEach((data) => {
    const row = document.createElement("tr");

    Object.keys(data).forEach((key) => {
      const td = document.createElement("td");

      td.textContent = data[key];

      row.appendChild(td);
    });

    tableBody.appendChild(row);
  });
};

setTableData();
