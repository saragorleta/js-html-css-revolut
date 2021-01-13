$(document).ready(function(){
  // funzione che abilita sia dropdown-menu sia evidenzia
  $('.show').hover(function(){   //quando passo il mouse sulla classe show..

    //ipotesi quando troviamo più dropdown -->this
    //su questa(this) classe figlia (children.dropdown-menu) tolgo e metto(toggleClasse)la classe .active
    $(this).children('.dropdown-menu').toggleClass('active');
    //su questa(this) classe figlia (children.evidenzia) tolgo e metto(toggleClasse)la classe .active
    $(this).children('.evidenzia').toggleClass('active');
  });
  // funzione che permette di effettuare il click
  $('.click').click(function(){
    $(this).children('.dropdown-menu').toggleClass('active');
    $(this).children('.evidenzia').toggleClass('active');

  });
  $('.dropdown-menu').hover(function(){
  $(this).children('.evidenzia').toggleClass('active');
});
});
