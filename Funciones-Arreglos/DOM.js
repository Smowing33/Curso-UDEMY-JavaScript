console.log(document.title);
var h1 = document.getElementsByTagName("h1");
h1[0].innerHTML = "prueba de html, css y javascrip";
console.log(h1);

var boton1 = document.getElementById("boton1")
console.log(boton1);
boton1.addEventListener("click", mensaje);

function mensaje(){
    alert("holaaaaandaaaa")
}