$(function () {
  $(".black-button").mouseenter(function () {
    $(".promotion").css("background-image", "url(img/promo-picture2.jpg)");
  });
  $(".black-button").mouseleave(function () {
    $(".promotion").css("background-image", "url(img/promo-picture.jpg)");
  });

  $("#beach").click(function () {
    $("#room-g").css("display", "none");
    $("#restaurant-g").css("display", "none");
    $("#more-g").css("display", "none");
    $("#beach-g").fadeToggle("slow");
  });

  $("#room").click(function () {
    $("#beach-g").css("display", "none");
    $("#restaurant-g").css("display", "none");
    $("#more-g").css("display", "none");
    $("#room-g").fadeToggle("slow");
  });

  $("#restaurant").click(function () {
    $("#beach-g").css("display", "none");
    $("#room-g").css("display", "none");
    $("#more-g").css("display", "none");
    $("#restaurant-g").fadeToggle("slow");
  });

  $("#more").click(function () {
    $("#beach-g").css("display", "none");
    $("#room-g").css("display", "none");
    $("#restaurant-g").css("display", "none");
    $("#more-g").fadeToggle("slow");
  });
});
