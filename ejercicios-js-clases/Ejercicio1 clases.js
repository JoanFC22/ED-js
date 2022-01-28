class Aeropuerto{
	constructor(nombre, ciudad, listadoVuelosDiarios){
		this.nombre = nombre;
		this.ciudad = ciudad;
		this.listadoVuelosDiarios = listadoVuelosDiarios;
	}
	getNombre(){
		return this.nombre;
	}
	setnombre(nombre){
		this.nombre=nombre;
	}
	getCiudad(){
		return this.ciudad;
	}
	setCiudad(ciudad){
		this.ciudad=ciudad;
	}
	comprobarVuelos(){
		for (let i = 0; i < this.listadoVuelosDiarios.length; i++) {            
            	this.listadoVuelosDiarios[i].consultarHora();
            
        }  
	}
}

class Vuelo{
	constructor(codigo, horaLlegada, horaSalida){
		this.codigo = codigo;
		this.horaLlegada = horaLlegada;
		this.horaSalida = horaSalida;
	}
	getHoraLlegada(){
		return this.horaLlegada;
	}
	setHoraLlegada(horaLlegada) {
        this.horaLlegada =horaLlegada;
    }
    getHoraSalida(){
    	return this.horaSalida;
    }
    setHoraSalida(nuevaHoraSalida) {
        this.HoraSalida =HoraSalida;
    }
    consultarHora() {
    	if(this.horaSalida > this.horaLlegada)
        console.log("El vuelo " + this.codigo + " ha llegado a las " + this.horaLlegada + " y ha salido a las "+ this.horaSalida + " y son horas invalidas.");
    } 
    mostrarHora(){
    	console.log( console.log("El vuelo " + this.codigo + " ha llegado a las " + this.horaLlegada + " y ha salido a las "+ this.horaSalida));
    }   
}

function main(){
let vuelos = new Array();
vuelos[0] = new Vuelo('12342','15','7');
vuelos[1] = new Vuelo('31254','20','15');
vuelos[2] = new Vuelo('56421','9','16');
vuelos[3] = new Vuelo('15465','3','8');

let aeropuerto = new Aeropuerto("Barajas","Madrid", vuelos);
aeropuerto.comprobarVuelos();
console.log('------------------');

console.log('------------------');
vuelos[3].mostrarHora();
vuelos[3].setHoraLlegada(21);
vuelos[3].mostrarHora();
}
main();


