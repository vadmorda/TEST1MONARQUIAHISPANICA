// app.js — Monarquía Hispánica · 2º ESO

const IMG = {
  carlosI: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Emperor%20Charles%20V%20by%20Titian.jpg?width=900",
    credit: "Carlos V por Tiziano · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Emperor_Charles_V_by_Titian.jpg"
  },
  felipeII: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20Philip%20II%20of%20Spain%20by%20Sofonisba%20Anguissola%20-%20002b.jpg?width=900",
    credit: "Felipe II · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Portrait_of_Philip_II_of_Spain_by_Sofonisba_Anguissola_-_002b.jpg"
  },
  comunidades: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ejecuci%C3%B3n%20de%20los%20Comuneros%20de%20Castilla.jpg?width=1000",
    credit: "Ejecución de los comuneros · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Ejecuci%C3%B3n_de_los_Comuneros_de_Castilla.jpg"
  },
  elEscorial: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Monasterio%20de%20El%20Escorial%20-%2001.jpg?width=1100",
    credit: "Monasterio de El Escorial · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Monasterio_de_El_Escorial_-_01.jpg"
  },
  madrid: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Madrid%20from%20the%20west%20-%20Anton%20van%20den%20Wyngaerde.jpg?width=1100",
    credit: "Vista de Madrid en el siglo XVI · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:View_of_Madrid_from_the_west_-_Anton_van_den_Wyngaerde.jpg"
  },
  mapaImperio: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Spanish%20Empire%20Anachronous%200.PNG?width=1200",
    credit: "Imperio español · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Spanish_Empire_Anachronous_0.PNG"
  },
  inquisicion: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Auto-da-fe%20of%20Valladolid%20%28detail%29.jpg?width=1000",
    credit: "Auto de fe · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Auto-da-fe_of_Valladolid_(detail).jpg"
  },
  moriscos: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Expulsion%20moriscos.jpg?width=1000",
    credit: "Expulsión de los moriscos · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Expulsion_moriscos.jpg"
  },
  aragon: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Aragon.svg?width=900",
    credit: "Bandera de Aragón · Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Flag_of_Aragon.svg"
  }
};

