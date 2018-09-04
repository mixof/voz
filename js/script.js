$( document ).ready(function() {
   
  $(".voz_menu").on("click", function(e){
     $("#menu_content").slideToggle();
     $(".voz_menu .sv_opener").toggleClass("opened");
  });

});