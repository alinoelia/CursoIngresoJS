//Alizon Gamboa

function mostrar()
{
	//tomo el mes

	//alert(mesDelAño);

	var mesDelAño =document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{	
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio" :
		case "Agosto" :
			alert("Abrigate que hace frio.");
			break;
		default : // en este ejercicio no sirve de nada pero sirve para el resto de los meses que no estan en los case
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;		
	}




}//FIN DE LA FUNCIÓN