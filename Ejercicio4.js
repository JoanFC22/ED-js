var X, Y;

do{
X=prompt("Introduce un número x:");
}while(X < -50 || X > 50);
do{
Y=prompt("Introduce un número Y:");
}while(Y < 1 || Y > 20);

for (var i = 1; i <= Y; i++){
	
	console.log(X + " * " + i + " = " + X * i);
}
