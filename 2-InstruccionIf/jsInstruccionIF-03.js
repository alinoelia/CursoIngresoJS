/*
Alizon Gamboa
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/
function mostrar()
{
	//tomo la edad  
	var edad;
	edad= document.getElementById('txtIdEdad').value;
	edad= parseInt(edad);
	console.log("la edad ingresada es: " + edad);

	/*if(edad>17)
	{
		alert("es mayor de edad");  
	}

	if(edad<18)
	{
		alert("es menor de edad");  
	}
	*/

	if(edad>17)
	{
		alert("es mayor de edad");  
	}
	else //hay un solo else para cada if, 
	{
		alert("es menor de edad");  
	}
}//FIN DE LA FUNCIÓN