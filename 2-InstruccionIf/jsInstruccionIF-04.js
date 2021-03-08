// Alizon Gamboa
function mostrar()
{
	//tomo la edad  
	var edad;
	edad= document.getElementById('txtIdEdad').value;
	edad= parseInt(edad);
	console.log("la edad ingresada es: " + edad);
	
	/*
	if(edad<18)
	{
		if(edad>12)
		{
			alert("es adolescente");  
		}
	}
	*/
	/*if(edad<18) if(edad>12)
	{
			alert("es adolescente");
	}
	*/
	if(edad<18 && edad>12)
	{
			alert("es adolescente");
	}


	
	 

}//FIN DE LA FUNCIÓN