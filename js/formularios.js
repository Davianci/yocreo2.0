function letras(evt)
{


	var charCode =evt.keyCode;
        if (charCode > 31 && charCode < 48 || charCode > 57)
	{
	      
	return true;
 	}

	return false;
       
	
};

function numeros(evt)
{


	var charCode =evt.keyCode;
        if (charCode > 46 && charCode < 65)
	{
	      
	return true;
 	}

	return false;
       
	
};

function check(v){
if (v != document.getElementById("email").value) {
	document.getElementById("rep-email").setCustomValidity('El email debe coincidir');
}else {
// input is valid -- reset the error message
document.getElementById("rep-email").setCustomValidity('');
}
};

/*enviar formulario*/
$(function(){
$("#formContacto").submit(function( event ) {

  // Stop form from submitting normally
  event.preventDefault();
 
  // Get some values from elements on the page:
 var formData = {
            'nombres': $('input[name=nombres]').val(),
            'apellidos': $('input[name=apellidos]').val(),
            'email' : $('input[name=email]').val(),
            'celular' : $('input[name=celular]').val(),
            'evento': $('select[name=evento]').val(),
            'comentario': $('textarea[name=comentario]').val(),
            'token': $('input[name=g-recaptcha-response]').val(),
        };

    var url = $( this ).attr( "action" );

    //verifica el captcha para validar el envio del formulario. 
 $.post('../php/captcha.php',{token:formData.token},function(data, textStatus, xhr) {
   /*optional stuff to do after success */


  
if (data=="humano") {
       // Send the data using post
  var posting = $.post( url, formData,function(){
  $("#mensaje").show();} );
}

   

 
     
 });


  var envFormulario;
  
  $("body").click(function(){
    envFormulario=$("#mensaje").css("display");
  if (envFormulario=="block") {
  $("#mensaje").hide();
  }
  });


});
});
