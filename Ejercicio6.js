

let N1 =parseInt(prompt("Introduce el primer número: "));
let operacion = prompt("Introduce la operación a realizar: ");
let N2 =parseInt(prompt("Introduce el primer número: "));

switch(operacion){
	case "+":
		console.log(N1 +" + "+ N2 +" = " + (N1 + N2));
		break;

		case "-":
		console.log(N1 +" - "+ N2 +" = " + (N1 - N2));
		break;

		case "*":
		console.log(N1 +" * "+ N2 +" = " + (N1 * N2));
		break;

		case "/":
		console.log(N1 +" / "+ N2 +" = " + (N1 / N2));
		break;
}
