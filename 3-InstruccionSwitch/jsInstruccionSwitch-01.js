function mostrar()
{
	//tomo el mes
	var mesDelAño =document.getElementById('txtIdMes').value;
	switch(mesDelAño)
	{
		case "Enero":
			alert("Que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("A clases!!!.");
			break;	
		case "Julio":
			alert("Se vienen las vacaciones!!.");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!.");
			break;
		default : // en este ejercicio no sirve de nada pero sirve para el resto de los meses que no estan en los case
			break;		
	}



	//alert(mesDelAño);

/*
	if(mesDelAño=="Enero")
	{
		alert("que comiences bien el año!!!.");
	}
	else
	{
		if(mesDelAño=="Marzo")
		{
			alert("a clases!!!.");
		}else
		{
			if(mesDelAño=="julio")
			{
			alert("se vienen las vacaciones!!.");
			}else
			{
				if(mesDelAño=="Diciembre")
				{
				alert("Felices Fiestas!!.");
				}
			}
		}
	}

*/



}//FIN DE LA FUNCIÓN