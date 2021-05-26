let Cateto1=0, Cateto2= 0, Hipotenusa=0, n=0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: Cateto 1 y Cateto 2
  *
  * Salida: hipotenusa
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
 Cateto1= +prompt("Ingrese Cateto 1 Adiacente es: " );
 
 Cateto2= +prompt("Ingrese Cateto 2 opuesto es: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 
 n= ( Cateto1* Cateto1)+( Cateto2* Cateto2);
Hipotenusa=Math.sqrt(n);
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("La hipotenusa es:" + Hipotenusa );
 document.write("La hipotenusa es:" + Hipotenusa)