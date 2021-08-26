/*********
 * Funciones
 */
/*var sumar = function (a, b , c=3){
    return a + b + c;
}

var result = sumar(4, 5, 8);
var restul1 = sumar(3, 7);
console.log(result);
console.log(restul1);
*/

/***********
 * Funciones Recursivas
 */


/*var factorial = function(n){
    if((n == 0) || (n == 1))
        return 1;
    else    
        return(n * factorial(n - 1));
}

console.log(factorial(4));
*/

/**************
 * Arreglos
 */

var nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

// console.log(nombres[3]);
// console.log(vegetales[1]);

// nombres[0] = 'José';
// vegetales[2] = 'Nabo';

// console.log(nombres[0]);
// console.log(vegetales[2]);

// console.log(nombres.length);
// for(var i = 0; i <= nombres.length - 1; i++){
//     console.log(nombres[i]);
// }

// vegetales.forEach(function(elemento, indice){
//     console.log(elemento, indice);
// })
var nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

console.log(nombres);
nombres.push('Pedro'); 
console.log(nombres);
nombres.unshift('Lili');
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);

var pos = nombres.indexOf('Carlos');
console.log(pos);

nombres.splice(1, 2);
console.log(nombres);

///////////////////////////////////////////
var nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

vegetales.forEach(function(elemento, indice){
    console.log(elemento, indice)
})

console.log(nombres)
for(var i=0; i <= nombres.length - 1; i++)
console.log(nombres[i]);


function mensaje(){
    console.log("mensaje desde la funcion");
}
mensaje();
////////////////////////
function mensaje(msj){
    console.log(msj);
}
var msj = "mensaje como argumento de la funcion"
mensaje(msj);

/////////////////////
function mensaje(){
    return "mensaje como devulucion de la funcion";
}
var msj = mensaje();
console.log(msj)


function sumar(a, b, c){
    return a + b + c;
}
sumar();
var result = sumar(5, 5, 5);
console.log(result)


var codig = eval("2 > 3 ")
console.log(codig)
console.log(codig)
console.log(typeof codig)

