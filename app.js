const preguntas = [
  {
    tipo: "multi",
    pregunta: "¿Quién fue Carlos I?",
    opciones: [
      "Hijo de Juana de Castilla y Felipe de Habsburgo",
      "Hijo de Felipe II",
      "Rey de Francia"
    ],
    correcta: 0,
    exp: "Carlos I era hijo de Juana de Castilla y Felipe de Habsburgo."
  },
  {
    tipo: "corta",
    pregunta: "¿Dónde se educó Carlos I?",
    respuestas: ["flandes"],
    exp: "Carlos I se educó en Flandes."
  },
  {
    tipo: "multi",
    pregunta: "¿Qué revuelta estalló en Castilla en 1520?",
    opciones: ["Las Comunidades", "Las Germanías", "La rebelión morisca"],
    correcta: 0,
    exp: "La revuelta de las Comunidades estalló en Castilla en 1520."
  },
  {
    tipo: "multi",
    pregunta: "¿Dónde estallaron las Germanías?",
    opciones: ["Valencia y Mallorca", "Aragón y Portugal", "Castilla y Flandes"],
    correcta: 0,
    exp: "Las Germanías fueron revueltas populares en Valencia y Mallorca."
  },
  {
    tipo: "vf",
    pregunta: "Carlos I cambió su forma de gobernar tras las revueltas.",
    correcta: true,
    exp: "Aunque las revueltas fracasaron, Carlos I modificó su forma de gobernar."
  },
  {
    tipo: "multi",
    pregunta: "¿Qué hizo Carlos I en 1556?",
    opciones: [
      "Renunció al trono y dividió sus posesiones",
      "Conquistó Inglaterra",
      "Fundó Madrid"
    ],
    correcta: 0,
    exp: "Carlos I abdicó y repartió sus posesiones entre su hermano Fernando y su hijo Felipe."
  },
  {
    tipo: "corta",
    pregunta: "¿Qué ciudad convirtió Felipe II en sede de la corte?",
    respuestas: ["madrid"],
    exp: "Felipe II estableció la corte en Madrid."
  },
  {
    tipo: "multi",
    pregunta: "¿Qué reino incorporó Felipe II en 1580?",
    opciones: ["Portugal", "Francia", "Inglaterra"],
    correcta: 0,
    exp: "Felipe II incorporó Portugal y sus dominios en África, Asia y América."
  },
  {
    tipo: "multi",
    pregunta: "¿Qué significa centralizar el poder?",
    opciones: [
      "Concentrar más decisiones en el rey",
      "Repartir el poder entre todos los territorios",
      "Eliminar la monarquía"
    ],
    correcta: 0,
    exp: "Centralizar significa concentrar el poder en una autoridad principal: el rey."
  },
  {
    tipo: "corta",
    pregunta: "¿Cómo se llamaban las leyes propias de Aragón?",
    respuestas: ["fueros"],
    exp: "Los fueros eran leyes propias de algunos territorios, como Aragón."
  },
  {
    tipo: "multi",
    pregunta: "¿Qué caso provocó una revuelta en Aragón en 1591?",
    opciones: ["El caso de Antonio Pérez", "La Armada Invencible", "La batalla de Lepanto"],
    correcta: 0,
    exp: "El caso de Antonio Pérez provocó disturbios en Aragón."
  },
  {
    tipo: "vf",
    pregunta: "Felipe II defendió la libertad religiosa.",
    correcta: false,
    exp: "Felipe II defendió el catolicismo y no concedió libertad religiosa."
  },
  {
    tipo: "multi",
    pregunta: "¿Qué institución reforzó Felipe II?",
    opciones: ["La Inquisición", "Las Cortes inglesas", "El Parlamento francés"],
    correcta: 0,
    exp: "Felipe II reforzó la Inquisición para controlar la ortodoxia religiosa."
  },
  {
    tipo: "multi",
    pregunta: "¿Qué población se rebeló en Granada en 1568?",
    opciones: ["Los moriscos", "Los comuneros", "Los hugonotes"],
    correcta: 0,
    exp: "La población morisca del reino de Granada se rebeló en 1568."
  },
  {
    tipo: "corta",
    pregunta: "¿En qué año se rebelaron los moriscos de Granada?",
    respuestas: ["1568"],
    exp: "La rebelión morisca de Granada comenzó en 1568."
  }
];

