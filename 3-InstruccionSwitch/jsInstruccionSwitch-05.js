
//Alizon Gamboa
function mostrar()
{
	//tomo la hora
	var horaDelDia =document.getElementById('txtIdHora').value;

	//alert(horaDelDia);

	switch(horaDelDia)
	{
		case "7" :
		case "8" :
		case "9" :
		case "10" :
		case "11" :
			alert("Es de mañana");
			break;
		default :
			break;
	}
	
	

}//FIN DE LA FUNCIÓN