/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	nombreIngresado=document.getElementById('txtIdNombre').value;
	alert(nombreIngresado);
	*/

	var descripcion;
	var precio;
	var aumento;
	var porcentaje;
	var precioTotal;
	var mensaje;

	porcentaje = 30;

	descripcion = prompt("Ingrese descripcion");
	precio = document.getElementById('txtIdNombre').value;
	precio = parseFloat(precio);

	aumento = precio * porcentaje / 100

	precioTotal = precio + aumento;

	mensaje = "El producto ingresado es: " + descripcion + "\nY el precio con el aumento es: " + precioTotal;

	alert(mensaje);

}


