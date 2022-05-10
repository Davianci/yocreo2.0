var escenario=[]; //arreglo para cargar las posiciones de los escenarios.
var altura="";
var barra;
$(function(){
	var ajuste=0; //ajusta los textos para que cuadren con los escenarios. 
	var cont1=false;
	var pix=$("section").css("height").slice(0,3); //captura el alto de las escenas y dependiendo de ella genera un ajuste
	barra=$(window).scrollTop();
	if (pix==800) {
		ajuste=440;
		
	};
	if (pix==1000) {
		ajuste=600;
		
	};

	
	var hescenario=$("section").height();
	var numescenario=9; //cuenta regresiva para ajustar los escenarios con las imagenes que se mueven puesto que inician de la ultima a primera.
	for (var i = 0; i < 9; i++) {
   	escenario[i]= hescenario*(i+1); // carga las posiciones de los escenarios en el array.
   	var esc="#escenario"+(numescenario); //ubica la posicion del escenario. 
   	$(esc).css({
			'background-position': '0px ' + -escenario[i] + 'px'}); // se anima para que sea más notorio el movimiento.
   	--numescenario;
   };
	
	
if (archivo.includes("nuevos.html" )) {
  	nave(); // carga la nave
  	muestraInfo(barra,escenario, ajuste);// carga la informacion dependiendo el escenario.
  	cargarSlider("#container-testimonios");//slider de lso testimonios
  	cargarSlider("#container-foto"); //slider de las fotos. 
  	}	 
if (archivo.includes("bebes.html" )) {
 
  	muestraInfo(barra,escenario, ajuste);// carga la informacion dependiendo el escenario.
  	cargarSlider("#container-testimonios");//slider de lso testimonios
  	cargarSlider("#container-foto"); //slider de las fotos. 
  	}	
  
  	$("body").height(hescenario*escenario.length);// le coloca la altura al cuerpo de la web basado en las secciones que hay para que avance el scroll. 
  	altura=$("body").height(); // capturamos la altura para posicionar el scroll
	$(document).on('scroll',function(){ 
		barra=$(window).scrollTop(); //capturamos la posición del scroll.
		paralaxScroll(barra,escenario);
		muestraInfo(barra,escenario, ajuste);
		$("#paralax").css('bottom',barra*-1); //invierte el avance del fondo para dar la sensación que se eleva.
		if (archivo.includes("nuevos.html" )) {
			enciendeCohete(".llamaCohetes");
			muestraAlasPotencia(barra,escenario,ajuste);
			ocultarSeccionAnimada(barra,escenario,ajuste,"#areaNave"); 
		}
		if (archivo.includes("bebes.html")) {
	
			 $("#contNeuronasFix").css('bottom',barra*-1); //AVANCE NEURONAS SECCION BEBES. 
			 ocultarSeccionAnimada(barra,escenario,ajuste,"#contNeuronasFix");
			 actAnimacionNeurona();
		}
		

	});

	
	function ocultarSeccionAnimada(barra, escenario, ajuste,seccion){

		if (barra > (escenario[3]-ajuste)) {
			$(seccion).fadeOut();
			$("#brazoNeurona").fadeOut();
			$("#avanza").fadeOut();// oculta el mensaje de avance

		};
		if (barra < (escenario[3]-ajuste)) {
			$(seccion).fadeIn();
			$("#brazoNeurona").fadeIn();
			$("#avanza").fadeIn();// muestra el mensaje de avance de la nace
		};
	};


//funciones del boton de ayuda para avanzar la nave. 
	$("#avanza").hover(function(){
		$("#despegue").animate({opacity:'1'},5);
		},function(){
		$("#despegue").animate({opacity:'0'},5);
		});
	

	$("#avanza").click(function(){
		$("#despegue").animate({opacity:'0'},5);
		if (barra<escenario[0]) {
					
				cargaSeccion (escenario[0]);
			}
			else{
				for (var i = 0; i < escenario.length; i++) {
					
					if (barra>=escenario[i]&&barra<escenario[i+1]) {
						
					cargaSeccion (escenario[i+1]);
					}
				}

			}
		
	});
	


});

