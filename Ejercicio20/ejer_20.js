/**
 * ENTRADA:
 E1: Examen1
 E2: Examen2
 E3: Examen3
 * SALIDA:
Promedio= P
 */
let E1=0,E2=0,E3=0, P=0;
 
E1= +prompt("Ingrese el primer examen: " );
E2= +prompt("Ingrese el segundo examen: " );
E3= +prompt("Ingrese el tercer examen: " );

P=(E1*0.25+E2*0.25+E3*0.5)/3;

console.log("El promedio es: " + P );
document.write("El promedio es: " + P);