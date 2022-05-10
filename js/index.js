$(function (){ 
	//animacion
	$("header p").hide(10);
	$(".subMenu").hide(10);
	$("#menu-princ").css({"min-height":0+"px"});
	
	$(".opcionMenu").hide(10,function(){
	$("header p").fadeIn(500,function(){
			$("#menu-princ").animate({'min-height':250+'px'},1000,function(){
				$(".opcionMenu").fadeIn("slow");
			});
		});		
	});

	//efectos hover de los botones
	$("#ins").hover(function(){
		$("#ins h2").css({"border-color":"darkgray","color":"#08415E"});
		$("#ins").css({"border-top":"solid 1px darkgray","background-color":"#FFFFA1"});
	}, function(){
		$("#ins h2").css({"border-color":"lightgray","color":"#662665"});
		$("#ins").css({"border-top":"solid 1px gray","background-color":"#fafafa"});
	});

	$("#nuevo").hover(function(){
		$("#nuevo h2").css({"border-color":"darkgray","color":"#C71038"});
		$("#nuevo").css({"border-top":"solid 1px darkgray","background-color":"#FFFFA1"});
	}, function(){
		$("#nuevo h2").css({"border-color":"lightgray","color":"#2A265E"});
		$("#nuevo").css({"border-top":"solid 1px gray","background-color":"#fafafa"});
	});

	$("#ent").hover(function(){
		$("#ent h2").css({"border-color":"darkgray","color":"#C90EB4"});
		$("#ent").css({"border-top":"solid 1px darkgray","background-color":"#FFFFA1"});
	}, function(){
		$("#ent h2").css({"border-color":"lightgray","color":"#6E1717"});
		$("#ent").css({"border-top":"solid 1px gray","background-color":"#fafafa"});
	});
	/* hover de los botones especiales*/
$("#bebes").hover(function(){
		$("#bebes h2").css({"border-color":"darkgray","color":"#f9f170"});
	}, function(){
		$("#bebes h2").css({"border-color":"lightgray","color":"white"});
	});
$("#talleres3-10").hover(function(){
		$("#talleres3-10 h2").css({"border-color":"darkgray","color":"white"});
	}, function(){
		$("#talleres3-10 h2").css({"border-color":"lightgray","color":"#f9f170"});
	});
	
});