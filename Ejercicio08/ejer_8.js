let Distancia= 0, Velocidad=0, Tiempo=0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: Distancia y velocidad
  * Salida: tiempo
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
 Distancia= +prompt("Ingrese el valor de distancia es: " );
 
 Velocidad= +prompt("Ingrese el valor de velocidad es: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 
 Tiempo= Distancia/Velocidad;

 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("tiempo es:" + Tiempo );
 document.write("tiempo es:" + Tiempo)