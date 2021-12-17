var sueldoMes, años, sueldoFinal;

sueldoMes = prompt("Introduce el sueldo mensual:");
años = prompt("Introduce los años de antigüedad:");


if (sueldoMes < 1600) {
	if (años <= 10) {
		sueldoFinal = sueldoMes * 2;
	}else{
		sueldoFinal= sueldoMes * 1.5;
	}
}else{sueldoFinal = sueldoMes}

console.log("Sueldo a aplicar ->" + sueldoFinal)