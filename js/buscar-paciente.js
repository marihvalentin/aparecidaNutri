var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function() {
    var resposta = xhr.responseText;
    console.log(typeof resposta);
  });

  xhr.send();
});
