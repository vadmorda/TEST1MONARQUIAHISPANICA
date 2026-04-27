const preguntas = [

{
tipo:"multi",
pregunta:"¿Qué provocó la revuelta de las Comunidades?",
opciones:[
"El descontento con el gobierno de Carlos I",
"La conquista de América",
"La guerra con Francia"
],
correcta:0,
exp:"Querían más participación y menos influencia extranjera"
},

{
tipo:"corta",
pregunta:"¿En qué año comenzó la revuelta de las Comunidades?",
respuestas:["1520"],
exp:"Año clave"
},

{
tipo:"vf",
pregunta:"Felipe II permitió la libertad religiosa",
correcta:false,
exp:"Fue muy intolerante religiosamente"
},

{
tipo:"multi",
pregunta:"¿Qué territorio incorporó Felipe II en 1580?",
opciones:["Portugal","Francia","Italia"],
correcta:0,
exp:"Portugal y su imperio"
},

{
tipo:"multi",
pregunta:"¿Qué institución reforzó Felipe II?",
opciones:["Inquisición","Parlamento","ONU"],
correcta:0,
exp:"Control religioso"
},

{
tipo:"corta",
pregunta:"¿Cómo se llamaban las leyes propias de Aragón?",
respuestas:["fueros"],
exp:"Clave para entender conflictos"
}

];

let index=0;
let respuestas=[];
let fallos=[];

function render(){
let q=preguntas[index];
let html=`<h2>${q.pregunta}</h2>`;

if(q.tipo==="multi"){
q.opciones.forEach((op,i)=>{
html+=`<div class="option" onclick="responder(${i})">${op}</div>`;
});
}

if(q.tipo==="vf"){
html+=`
<div class="option" onclick="responder(true)">Verdadero</div>
<div class="option" onclick="responder(false)">Falso</div>
`;
}

if(q.tipo==="corta"){
html+=`<input id="txt"><button onclick="responderTexto()">OK</button>`;
}

document.getElementById("quiz").innerHTML=html;
}

function responder(i){
let q=preguntas[index];
let ok=i===q.correcta;
respuestas.push(ok);
if(!ok) fallos.push(q);

siguiente();
}

function responderTexto(){
let val=document.getElementById("txt").value.toLowerCase();
let q=preguntas[index];
let ok=q.respuestas.includes(val);

respuestas.push(ok);
if(!ok) fallos.push(q);

siguiente();
}

function siguiente(){
index++;
if(index>=preguntas.length) mostrarResultados();
else render();
}

function mostrarResultados(){
document.getElementById("quiz").innerHTML="";
document.getElementById("result").classList.remove("hidden");

let aciertos=respuestas.filter(r=>r).length;

document.getElementById("result").innerHTML=`
<h2>Resultado: ${aciertos}/${preguntas.length}</h2>
<p>Aprende de los errores abajo 👇</p>
${fallos.map(f=>`<p><b>${f.pregunta}</b><br>${f.exp}</p>`).join("")}
`;
}

// 🔁 REPASO INTELIGENTE
document.getElementById("retry").onclick=()=>{
preguntas.splice(0,preguntas.length,...fallos);
index=0;
respuestas=[];
fallos=[];
render();
};

// ⚡ RETO RÁPIDO
document.getElementById("challenge").onclick=()=>{
let copia=[...preguntas].sort(()=>0.5-Math.random()).slice(0,5);
preguntas.splice(0,preguntas.length,...copia);
index=0;
respuestas=[];
fallos=[];
render();
};

render();
