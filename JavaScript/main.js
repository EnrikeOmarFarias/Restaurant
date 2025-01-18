$(document).ready(function () {
  //EFECTO MENU
  $(".menu a").each(function (index, elemento) {
    $(this).css({
      top: "-20rem",
    });

    $(this).animate(
      {
        top: "0",
      },
      2000 + index * 500
    );
  });

  //EFECTO HEADER
  if ($(window).width() > 800) {
    $("header .textos").css({
      opacity: 0,
      marginTop: 0,
    });

    $("header .textos").animate(
      {
        opacity: 1,
        marginTop: "-52px",
      },
      1500
    );
  }

  // SCROLL ELEMENTOS MENU
  let acercaDe = $("#acercade").offset().top,
    menu = $("#platos").offset().top,
    galeria = $("#galeria").offset().top,
    ubicacion = $("#ubicacion").offset().top;

  $("#boton__acercade").on(
    "click",
    function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrolltop: acercaDe - 100,
      });
    },
    500
  );

  $("#boton__menu").on(
    "click",
    function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrolltop: menu,
      });
    },
    500
  );

  $("#boton__galeria").on(
    "click",
    function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrolltop: galeria,
      });
    },
    500
  );

  $("#boton__ubicacion").on(
    "click",
    function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrolltop: ubicacion,
      });
    },
    500
  );
});
