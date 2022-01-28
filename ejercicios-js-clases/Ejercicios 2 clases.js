class Hospital{
	constructor(nombre, ciudad, listadoPacientes){
		this.nombre = nombre;
		this.ciudad = ciudad;
		this.listadoPacientes = listadoPacientes;
	}
	getNombre(){
		return this.nombre;
	}
	setNombre(nombre){
		this.nombre=nombre;
	}
	getCiudad(){
		return this.ciudad;
	}
	setCiudad(ciudad){
		this.ciudad = ciudad;
	}
	mostrarListadoPacientes(){
		console.log('Nombre: ' + this.nombre + ' Ciudad: ' + this.ciudad);
		for(let i = 0; i < this.listadoPacientes.length; i++){
			this.listadoPacientes[i].mostrarPaciente();
		}
	}
}

class Paciente{
	constructor(dni, nombre, enfermedad, listadoTratamientos){
		this.dni = dni;
		this.nombre = nombre;
		this.enfermedad = enfermedad;
		this.listadoTratamientos = listadoTratamientos;
	}
	getDni(){
		return this.dni;
	}
	setDni(dni){
		this.dni=dni;
	}
	getNombre(){
		return this.nombre;
	}
	setEnfermedad(enfermedad){
		this.enfermedad = enfermedadd;
	}
	mostrarPaciente(){
		console.log('DNI : ' + this.dni + ' Nombre:' + this.nombre + ' Enfermedad:' + this.enfermedad);
	}
	mostrarListadoTratamientos(){
		console.log('DNI : ' + this.dni + ' Nombre:' + this.nombre + ' Enfermedad:' + this.enfermedad);
		for(let i = 0; i < this.listadoTratamientos.length; i++){
			this.listadoTratamientos[i].mostrarTratamiento();
		}
	}
}

class Tratamiento{
	constructor(nombre, pauta, indicaciones){
		this.nombre = nombre;
		this.pauta = pauta;
		this.indicaciones = indicaciones;
	}
	getNombre(){
		return this.nombre;
	}
	setNombre(nombre){
		this.nombre=nombre;
	}
	getPauta(){
		return this.pauta;
	}
	setPauta(pauta){
		this.pauta = pauta;
	}
	getIndicaciones(){
		return this.indicaciones;
	}
	setIndicaciones(indicaciones){
		this.indicaciones=indicaciones;
	}
	mostrarTratamiento(){
		console.log('Nombre:' + this.nombre + ' Pauta:' + this.pauta + ' Indicaciones:' + this.indicaciones);
	}
}

let listadoPacientes = new Array();
listadoPacientes[0] = new Paciente('15348924G','Jose','Pulmonia');
listadoPacientes[1] = new Paciente('15348924G','Pedro','Desmayo');
listadoPacientes[2] = new Paciente('15318427H','Maria','Constusion');
listadoPacientes[3] = new Paciente('15658456M','Carmen','Esguince');
listadoPacientes[4] = new Paciente('55656123U','Fran','Fiebre');

let listadoTratamientos = new Array();
listadoTratamientos[0] = new Tratamiento('Jose','Intuvación','Controlar respiración');
listadoTratamientos[1] = new Tratamiento('Pedro','Camilla','Controlar pulsaciones');
listadoTratamientos[2] = new Tratamiento('Maria','Inmovilización','Rayos X');
listadoTratamientos[3] = new Tratamiento('Carmen','Inmovilización','Ecografia');
listadoTratamientos[4] = new Tratamiento('Fran','Via intravenosa','Controlar temperatura');


let hospital = new Hospital('Vinalopo','Elche', listadoPacientes);
hospital.mostrarListadoPacientes();



