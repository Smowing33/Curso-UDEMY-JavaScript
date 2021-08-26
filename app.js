/* tipos de datos
var nombre = "Nicolas";
console.log(nombre);
console.log(typeof(nombre));

var edad = 34; 
console.log(edad)
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo)
puestoDeTrabajo = null
console.log(puestoDeTrabajo)*/


/* operadores matematicos

var edadRoman, edadPalermo, DiferenciaDeEdad;
var sumaEdades, yearRoman, yearPalermo, yearActual;

edadPalermo = 47;
edadRoman = 43; 
yearActual = 2021;

DiferenciaDeEdad = edadPalermo - edadRoman;
console.log(DiferenciaDeEdad + " años de diferencia" );

yearPalermo = yearActual - edadPalermo;  
yearRoman = yearActual - edadRoman; 
console.log("palermo nacio " + yearPalermo);
console.log("roman nacio " + yearRoman); */

var edadRoman, edadPalermo, DiferenciaDeEdad;
edadPalermo = 47;
edadRoman = 43;

var mayorPalermo = !(edadPalermo > edadRoman);
console.log(mayorPalermo);

edadRoman += edadPalermo;
console.log(edadRoman)



var mes = 7;
switch(mes){
case 1:
console.log("enero");
break;
case 2:
console.log("febrero");
break;
case 3:
console.log("marzo");
break;
case 4:
console.log("abril");
break;
default:
console.log("Mes no encontrado");
}