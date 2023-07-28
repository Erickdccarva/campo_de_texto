 function boldText(event) {
  event.preventDefault();
  var texto = document.getElementById("caixaEnvio").value;
  if (document.getElementById("caixaEnvio").style.fontWeight == "bold") {
    document.getElementById("caixaEnvio").style.fontWeight = "normal";
  } else {
    document.getElementById("caixaEnvio").style.fontWeight = "bold";
  }
}

document.getElementById("aplicar").addEventListener("click", boldText);


function italicText(event) {
  event.preventDefault();
  var texto = document.getElementById("caixaEnvio").value;
  if (document.getElementById("caixaEnvio").style.fontStyle == "italic") {
    document.getElementById("caixaEnvio").style.fontStyle = "normal";
  } else {
    document.getElementById("caixaEnvio").style.fontStyle = "italic";
  }
}

document.getElementById("aplicar").addEventListener("click", italicText);





function aplicarLista(event) {
  event.preventDefault();
  var texto = document.getElementById("caixaEnvio").value;
  var lista = [];
  for (var i = 1; i <= 5; i++) {
    lista.push(i + "\n");
  }
  document.getElementById("caixaEnvio").value = lista;
}

document.getElementById("aplicar").addEventListener("click", aplicarLista);





const now = new Date();
console.log (now.getFullYear(), now.getMonth() + 1, now.getDate());

const formatador = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

console.log(formatador.format(now));

document.getElementById("dataHora").innerHTML = formatador.format(now)





function liText() {
  var text = document.getElementById("caixaEnvio").value;
  document.getElementById("caixaEnvio").innerHTML = "º" + text;
}

function liOlText() {
 document.getElementById("caixaEnvio").innerHTML = "1º" + text + "<br>" + "2º"  + "<br>" + "3º" + "<br>" + "4º";

}
//funciona, mas não do jeito que eu queria, pois só cria a lista em 1 único número.
function showFilename(input) {
  var filename = input.value;
  caixaEnvio.innerHTML = filename;
}


const msg = document.getElementById("msg");