const preguntasOriginales = [

  // 👑 CARLOS I
  {
    tipo: "multi",
    img: IMG.carlosI,
    es: "¿Quién era Carlos I?",
    hint: "Piensa en su familia.",
    opciones: [
      "Hijo de Juana de Castilla y Felipe de Habsburgo",
      "Hijo de Isabel la Católica",
      "Un noble francés"
    ],
    correcta: 0,
    explicacion: "Carlos I era hijo de Juana de Castilla y Felipe de Habsburgo."
  },

  {
    tipo: "corta",
    img: IMG.carlosI,
    es: "¿Dónde se había educado Carlos I? (1 palabra)",
    hint: "No fue en España.",
    respuestas: ["flandes"],
    explicacion: "Carlos I se educó en Flandes."
  },

  {
    tipo: "multi",
    img: IMG.carlosI,
    es: "¿Por qué causó rechazo Carlos I al llegar a España?",
    hint: "Piensa en su forma de gobernar.",
    opciones: [
      "Porque subió los impuestos a todos",
      "Porque se rodeó de consejeros extranjeros",
      "Porque no sabía luchar"
    ],
    correcta: 1,
    explicacion: "Colocó consejeros flamencos, lo que generó rechazo."
  },

  {
    tipo: "multi",
    img: IMG.comunidades,
    es: "¿Qué pedían los comuneros?",
    hint: "Tres ideas clave.",
    opciones: [
      "Que el rey viviera en Castilla y gobernara mejor",
      "Que se eliminara la monarquía",
      "Que España conquistara más territorios"
    ],
    correcta: 0,
    explicacion: "Querían que el rey residiera en Castilla, que el dinero castellano atendiera las necesidades del reino y mayor participación en el gobierno."
  },

  {
    tipo: "corta",
    img: IMG.comunidades,
    es: "¿En qué año estalló la revuelta de las Comunidades?",
    hint: "Década de 1520.",
    respuestas: ["1520"],
    explicacion: "La revuelta comenzó en 1520."
  },

  {
    tipo: "multi",
    img: IMG.comunidades,
    es: "¿Quién derrotó a los comuneros?",
    hint: "Aliado del rey.",
    opciones: [
      "La nobleza",
      "Los campesinos",
      "Los turcos"
    ],
    correcta: 0,
    explicacion: "Carlos I venció a los comuneros con ayuda de la alta nobleza."
  },

  {
    tipo: "multi",
    img: IMG.mapaImperio,
    es: "¿Dónde se produjeron las Germanías?",
    hint: "Zona mediterránea.",
    opciones: [
      "Valencia y Mallorca",
      "Castilla",
      "Francia"
    ],
    correcta: 0,
    explicacion: "Las Germanías fueron revueltas populares en Valencia y Mallorca."
  },

  // 👑 FELIPE II
  {
    tipo: "multi",
    img: IMG.felipeII,
    es: "¿Qué hizo Carlos I en 1556?",
    hint: "Decisión importante.",
    opciones: [
      "Abdicó y dividió sus territorios",
      "Conquistó Portugal",
      "Se hizo rey de Francia"
    ],
    correcta: 0,
    explicacion: "Carlos I renunció al trono y repartió sus posesiones entre su hermano Fernando y su hijo Felipe."
  },

  {
    tipo: "corta",
    img: IMG.madrid,
    es: "¿Qué ciudad fue la capital de Felipe II?",
    hint: "Hoy sigue siéndolo.",
    respuestas: ["madrid"],
    explicacion: "Felipe II estableció la corte en Madrid."
  },

  {
    tipo: "multi",
    img: IMG.mapaImperio,
    es: "¿Qué territorios añadió Felipe II en 1580?",
    hint: "Un reino importante.",
    opciones: [
      "Portugal",
      "Francia",
      "Italia"
    ],
    correcta: 0,
    explicacion: "Felipe II anexionó Portugal y sus dominios en África, Asia y América."
  },

  // 🏛️ CENTRALIZACIÓN
  {
    tipo: "multi",
    img: IMG.elEscorial,
    es: "¿Qué significa centralizar el poder?",
    hint: "Quién toma decisiones.",
    opciones: [
      "Que el rey concentra el poder",
      "Que gobiernan los nobles",
      "Que cada territorio decide todo"
    ],
    correcta: 0,
    explicacion: "Centralizar significa concentrar más poder y decisiones en la figura del rey."
  },

  {
    tipo: "multi",
    img: IMG.aragon,
    es: "¿Dónde hubo oposición a la centralización?",
    hint: "Dos territorios.",
    opciones: [
      "Aragón y Portugal",
      "Castilla y Francia",
      "Inglaterra"
    ],
    correcta: 0,
    explicacion: "Hubo oposición especialmente en Aragón y Portugal."
  },

  {
    tipo: "corta",
    img: IMG.aragon,
    es: "¿Cómo se llamaban las leyes propias de Aragón?",
    hint: "Empieza por f.",
    respuestas: ["fueros"],
    explicacion: "Los fueros eran leyes propias de algunos territorios, como Aragón."
  },

  // ⛪ POLÍTICA RELIGIOSA
  {
    tipo: "multi",
    img: IMG.felipeII,
    es: "¿Qué religión defendía Felipe II?",
    hint: "Mayoritaria en España.",
    opciones: [
      "Catolicismo",
      "Islam",
      "Protestantismo"
    ],
    correcta: 0,
    explicacion: "Felipe II fue un firme defensor del catolicismo."
  },

  {
    tipo: "multi",
    img: IMG.inquisicion,
    es: "¿Qué institución reforzó Felipe II?",
    hint: "Control religioso.",
    opciones: [
      "La Inquisición",
      "El Parlamento",
      "El ejército francés"
    ],
    correcta: 0,
    explicacion: "Felipe II reforzó el papel de la Inquisición."
  },

  {
    tipo: "multi",
    img: IMG.inquisicion,
    es: "¿Qué hizo con los libros extranjeros?",
    hint: "Control cultural.",
    opciones: [
      "Los prohibió",
      "Los fomentó",
      "Los tradujo todos"
    ],
    correcta: 0,
    explicacion: "Felipe II prohibió la entrada en España de libros extranjeros."
  },

  {
    tipo: "multi",
    img: IMG.moriscos,
    es: "¿Quiénes eran los moriscos?",
    hint: "Religión anterior.",
    opciones: [
      "Musulmanes convertidos al cristianismo",
      "Cristianos franceses",
      "Judíos portugueses"
    ],
    correcta: 0,
    explicacion: "Los moriscos eran musulmanes convertidos al cristianismo."
  },

  {
    tipo: "corta",
    img: IMG.moriscos,
    es: "¿En qué año se rebelaron los moriscos de Granada?",
    hint: "Década de 1560.",
    respuestas: ["1568"],
    explicacion: "La rebelión de los moriscos de Granada comenzó en 1568."
  },

  {
    tipo: "multi",
    img: IMG.moriscos,
    es: "¿Qué hizo Felipe II con los moriscos tras la rebelión?",
    hint: "Medida dura.",
    opciones: [
      "Los dispersó por Castilla",
      "Les dio más poder",
      "Los convirtió en nobles"
    ],
    correcta: 0,
    explicacion: "Unas cien mil personas moriscas fueron deportadas y dispersadas por Castilla."
  },

  // 🧠 COMPRENSIÓN GLOBAL
  {
    tipo: "multi",
    img: IMG.mapaImperio,
    es: "¿Cuál fue un problema común de ambos reyes?",
    hint: "Conflictos internos.",
    opciones: [
      "Revueltas y oposición",
      "Falta de ejército",
      "No tenían territorios"
    ],
    correcta: 0,
    explicacion: "Ambos reyes tuvieron que hacer frente a revueltas, resistencias y oposición interna."
  },

  {
    tipo: "multi",
    img: IMG.mapaImperio,
    es: "¿Qué caracteriza a la monarquía hispánica?",
    hint: "Un elemento común.",
    opciones: [
      "Un mismo rey para distintos territorios",
      "Un solo territorio",
      "Un sistema democrático"
    ],
    correcta: 0,
    explicacion: "La monarquía hispánica era un conjunto de territorios distintos unidos bajo un mismo rey."
  }

];

// app.js — Monarquía Hispánica · 2º ESO
// Funciona con index.html incluido en este paquete.

document.addEventListener('DOMContentLoaded', () => {
