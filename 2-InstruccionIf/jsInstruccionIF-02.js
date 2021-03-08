function mostrar()
{
	//tomo la edad  
	//es igual al codigo del ej. 1 por eso lo copio y pego
	var edad;
	edad= document.getElementById('txtIdEdad').value;
	edad= parseInt(edad);
	console.log("la edad ingresada es: " + edad);

	if(edad>17)
	{
		alert("es mayor de edad");  

	}

	

}//FIN DE LA FUNCIÓN