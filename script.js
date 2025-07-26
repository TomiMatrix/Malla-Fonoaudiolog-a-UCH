// Definimos la malla (puedes agregar más)
const malla = [
  {
    semestre: 1,
    ramos: [
      "Anatomía Humana",
      "Introducción a la Fonoaudiología",
      "Psicología del Desarrollo",
    ],
  },
  {
    semestre: 2,
    ramos: [
      "Fisiología",
      "Lingüística General",
      "Neuroanatomía Funcional",
    ],
  },
  {
    semestre: 3,
    ramos: [
      "Fonética y Fonología",
      "Audiología I",
      "Desarrollo del Lenguaje",
    ],
  },
];

// Pintamos en pantalla
const container = document.getElementById("malla-container");

malla.forEach((sem) => {
  const semDiv = document.createElement("div");
  semDiv.className = "semestre";
  semDiv.innerHTML = `<h3>Semestre ${sem.semestre}</h3>`;

  sem.ramos.forEach((ramo) => {
    const ramoDiv = document.createElement("div");
    ramoDiv.className = "ramo";
    ramoDiv.textContent = ramo;
    semDiv.appendChild(ramoDiv);
  });

  container.appendChild(semDiv);
});

