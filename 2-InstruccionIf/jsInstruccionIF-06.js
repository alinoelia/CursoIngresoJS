// Alizon Gamboa
function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad= document.getElementById('txtIdEdad').value;
	edad= parseInt(edad);
	console.log("la edad ingresada es: " + edad);
/*
	if(edad>17 || edad<13)
	{
		alert("no es adolescente");

	}
	else
	{
		alert("si es adolescente");

	}
*/

	//if(edad<18 && edad>12)

	if(edad<13)
	{
		alert("es niño");
	}
	else
	{ 
		if(edad>17)
		{
			alert("es mayor");
		}
		else
		{
			alert("es adolescente");
		}
	}


			

}//FIN DE LA FUNCIÓN