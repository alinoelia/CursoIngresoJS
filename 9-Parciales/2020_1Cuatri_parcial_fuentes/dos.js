/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
	var continuar;
	var producto;
	var cantidadIngresada;
	var precioIngresado;
	var precioBruto;
	var acumuladorDePrecioBruto:
	var acumuladorCantidadTotal;
	var descuento;	
	var importeTotalDescuento;
	var productoMasCantidad;
	var esElPrimerProducto:


	acumuladorDePrecioBruto = 0;
	acumuladorCantidadTotal = 0;
	esElPrimerProducto = true;
	continuar = "si";

	descuento = 0;

	while(continuar == "si")
	{
		producto = prompt("Ingrese arena; cal; cemento");
		while(producto != "arena" && producto != "cal" && producto != "cemento")
		{
			producto = prompt("Error, ingrese arena;cal;cemento");
		}

		cantidadIngresada = prompt("Ingrese arena; cal; cemento");
		cantidadIngresada = parseInt(cantidadIngresada);
		while(cantidadIngresada != true || cantidadIngresada < 1)
		{
			cantidadIngresada = prompt("Error, ingrese la cantidad del producto");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		precioIngresado = prompt("Ingrese arena; cal; cemento");
		precioIngresado = parseInt(precioIngresado);
		while(precioIngresado != true || precioIngresado < 1)
		{
			precioIngresado = prompt("Error, ingrese el precio del producto");
			precioIngresado = parseInt(precioIngresado);
		}

		switch (producto)
		{
		case "arena" :
			acumuladorCantidadArena = acumuladorCantidadArena + cantidadIngresada;
			break;
		case "cal" :
			acumuladorCantidadCal = acumuladorCantidadCal + cantidadIngresada;
			break;
		case "cemento" :
			acumuladorCantidadCemento = acumuladorCantidadCemento + cantidadIngresada;
			break;
		}

		if (esElPrimerProducto = true || precioIngresado > precioMasCaro)
		{ 
			precioMasCaro = precioIngresado;
			tipoIngresadoMasCaro = tipoIngresado //cambiar producto por tipoIngresado
			esElPrimerProducto = false;
		}
		else
		{
			if(precioMasCaro < precioIngresado)
		}

		precioBruto = cantidadIngresada * precioIngresado;
		acumuladorDePrecioBruto = acumuladorDePrecioBruto + precioBruto;


		continuar = prompt("desea continuar?");

		acumuladorCantidadTotal = acumuladorCantidadTotal + cantidadIngresada;

	}

	//a) El importe total a pagar , bruto sin descuento y...

	console.log("El precio total bruto a pagar es: " + acumuladorDePrecioBruto);

	/*
	Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
	Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
	*/


	if(acumuladorCantidadTotal >10)
	{

		if(acumuladorCantidadTotal > 10 && acumuladorCantidadTotal <30)
		{
			descuento = 15;
		}
		else
		{
			descuento = 25;
		}

	//b) el importe total a pagar con descuento(solo si corresponde)
		importeTotalDescuento = acumuladorDePrecioBruto - ( (acumuladorDePrecioBruto * descuento) / 100);
		console.log("El importe total es " + importeTotalDescuento + " y su descuento es " + descuento); //puedo usar tambien el alert en ves del console.log

	}

	

	if(acumuladorCantidadArena > acumuladorCantidadCal && acumuladorCantidadArena>acumuladorCantidadCemento);
	{
		tipoMasCantidad = "Arena";
	}
	else
	{
		if(acumuladorCantidadCal > acumuladorCantidadCemento)
		{
			tipoMasCantidad = "Cal";
		}
		else
		{
			tipoMasCantidad = "Cemento";
		}
	}
	//d) Informar el tipo con mas cantidad de bolsas.
	console.log("El producto con mas cantidad de bolsas es: " + tipoMasCantidad);
	
	//f) El tipo mas caro
	console.log("El tipo de producto mas caro es " + tipoIngresadoMasCaro);




}


