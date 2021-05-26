/**
 * ENTRADA:
 TIEMPO: T
 COSTO POR MINUTO: CM
 * SALIDA:
COSTO TOTAL : CT

 */
let T=0,CM=0, CT=0;
 
T= +prompt("INGRESE UN VALOR DE TIEMPO: " );
CM= +prompt("INGRESE EL COSTO POR MINUTO: " );

CT=T*CM;

console.log("EL COSTO TOTAL ES: " + CT);
document.write("EL COSTO TOTAL ES: " + CT);
