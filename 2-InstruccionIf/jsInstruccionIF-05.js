function mostrar()
{
	//tomo la edad 
	var edad;
	edad= document.getElementById('txtIdEdad').value;
	edad= parseInt(edad);
	console.log("la edad ingresada es: " + edad);
	
	/* 
	if(!(edad<18 && edad>12)) // esto tambie se puede hacercon else
	{
		alert("No es adolescente");
	}
	*/

	/*
	if(edad>17) // esto tambie se puede hacercon else
	{
		alert("No es adolescente");
	}

	if(edad<13) // esto tambie se puede hacercon else
	{
		alert("No es adolescente");
	}
	*/

	if(edad>17 || edad<13) // si ponemos && nunca entra en el codigo 
	{
		alert("No es adolscente");
	}

	if(!(edad<18 && edad>12))
	if(edad>=18 || edad<=12)
	{
		
	}


}//FIN DE LA FUNCIÓN