//Alizon Gamboa
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
	var mensaje;
	
	if(nota>8)
	{
		mensaje=("su nota es " + nota + ": EXCELENTE");

	}
	else
	{
		if(nota>4)
		{
			mensaje=("Su nota es " + nota + ": APROBO");
		}
		else
		{
			mensaje=("Su nota es " + nota + ": VAMOS, LA PROXIMA SE PUEDE");
		}
	}

	alert(mensaje);
	//console.log(numeroRandom);

	/*

	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
		
	if(nota>8)
	{
		alert("su nota es " + nota + ": EXCELENTE");

	}
	else
	{
		if(nota>4 && nota<8)
		{
			alert("Su nota es " + nota + ": APROBO");
		}
		else
		{
			alert("su nota es " + nota + ": VAMOS, LA PROXIMA SE PUEDE");
		}
	}

	
	console.log(numeroRandom);
	*/




}//FIN DE LA FUNCIÓN