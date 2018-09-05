$( document ).ready(function() {
   
  $(".voz_menu").on("click", function(e){
     $("#menu_content").slideToggle();
     $(".voz_menu .sv_opener").toggleClass("opened");
  });

  $("#result_info .sv_close").on("click", function(e){
  	$("#result_info").fadeOut(function(){
  		$(this).remove();
  	});
  })

});