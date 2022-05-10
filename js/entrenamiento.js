	var escenario=[]; //arreglo para cargar las posiciones de los escenarios.
$(function(){

	var adorno=[];//arreglo para los numeros y el decorado de cada nivel. 
	var info=[]; //arreglo para mostrar la información de los niveles. 
	var hescenario=$("#paneles").height(); //toma la altura de todo el escenario. 
	var panel=$(".panel").height(); //calcula la altura de cada panel (todos son iguales pero se usan para los efectos.)
	$("body").height(hescenario);// le coloca la altura al cuerpo de la web basado en las secciones que hay para que avance el scroll. 
	/*var altura=$("body").height(); // capturamos la altura para ubicar elementos. */
	$(".informacion").hide(5); // ocultamos la infromación para que aparezca solo la necesaria. 

	for (var i = 3; i >0 ; i--) {// carga las posiciones de los escenarios en el array. Tener en cuenta que los niveles van de abajo hacia arriba.
   	escenario[i]= panel*(i);
   	adorno[i]="#adorno"+(i);
   	info[i]=["#info"+(i),false]; //arreglo de dos dimensiones para controlar los paneles que se muestran y los que se ocultan
   };
   escenario[0]=0; // pone el scroll en el inicio de la página. 

	
	muestraInfo(info[1]);
    $(document).scroll(function(){ 
		
		var barra=$(window).scrollTop(); //capturamos la posición del scroll.
		 $("#paneles").css('bottom',$(window).scrollTop()*-1); //invierte el avance del fondo para dar la sensación que se eleva.
		mueveParalax(barra);
	});

	function mueveParalax(b){ //funcion que mueve las imágenes en efecto paralax
		var desplazamiento;
		for (var i = 0; i < 3; i++) {
			if (b>=escenario[i] && b<escenario[i+1]) {	
				
				if (adorno[i+1] == "#adorno1") {
					desplazamiento= b;
				}else{
					desplazamiento=(b-escenario[i]);
				};
				$(adorno[i+1]).animate({bottom:desplazamiento+'px'},20);
				muestraInfo(info[i+1]);
				
			};
		};
	};
	function muestraInfo(a){ //muestra la infromación dependiendo la posición
		for (var i = 1; i < 4; i++) { //oculta la información cuando no está sobre su espacio. Info maneja un doble array uno con el nombre y el otro con en boleano si se activo o no.
			if (a[0]!=info[i][0] && info[i][1]==true) { //si es distinto al espacio actual y fue activado lo oculta.
				$(info[i][0]).fadeOut();
				info[i][1]=false;
			};
		};
		if (a[1]== false) { //comprueba que no se haya activado antes en el movimiento del scroll sobre el mismo espacio para activarlo solo una vez. 
			$(a[0]).fadeIn();
			a[1]=true;
		};
	};
	
	 

	//inicio vinculos web externos aparte del menu
	$("#iphone").click(function(){
		window.open("https://itunes.apple.com/us/app/remind-safe-classroom-communication/id522826277?mt=8","_blank");
	});
	$("#android").click(function(){
		window.open("https://play.google.com/store/apps/details?id=com.remind101&hl=es","_blank");
	});
	$("#pse").click(function(){
		window.open("https://www.zonapagos.com/t_dcbotero/pagos.asp","_blank");
	});
	$("#luminanimas").click(function(){
		window.open("http://luminanimas.blogspot.com.co/","_blank");
	});
	$("#creanimus").click(function(){
		window.open("http://blog.creanimus.com/","_blank");
	});
});