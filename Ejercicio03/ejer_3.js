let  Actual= 0, Edad= 0, AN=0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: año naciemiento = AN
  * Salida: Edad 
  */
 console.log(typeof c1);
 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
 AN= +prompt("Ingrese el año de nacimiento: ");
 Actual= +prompt("Ingrese el año actual: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
 console.log(typeof c1);
 
 Edad= Actual - AN;
 
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("Tu edad actual es " + Edad +" años");
 document.write( "Tu edad actual es " + Edad +" años")