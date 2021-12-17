var x, i;

do{
x=prompt("Introduce un número x:");
}while(x < 1 || x > 10000);

	if (x === 1) {
		console.log( x +" -> No es primo");
	}else{
		i = 2;
	}
	while(x % i !== 0){
		i++;
	}

	if (i == x) {
		console.log("Es primo");
	}else{
		console.log("No es primo");
	}