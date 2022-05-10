
$(function(){
//ubica la página dependiendo la opcion de la URL
 	
	var pos;
 	var pag=window.location.search.replace("?", "")// carga el string unicamente de las variables
	if (pag) {
	pos=pag.split("=")[1]; //carga la variable para la posición de la pagina
		if (pos=="Talleres" && (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )) ) {
			cargaSeccion (0);
		};
		if (pos=="Testimonios") {
			cargaSeccion (escenario[5]);
		};
		if (pos=="Galeria" && (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )) ) {
			cargaSeccion (escenario[4]);
		};
		if (pos=="Nosotros" && (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )) ) {
			cargaSeccion (altura);
		};
		if (pos=="Contacto" && (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )) ) {
			cargaSeccion (escenario[6]);
		};
		if (pos=="Caracteristicas" && (archivo.includes("nuevos.html" ) || archivo.includes("bebes.html" )) ) {
			cargaSeccion (escenario[3]);
		};
		if (pos=="Remind" ) {
			cargaSeccion (escenario[0]);
		};
		if (pos=="pse"  ) {
			cargaSeccion (escenario[1]);
		};
		if (pos=="Blog"  ) {
			cargaSeccion (escenario[2]);
		};
	};


});