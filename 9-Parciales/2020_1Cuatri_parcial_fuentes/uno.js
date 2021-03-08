/* Alizon Gamboa
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var contadorDeProductos; //1
	var tipoIngresado; //4
	var precioIngresado; //7
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;

	var acumuladorCantidadJabon;
	var contadorJabon;
	var acumuladorCantidadAlcohol;
	var contadorAlcohol;
	var acumuladorCantidadBarbijo;
	var contadorBarbijo;

	var productoMasUnidades;

	var banderaAlcohol;
	var alcoholMasBarato;
	var cantAlcoholMasBarato;
	var fabricanteDeAlcoholBarato;

	var promedio;
	

	contadorDeProductos = 0 //2
	banderaAlcohol = true;

	while (contadorDeProductos<5) //3
	{
		contadorDeProductos = contadorDeProductos+1;
		tipoIngresado = prompt("Ingrese el tipo de producto validos barbijo, jabon o alcohol"); //5
		while(tipoIngresado!= "barbijo" && tipoIngresado!= "jabon" && tipoIngresado!= "alcohol") //6
		{
			tipoIngresado=prompt("Error! solo barbijo, jabon o alcohol son validos");
		}

		precioIngresado=prompt("Ingrese el precio, los valores admitidos son entre 100 y 300");
		precioIngresado=parseInt(precioIngresado);
		while(precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("Error! ingrese solo valores entre 100 y 300");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese la cantidad del producto");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(cantidadIngresada<0 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("Error! ingrese solo valores entre 0 y 1000");
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		marcaIngresada=prompt("Ingrese la marca del producto");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada=prompt("Error! solo palabras son admitidas");
		}

		fabricanteIngresado=prompt("Ingrese el fabricante del producto");
		while(isNaN(fabricanteIngresado) == false)
		{
			fabricanteIngresado=prompt("Error! solo palabras son admitidas");	
		}

		// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		/* if(tipoIngresado== "alcohol")
		{
			if(banderaAlcohol == true)
			{
				alcoholMasBarato= false;
				alcoholMasBarato = precioIngresado;
				cantAlcoholMasBarato = cantidadIngresada;
				fabricanteDeAlcoholBarato= fabricanteIngresado;
			}
			else
			{
				if(precioIngresado<alcoholMasBarato)
				{
					alcoholMasBarato = precioIngresado;
					cantAlcoholMasBarato = cantidadIngresada;
					fabricanteDeAlcoholBarato= fabricanteIngresado;
				}
			}
		}*/

		//b) Del tipo con mas unidades, el promedio por compra

		switch (tipoIngresado)
		{
			case "jabon" :
				acumuladorCantidadJabon = acumuladorCantidadJabon + cantidadIngresada;
				contadorJabon = contadorJabon + 1;

				break
			case "alcohol":
				acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadIngresada;
				contadorAlcohol = contadorAlcohol + 1;
			if(tipoIngresado== "alcohol")
			{
				if(banderaAlcohol == true)
				{
					alcoholMasBarato= false;
					alcoholMasBarato = precioIngresado;
					cantAlcoholMasBarato = cantidadIngresada;
					fabricanteDeAlcoholBarato= fabricanteIngresado;
				}
				else
				{
					if(precioIngresado<alcoholMasBarato)
					{
						alcoholMasBarato = precioIngresado;
						cantAlcoholMasBarato = cantidadIngresada;
						fabricanteDeAlcoholBarato= fabricanteIngresado;
					}
				}
			}

				break
			case "barbijo":
				acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidadIngresada;
				contadorBarbijo = contadorBarbijo + 1;
				break
		}
	} //fin while < 5

	if(acumuladorCantidadJabon>acumuladorCantidadAlcohol && acumuladorCantidadJabon>acumuladorCantidadBarbijo)
	{
		productoMasUnidades = "Jabon";
		promedio = acumuladorCantidadJabon / contadorJabon;
	}
	else
	{
		if(acumuladorCantidadBarbijo >acumuladorCantidadJabon)
		{
			productoMasUnidades = "Barbijo";
			promedio = acumuladorCantidadBarbijo / contadorBarbijo
		}
		else
		{
			productoMasUnidades = "Alcohol";
			promedio = acumuladorCantidadAlcohol / contadorAlcohol;
		}
	}

	console.log("El promedio de " + productoMasUnidades + " es " + promedio);

	// c) Cuántas unidades de jabones hay en total

	console.log("Hay " + acumuladorCantidadJabon + " jabones");

}

