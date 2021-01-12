$(document).ready(function(){

  $('.show').hover(function(){
    // $('.dropdown-menu').toggleClass('active');

    //ipotesi più dropdown
    $(this).children('.dropdown-menu').toggleClass('active');
    $(this).children('.evidenzia').toggleClass('active');
  });
  $('.click').click(function(){
    $(this).children('.dropdown-menu').toggleClass('active');
  });
});
