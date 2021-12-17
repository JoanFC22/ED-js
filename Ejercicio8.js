var año;

año=prompt("Introduce un año:");


if (año % 4 === 0 && año % 400 === 0) {
	console.log("Bisiesto");
}else{
	console.log("No es bisiesto");
}
