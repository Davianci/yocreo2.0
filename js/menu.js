var archivo=window.location.pathname; 
archivo=archivo.toLowerCase();  //ubica de donde viene las peticiones.
 	function cargaSeccion (n){ 
		$("html, body").animate({ //ubicamos en la posición el scroll
        scrollTop: n
    	},1000); 
	};
 $(function(){
//este archivo solo se carga a las paginas con el menu lateral distintas a nuevos.html ese tiene el propio codigo por ser la página de origen

	$("#btninicio").click(function(){
		
			window.open("index.html","_self");			
		
	});
	$("#btntalleres").click(function(){
		if (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )  ) {
			history.pushState(null, "Talleres", "?sec=Talleres");
		cargaSeccion (0);
		}
		
	});
	$("#btntestimonios").click(function(){
		if (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )  ) {
			history.pushState(null, "Talleres", "?sec=Testimonios");
    	cargaSeccion (escenario[5]);
		}
		
	});
	$("#btngaleria").click(function(){
		if (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )  ) {
			history.pushState(null, "Talleres", "?sec=Galeria");
    	cargaSeccion (escenario[4]);
		}
		
	});
	$("#btnnosotros").click(function(){ 
		if (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )  ) {
			history.pushState(null, "Talleres", "?sec=Nosotros");
    	cargaSeccion (altura);
		}
		

	});
	$("#btncontacto").click(function(){
		if (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )  ) {
			history.pushState(null, "Talleres", "?sec=Contacto");
    	cargaSeccion (escenario[6]);
		}
		
    	
	});
	$("#btncaracteristicas").click(function(){
		if (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )  ) {
			history.pushState(null, "Talleres", "?sec=Caracteristicas");
    	cargaSeccion (escenario[3]);
		}
    	
	});
	$("#btnremind").click(function(){
		history.pushState(null, "Entrenamiento", "?sec=Remind");
		cargaSeccion (escenario[0]);
	});
	$("#btnpse").click(function(){
		history.pushState(null, "Entrenamiento", "?sec=pse");
    	cargaSeccion (escenario[1]);
	});
	$("#btnblogs").click(function(){ 
		history.pushState(null, "Entrenamiento", "?sec=Blog");
    	cargaSeccion (escenario[2]);
	});


	var contbot=1;
	$("#botonMenu").click(function(){
		if (contbot==1) {$("nav").animate({left:'12px'},700,function(){
			contbot=2;
		});};
			if (contbot==2) {$("nav").animate({left:'-200px'},700,function(){
			contbot=1;
		});};
		
	});
});
