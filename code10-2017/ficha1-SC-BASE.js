$(document).ready(function() {
  $("#sFisico").fadeIn("slow");
  $("#sPersonalidad").fadeOut("slow");
  $("#sHistoria").fadeOut("slow");
  $("#sExtras").fadeOut("slow");
  $("#sFisicoB").css("background-color", "#6e7dc3");
  $("#sPersonalidadB").css("background-color", "#141c42");
  $("#sHistoriaB").css("background-color", "#141c42");
  $("#sExtrasB").css("background-color", "#141c42");
  $("#sFisicoB").css("color", "#191919;");
  $("#sPersonalidadB").css("color", "#fff");
  $("#sHistoriaB").css("color", "#fff");
  $("#sExtrasB").css("color", "#fff");

  $("#sFisicoB").click(function() {
    $("#sFisico").fadeIn("slow");
    $("#sPersonalidad").fadeOut("slow");
    $("#sHistoria").fadeOut("slow");
    $("#sExtras").fadeOut("slow");
    $("#sFisicoB").css("background-color", "#6e7dc3");
    $("#sPersonalidadB").css("background-color", "#141c42");
    $("#sHistoriaB").css("background-color", "#141c42");
    $("#sExtrasB").css("background-color", "#141c42");
    $("#sFisicoB").css("color", "#191919;");
    $("#sPersonalidadB").css("color", "#fff");
    $("#sHistoriaB").css("color", "#fff");
    $("#sExtrasB").css("color", "#fff");
  });

  $("#sPersonalidadB").click(function() {
    $("#sFisico").fadeOut("slow");
    $("#sPersonalidad").fadeIn("slow");
    $("#sHistoria").fadeOut("slow");
    $("#sExtras").fadeOut("slow");
    $("#sFisicoB").css("background-color", "#141c42");
    $("#sPersonalidadB").css("background-color", "#6e7dc3");
    $("#sHistoriaB").css("background-color", "#141c42");
    $("#sExtrasB").css("background-color", "#141c42");
    $("#sFisicoB").css("color", "#fff");
    $("#sPersonalidadB").css("color", "#191919;");
    $("#sHistoriaB").css("color", "#fff");
    $("#sExtrasB").css("color", "#fff");
  });

  $("#sHistoriaB").click(function() {
    $("#sFisico").fadeOut("slow");
    $("#sPersonalidad").fadeOut("slow");
    $("#sHistoria").fadeIn("slow");
    $("#sExtras").fadeOut("slow");
    $("#sFisicoB").css("background-color", "#141c42");
    $("#sPersonalidadB").css("background-color", "#141c42");
    $("#sHistoriaB").css("background-color", "#6e7dc3");
    $("#sExtrasB").css("background-color", "#141c42");
    $("#sFisicoB").css("color", "#fff");
    $("#sPersonalidadB").css("color", "#fff");
    $("#sHistoriaB").css("color", "#191919;");
    $("#sExtrasB").css("color", "#fff");
  });
  
  $("#sExtrasB").click(function() {
    $("#sFisico").fadeOut("slow");
    $("#sPersonalidad").fadeOut("slow");
    $("#sHistoria").fadeOut("slow");
    $("#sExtras").fadeIn("slow");
    $("#sFisicoB").css("background-color", "#141c42");
    $("#sPersonalidadB").css("background-color", "#141c42");
    $("#sHistoriaB").css("background-color", "#141c42");
    $("#sExtrasB").css("background-color", "#6e7dc3");
    $("#sFisicoB").css("color", "#fff");
    $("#sPersonalidadB").css("color", "#fff");
    $("#sHistoriaB").css("color", "#fff");
    $("#sExtrasB").css("color", "#191919;");
  });
});
