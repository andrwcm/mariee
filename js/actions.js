$(document).ready(function(){                      
  $("#btn_menu").click(function(){
    $("#btn_menu span").toggleClass("close");
    $( "section#overlay").fadeToggle( "fast", "linear" );
  });   
});