$(document).ready(function(){

  $('.with-dropdown').hover(function(){
    // $('.dropdown-menu').toggleClass('active');

    //ipotesi più dropdown
    $(this).children('.dropdown-menu').toggleClass('active');
  });

  //$('.with-dropdown').hover(function(){
    // $(this).children('evidenzia')toggleClass('active');
  }
});