let indice = 0;
let respuestasUsuario = new Array(preguntas.length).fill(null);
let fallos = [];

const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const btnRetry = document.getElementById("retry");
const btnChallenge = document.getElementById("challenge");

function normalizar(texto) {
  return texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function render() {
  const q = preguntas[indice];
  result.classList.add("hidden");

  let html = `
    <p class="progress">Pregunta ${indice + 1} de ${preguntas.length}</p>
    <h2>${q.pregunta}</h2>
  `;

  if (q.tipo === "multi") {
    q.opciones.forEach((op, i) => {
      const selected = respuestasUsuario[indice] === i ? "selected" : "";
      html += `<div class="option ${selected}" onclick="guardarRespuesta(${i})">${op}</div>`;
    });
  }

  if (q.tipo === "vf") {
    html += `
      <div class="option ${respuestasUsuario[indice] === true ? "selected" : ""}" onclick="guardarRespuesta(true)">Verdadero</div>
      <div class="option ${respuestasUsuario[indice] === false ? "selected" : ""}" onclick="guardarRespuesta(false)">Falso</div>
    `;
  }

  if (q.tipo === "corta") {
    const valor = respuestasUsuario[indice] || "";
    html += `
      <input id="respuesta-corta" type="text" value="${valor}" placeholder="Escribe una respuesta breve">
    `;
  }

  quiz.innerHTML = html;

  btnPrev.disabled = indice === 0;
  btnNext.textContent = indice === preguntas.length - 1 ? "Terminar" : "Siguiente ▶";
}

function guardarRespuesta(valor) {
  respuestasUsuario[indice] = valor;
  render();
}

function guardarRespuestaCortaSiExiste() {
  const input = document.getElementById("respuesta-corta");
  if (input) {
    respuestasUsuario[indice] = input.value;
  }
}

function siguiente() {
  guardarRespuestaCortaSiExiste();

  if (
    respuestasUsuario[indice] === null ||
    respuestasUsuario[indice] === undefined ||
    respuestasUsuario[indice] === ""
  ) {
    alert("Responde antes de continuar 🙂");
    return;
  }

  if (indice === preguntas.length - 1) {
    mostrarResultados();
  } else {
    indice++;
    render();
  }
}

function anterior() {
  guardarRespuestaCortaSiExiste();

  if (indice > 0) {
    indice--;
    render();
  }
}

function esCorrecta(q, respuesta) {
  if (q.tipo === "multi") {
    return respuesta === q.correcta;
  }

  if (q.tipo === "vf") {
    return respuesta === q.correcta;
  }

  if (q.tipo === "corta") {
    return q.respuestas.map(normalizar).includes(normalizar(respuesta));
  }

  return false;
}

function mostrarResultados() {
  guardarRespuestaCortaSiExiste();

  let aciertos = 0;
  fallos = [];

  preguntas.forEach((q, i) => {
    if (esCorrecta(q, respuestasUsuario[i])) {
      aciertos++;
    } else {
      fallos.push(q);
    }
  });

  quiz.innerHTML = "";
  result.classList.remove("hidden");

  result.innerHTML = `
    <h2>Resultado: ${aciertos}/${preguntas.length}</h2>
    <p>Revisa los fallos para aprender de verdad.</p>

    ${
      fallos.length === 0
        ? "<p>🎉 ¡Perfecto! No has tenido fallos.</p>"
        : fallos.map(f => `
          <div class="fallo">
            <strong>${f.pregunta}</strong>
            <p>${f.exp}</p>
          </div>
        `).join("")
    }
  `;
}

btnNext.addEventListener("click", siguiente);
btnPrev.addEventListener("click", anterior);

btnRetry.addEventListener("click", () => {
  if (fallos.length === 0) {
    alert("Primero termina el test o no hay fallos que repasar.");
    return;
  }

  preguntas.splice(0, preguntas.length, ...fallos);
  indice = 0;
  respuestasUsuario = new Array(preguntas.length).fill(null);
  fallos = [];
  render();
});

btnChallenge.addEventListener("click", () => {
  const copia = [...preguntas].sort(() => Math.random() - 0.5).slice(0, 5);
  preguntas.splice(0, preguntas.length, ...copia);
  indice = 0;
  respuestasUsuario = new Array(preguntas.length).fill(null);
  fallos = [];
  render();
});

render();