/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let respuesta
  let tipoIngresado; 
  let cantidadIngresada;
  let precioIngresado;
  let precioBruto;
  let acumuladorPrecioBruto;
  let descuento;
  let acumuladorCantidadTotal;
  let tipoMascantidad;
  let acumuladorCantidadArena;
  let acumuladorCantidadCal;
  let acumuladorCantidadCemento;
  let esElPrimerProducto;
  let precioMasCaro;
  let tipoMasCaro;

  acumuladorCantidadTotal = 0;
  descuento = 0;
  acumuladorPrecioBruto = 0;
  respuesta = "si";
  esElPrimerProducto = true;

  while(respuesta == "si")
  {
    tipoIngresado = prompt("Ingrese un tipo de producto");
    while( isNaN(tipoIngresado) == false || ( tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento" )){
      tipoIngresado = prompt("Error, Ingrese un tipo de producto");
    }

    cantidadIngresada = prompt("Ingrese la cantidad de producto");
    cantidadIngresada = parseInt(cantidadIngresada);
    while( isNaN(cantidadIngresada) == true  || cantidadIngresada < 1 ){
      cantidadIngresada = prompt("Error, Ingrese la cantidad de producto");
      cantidadIngresada = parseInt(cantidadIngresada);
    }
    precioIngresado = prompt("Ingrese el precio del producto");
    precioIngresado = parseInt(precioIngresado);
    while( isNaN(precioIngresado) == true  || precioIngresado < 1 ){
      precioIngresado = prompt("Error, Ingrese el precio del producto");
      precioIngresado = parseInt(precioIngresado);
    }

    switch (tipoIngresado) {
      case "arena":
        acumuladorCantidadArena = acumuladorCantidadArena + cantidadIngresada;
      
        break;
      case "cal":
        acumuladorCantidadCal = acumuladorCantidadCal + cantidadIngresada;

        break;
      case "cemento":
        acumuladorCantidadCemento = acumuladorCantidadCemento + cantidadIngresada;
        break;
    }

    
    // if (esElPrimerProducto == true)
    // {
    //   precioMasCaro =  precioIngresado;
    //   tipoMasCaro =  tipoIngresado;
    //   esElPrimerProducto = false;
    // }
    // else
    // {
    //   if (precioMasCaro < precioIngresado)
    //   {
    //     precioMasCaro =  precioIngresado;
    //     tipoMasCaro =  tipoIngresado;
    //   }
    // }

     if (esElPrimerProducto == true || precioIngresado > precioMasCaro)
    {
      precioMasCaro =  precioIngresado;
      tipoMasCaro =  tipoIngresado;
      esElPrimerProducto = false;
    }



    precioBruto = cantidadIngresada * precioIngresado;
    acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto;

    
    acumuladorCantidadTotal = acumuladorCantidadTotal + cantidadIngresada;
    
    respuesta = prompt("Desea continuar? ")
  } //fin while respuesta == "si"
  
  /*
    Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
 */

  //a) El importe total a pagar , bruto sin descuento y...
  console.log("El precio total bruto a pagar es: " +  acumuladorPrecioBruto)
    
  if(acumuladorCantidadTotal > 10)
    {
      if( acumuladorCantidadTotal < 30 )
      {
        descuento = 15;
      }
      else
      {
        descuento = 25;
      }

      importeTotalDescuento = acumuladorPrecioBruto - ( ( acumuladorPrecioBruto * descuento ) / 100 ) ;

      // b) el importe total a pagar con descuento(solo si corresponde)
      console.log( "El importe total es " + importeTotalDescuento + " y su descuento es " +  descuento)
    }
    
 
    if( acumuladorCantidadArena > acumuladorCantidadCal && acumuladorCantidadArena > acumuladorCantidadCemento) 
    {
       tipoMascantidad = "Arena";
    }   
    else{
      if (acumuladorCantidadCal > acumuladorCantidadCemento)
      {
        tipoMascantidad = "Cal"; 
      } else{
        tipoMascantidad = "Cemento"; 
      }
    }
    //d) Informar el tipo con mas cantidad de bolsas.
    console.log( "El tipo con más cantidad de bolsas es: " + tipoMascantidad )
    
    // f) El tipo mas caro
    console.log("El tipo de producto más caro es " + tipoMasCaro)
}
