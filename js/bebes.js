var textEstaciones={
	musica:"La música es vital para el desarrollo del lenguaje, motiva al niño a expresar sus sentimientos y aprender nuevas palabras. Cuando los padres le cantan al bebé se generan conexiones emocionales que aumentan la autoestima del niño y fortalece una correcta autoimagen de él brindándole seguridad y confianza.",
	sensorial:"</br></br>	El contacto físico con el bebé por medio de masajes es esencial. Estimula todos los músculos de su cuerpo, lo relaja y lo hace sentir amado.",
	creativo:"Haremos una actividad específica para desarrollar las habilidades del bebé (arte, diseño de juguetes y juego con masas sensoriales).</br> </br>Así mientras el bebé se divierte, ustedes como padres aprendenran a realizarlas para ponerlas en práctica posteriormente. ",
	bebe:"Crecerá en los siguientes campos: </br><ul><li>Cognitivo</li> <li>Inteligencia Emocional</li><li>Lógico</li><li>Motriz</li><li>Curiosidad</li></ul>",
	padre:"Serás equipado como padre para:</br> <ul><li>Relacionarte con tu bebe</li><li>Entenderl@</li><li>Transmitirle conocimiento</li></ul>",
	reporte:"Si uno de los padres estuvo ausente... </br></br> !No hay problema! nuestro reporte lo va a mantener al tanto de lo sucedido; Además podrás tener tu historial de talleres junto con tips y sugerencias personalizados para ser implementados semana a semana.",
};

var alturaBrazo;
	var rango;
	var disFinalBrazo;
	var alturaNeurona;
	var disTopNeurona=[];
	var posFinalNeurona=[];
	var sonidoEstacion= new Audio();
	sonidoEstacion.src="sonidos/activado.mp3";


function cargaPosNeuronas(){
		alturaBrazo=$("#brazoNeurona").position().top; //carga la altura del brazo 
		alturaNeurona=$("#neuronaEstacion1").height();
		
		alturaNeurona=alturaNeurona*0.75;		
	}

function animacionNeurona(estacionParaAnimar){
	var contador=0;
	if (estacionParaAnimar==1) {//se basa en el numero de la estacion para animar. 
		contador=3;
	} else {
		contador=2;
	}
	var estrellas=[]
	var alcanza=[]
	
	
	for (var i = 0; i < contador; i++) {
		estrellas[i]="#nDes"+(i+1)+"Est"+estacionParaAnimar;
		alcanza[i]="#alcDesarrollo"+(i+1)+"Est"+estacionParaAnimar;
	}

	sonidoEstacion.pause();
	sonidoEstacion.play();
	$("#neuronaEstacion"+estacionParaAnimar).removeClass("animaEstacion").animate({
		borderRadius:"0%",
		backgroundSize: "100%" },1000,function(){
			
			var d=0; //contador de desarrollos
			var a=0; // contador alcanza
			
			muestraDesarrollo();
			function muestraDesarrollo(){ //funcion para que se anime las estrellas de desarrollo una por una. Cuando termina una vuelve a llamar la funcion. 

				if (d<contador) {
					
					$(estrellas[d]).show(muestraDesarrollo);

					

				}
				if (d==contador) { //comprueba que se haya completado el ciclo de las estrellas de desarrollo. 
					
					muestraAlcanza();

				}
				d++;
				
			}
			
			
			
			function muestraAlcanza(){//funcion para que se anime los brazos de desarrollo una por una. Cuando termina una vuelve a llamar la funcion.
				
				var altoAlcanza=$(alcanza[a]).height();
				//console.log(altoAlcanza);
				if (a<contador) {

					$(alcanza[a]).height(0).show(1,function(){//le quita el alto para volverlo mostrarlo y leugo si animar el crecimiento. 
						$(alcanza[a]).animate({height: altoAlcanza},500,function(){
							
							$(alcanza[a]+" h3").fadeIn(500,muestraAlcanza);
							a++;	
						});
					});
					
					
				}

			}
			

		});

}


var animado=[];
for (var i = 0; i < 4; i++) {
	animado[i]=false;
}
function actAnimacionNeurona(){
	
		for (var i = 0; i < 4; i++) {
				var offsetNeurona=$("#neuronaEstacion"+(i+1)).offset().top;
				disTopNeurona[i]= offsetNeurona- barra;  //se agrega la barra porque se desplaza el div contenedor basado en la distancia de la barra
				posFinalNeurona[i]=(alturaNeurona*1.2)+disTopNeurona[i];
				
				if (animado[i]==false && posFinalNeurona[i]>alturaBrazo && posFinalNeurona[i]<(alturaBrazo+alturaNeurona)) {
					
					animado[i]=true;
					animacionNeurona(i+1);
					
				}
				

			}
	}





$(function(){
	//cargar la animación de la neuronas. 
	//
	actAnimacionNeurona();
	cargaPosNeuronas(); //llama la funcion cuando se lea la web. 

	$(window).resize(function(){  //cuando se haga un cambio de resolución se cargará nuevamente los parametros. 
		cargaPosNeuronas();
	});


	$(".neuronasDesarrollo").hide();
	$(".neuronasDesarrollo").hide();
	$(".alcanzaDesarrollo").hide();
	$(".alcanzaDesarrollo h3").hide();
	


	$("#masMusical").click(function(){
		 muestraText(textEstaciones.musica);
	});
	$("#masSensorial").click(function(){
		 muestraText(textEstaciones.sensorial);
	});
	$("#masPadres").click(function(){
		 muestraText(textEstaciones.padre);
	});
	$("#masBebe").click(function(){
		 muestraText(textEstaciones.bebe);
	});
	$("#masCreativo").click(function(){
		 muestraText(textEstaciones.creativo);
	});
	$("#masReporte").click(function(){
		 muestraText(textEstaciones.reporte);
	});

	$("#bntCerrar").click(function(){
		$("#contExplicacion").fadeOut(1000,function(){
			$("#textExplicacion").html("");
		});
	});

	function muestraText(textoMostrar){
		$("#contExplicacion").fadeIn(1000,function(){
			$("#textExplicacion").html(textoMostrar);
		});
	}

	
});

