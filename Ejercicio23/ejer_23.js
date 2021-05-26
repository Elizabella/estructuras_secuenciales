/**
 * ENTRADA:
NRO DE DIAS : ND
COSTO POR DIA: CD
 * SALIDA:
COBRO TOTAL:COT

 */
let ND=0,CD=0, COT=0;
 
ND= +prompt("INGRESE EL NUMERO DE DIAS: " );
CD= +prompt("INGRESE EL COSTO POR DIA: " );

COT=ND*CD;

console.log("EL COBRO TOTAL ES: " + COT);
document.write("EL COBRO TOTAL ES: " + COT);