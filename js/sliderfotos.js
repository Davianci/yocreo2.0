
	function cargarSlider(tipoSlider){
	var ancho=$(tipoSlider+" li").length;//ajusta el ancho del slider
		$(tipoSlider).css({'width':ancho+'00%'});

		$(tipoSlider+" li:last").insertBefore(tipoSlider+" li:first");//ajusta las imagenes y su alineación para el inicio del slider
		$(tipoSlider).css('margin-left','-'+100+'%');	
	};

	//funcion para cargar fotos. 
	var fotosCargadas=false;  //indica si se cargaron las fotos para que la accion no se vuelve a repetir. 
	function cargarFotos(pag){
		fotosCargadas=true;
		
		$.get("php/fotos.php",{pagina:""+pag},function(data,status){
			var ancho=(data.length-2); //ajusta el ancho del slider
			$("#container-foto").css({'width':ancho+'00%'}); //ajusta el ancho del slider
			//carga las fotografias. 
			for (var i = 2; i < data.length; i++) {
				$("#container-foto").append("<li class='foto-galeria' id='foto"+(i-1)+"'></li>");
				var foto="#foto"+(i-1);
				if (pag=="nuevos") {
					$(foto).css("background-image","url('imagenes/fotos/fotospeque/"+(data[i])+"')");
				}else {
					if (data[i].includes("MP4")) {
						$(foto).append("<video width='auto' height='100%' controls controlsList='nodownload'> <source src='imagenes/fotos/fotosbebes/"+(data[i])+"' type='video/mp4'></video>");
					}else{
						$(foto).css("background-image","url('imagenes/fotos/fotosbebes/"+(data[i])+"')");
					}
					
				}
				
			};

		},"json");
	};

$(function(){
function moverD (tipoSlider){

$(tipoSlider).animate({
	marginLeft:'-'+200+'%'
},1000,function(){
	$(tipoSlider+" li:first").insertAfter(tipoSlider+" li:last");
	$(tipoSlider).css('margin-left','-'+100+'%');
});
};

function moverI(tipoSlider){

	$(tipoSlider).animate({
	marginLeft:0
},1000,function(){
	$(tipoSlider+" li:last").insertBefore(tipoSlider+" li:first");
	$(tipoSlider).css('margin-left','-'+100+'%');
});
};
// controles de los slider. 
	$("#flechates2").click(function(){
		moverD("#container-testimonios");
	});

	$("#flechates1").click(function(){
		moverI("#container-testimonios");
	});
	$("#flechafoto2").click(function(){
		moverD("#container-foto");
	});

	$("#flechafoto1").click(function(){
		moverI("#container-foto");
	});

});

