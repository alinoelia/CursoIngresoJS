/* 
Alizon Gamboa
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*
function mostrar()
{	
	var nombre;
	var edad;


	nombre= document.getElementById('txtIdNombre').value;
	edad= document.getElementById('txtIdEdad').value;

	alert("Usted se llama " +  nombre + " y tiene " +  edad  + " años");



}

/*
bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan
hay que poner el apellido

*/

/* 
Alizon Gamboa
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var apellido;
	

	nombre= document.getElementById('txtIdNombre').value;
	edad= document.getElementById('txtIdEdad').value;

	apellido= prompt("Por favor, ingrese su apellido")

	alert(apellido + ", usted se llama " +  nombre + " y tiene " +  edad  + " años");



}