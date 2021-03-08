/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	
	var nombre;
	var mensajeDeRespuesta;

	nombre= prompt("ingrese nombre");

	mensajeDeRespuesta="su nombre es: "+nombre;

	document.getElementById('txtIdNombre').value=mensajeDeRespuesta; //mostrando
	

	/* var descripcion;
	var precio;
	var aumento;
	var porcentaje;
	var precioTotal;
	var mensaje;

	porcentaje = 30;

	descripcion = prompt("Ingrese descripcion");
	precio = document.getElementById('txtIdNombre').value;
	precio = parseFloat(precio);

	aumento = (precio * porcentaje) / 100

	precioTotal = precio + aumento;

	mensaje = "El producto ingresado es: " + descripcion + "y el precio con el aumento es: " + precioTotal;

	alert(mensaje);
	*/
}
/*
salida
	alert()
	document.getElementById('txtIdNombre').value=mensajeDeRespuesta; muestra el valor

