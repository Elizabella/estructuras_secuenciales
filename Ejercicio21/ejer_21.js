/**
 * ENTRADA:
 EDAD: E
 * SALIDA:
MESES : M
SEMANAS: S
DIAS: D
HORAS: H
 */
let E=0,M=0, S=0, D=0, H=0;
 
E= +prompt("¿CUANTO TIEMPO HAS VIVIDO?: " );

M=12*E;
S=4*M;
D=365*E;
H=24*D;

console.log("MESES ES: " + M);
document.write("MESES ES: " + M);
console.log("SEMANAS ES: " + S);
document.write("<br>SEMANAS ES: " + S);
console.log("DIAS ES: " + D);
document.write("<br>DIAS ES: " + D);
console.log("HORAS ES: " + H);
document.write("<br> HORAS ES: " + H);