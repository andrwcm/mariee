$(document).ready(function(){                      
  $("#btn_menu").click(function(){
    $("#btn_menu span").toggleClass("close");
    $( "section#overlay").fadeToggle( "fast", "linear" );
  });   
});

//acciones precarga
$(window).load(function() {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut("slow", function(){
   });
})