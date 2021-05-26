let CXK= 0, DR=0, costodeboletoviaje=0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Costo porkilometros: 2 soles
     Distancia recorrida=kilómetros por recorrer= 100 km

  * Salida: Costo de boleto del viaje:  200
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
  CXK= +prompt("Ingrese el costo por kilometro es: " );
 
  DR= +prompt("Ingrese la medida por kilometro es: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 
costodeboletoviaje= DR*CXK;


 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("El costo de boleto del viaje:" +  costodeboletoviaje );
 document.write("El costo de boleto del viaje:" +  costodeboletoviaje)