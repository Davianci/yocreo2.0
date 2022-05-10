/*archivo que ajusta los textos que se muestran y se ocultan dependiendo la ubicación del scroll. 
tambien ajusta el efecto del movimiento del segundo fondo para aumentar el efecto del paralax*/

var contInfo=[false,false,false,false,false,false,false,false]; //variable para que no se repita la animación de la transición de la info.
var contNave=false;// contador para que no se repita la animación del mensaje de subir.
var contesp=true;
function paralaxScroll(barra, escenario){ // funcion que se encarga del efecto paralax
		var numescenario=9; //cuenta regresiva para ajustar los escenarios con las imagenes que se mueven puesto que inician de la ultima a primera.
		for (var i = 0; i < 9; i++) {

			var esc="#escenario"+(numescenario-1); //ubica el escenario que debe moverse.
			var movimiento= -(escenario[0]-((barra-escenario[i])*4));
			if (barra>escenario[i] && barra <escenario[i+1]) {
				
				$(esc).css({
			'background-position': '0px ' + movimiento + 'px'}); // se anima para que sea más notorio el movimiento.
			};
			--numescenario; // ver en nuevos js

		};	
		//paralax para el primer escenario

		if (barra<escenario[0]) {
		$("#escenario9").css({
			'background-position': '0px ' + -(escenario[0]-(barra*3)) + 'px'}); //el resultado lo pongo en negativo para que inicie con -total altura y termine bien abajo.
		};	
		
	};

	function muestraInfo(barra, escenario, ajuste){ //muestra la información ajustado a la escena
		var tex;
	
		if(barra<=(escenario[0]-ajuste) && contInfo[0]==false){

			tex="#infoescenario1";
			$("#infoescenario1").fadeIn();
			$("#subeNave").fadeIn();
			ocultar(tex);
			contInfo[0]=true;
			contNave=true;
			contesp=false;
		};
		for (var i = 0; i < 8; i++) {
			if(barra>=(escenario[i]-ajuste) && barra<(escenario[i+1]-ajuste) && contInfo[i+1]==false ){

				tex="#infoescenario"+(i+2);
				ocultar(tex);
				$(tex).fadeIn();
				contInfo[i+1]=true;
				if(tex=="#infoescenario9" && contesp== false){
					$("#quienes").fadeIn();
					$("#quienes").css("display","flex");
				};
				if(tex=="#infoescenario8"){
					$("#form").fadeIn();
				};
				if(tex=="#infoescenario7"){
					$("#testimonios").fadeIn();
				};
				if(tex=="#infoescenario6"){
					$("#galeria").fadeIn();
					if (fotosCargadas==false) {
						if (archivo.includes("nuevos.html" )) {
							cargarFotos("nuevos"); // cargas las fotografias del slider de la galeria.
						}else if (archivo.includes("bebes.html" )) {

							cargarFotos("bebes"); // cargas las fotografias del slider de la galeria.
						}
					}

					
					
				};
				if(tex=="#infoescenario5"){
					$("#ctaller").css("display","flex");
				};
			};
		};
		
	};

	function ocultar(tex){//oculta los cuadros de texto para que solo quede uno visible
		var info;
		//if (tex != "#infoescenario1") {$("#subeNave").fadeOut(); contNave=false};// elimina el mensaje para que suban la nave
		if (tex != "#infoescenario9") {
			$("#quienes").fadeOut();
		};
		if (tex != "#infoescenario8") {
			$("#form").fadeOut();
		};

		if (tex != "#infoescenario7") {
			$("#testimonios").fadeOut();
		};
		if (tex != "#infoescenario6") {
			$("#galeria").fadeOut();
		};
		if (tex != "#infoescenario5") {
			$("#ctaller").css("display","none");
		};

		for (var i = 0; i < 9; i++) {
			info ="#infoescenario"+(i+1);
			if (tex != info) {
			$(info).fadeOut();
			contInfo[i]=false;

			};

		};

	};