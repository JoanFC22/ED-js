var Num1 = 0, Num2 = 0, Num3 = 0, suma = 0;

Num1 = parseInt(prompt("Introduce un número:"));
Num2 = parseInt(prompt("Introduce un número:"));
Num3 = parseInt(prompt("Introduce un número:"));

if (Num1 > 10 || Num2 > 10 || Num3 > 10){
    console.log("Existe algún número mayor que 10");
}
else{
    console.log("Ningún número es mayor de 10");
}
suma = Num1 + Num2 + Num3;
console.log("Primer número:" + Num1);
console.log("Segundo número:" + Num2);
console.log("Tercero número:" + Num3);
console.log("Suma de todos los números:" + suma);