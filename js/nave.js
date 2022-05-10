	//funciones de la nave

var cont1=false;// variables para que no se repita la animación de las tranciciones alas cohetes
var cont2=false;
	function nave(){
		$("#base").animate({opacity:'1'},1000,function(){// carga la nave y los cohetes

		$(".llamaCohetes").animate({opacity:'0'},10); //oculta el fuego de los cohetes.

			$("#diseno").animate({opacity:'1'},500, function(){
				$("#experimentos").animate({opacity:'1'},500, function(){
					$("#arte").animate({opacity:'1'},500);

				});
			});
		});
	};
	function enciendeCohete(llama){
		$(llama).animate({opacity:'1'},15);
		$(llama).animate({opacity:'0'},15);
	};



	function muestraAlasPotencia(barra, escenario, ajuste){
		
		if ( barra >= (escenario[0]-ajuste) && cont1==false ) {
				$("#alas").animate({opacity:'1'},100, function(){
					$("#dones").animate({margin:'0 2% 0 0 '},100);
					$("#talentos").animate({margin:'0 0 0 2%'},100);
				});
				cont1=true;
			};	
			if (barra < (escenario[0]-ajuste) && cont1==true) {
				$("#dones").animate({margin:'0 20% 0 0'},50);
				$("#talentos").animate({margin:'0 0 0 20%'},50);
				$("#alas").animate({opacity:'0'},100);
				cont1=false;
			};	

		if (barra >= (escenario[1]-ajuste)) {
			//alert(escenario[0]);
			if (cont2==false) {
				$("#potenciador").animate({opacity:'1'},100, function(){
					$("#principios").animate({margin:'0 2% 0 0 '},200);
					$("#valores").animate({margin:'0 0 0 2%'},200);
				});
				cont2=true;
			};

			enciendeCohete(".llamaPotenciador");
		};
		if (barra < (escenario[1]-ajuste) && cont2==true) {
			$("#principios").animate({margin:'0 20% 0 0'},50);
				$("#valores").animate({margin:'0 0 0 20%'},50);
				$("#potenciador").animate({opacity:'0'},100);
				cont2=false;
		};
			
	};
