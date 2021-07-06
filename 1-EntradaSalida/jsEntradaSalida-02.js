/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado =prompt("Ingrese su nombre");

	alert("Su nombre es: " + nombreIngresado);

	//console.log("Su nombre es: " + nombreIngresado);   tambien sirve para mostrar datos pero al programador y no al usuario
	//document.write("Su nombre es: " + nombreIngresado);   sirve para mostrar los datos pero en la pagia, te hace un cambio en toda la pagina
	
	
}

