const { Collapse } = require("bootstrap");

$(function () {
  $("#contactButton").click(function () {
    $("#contactModal").modal('toggle');
  });

  $("#loginButton").click(function () {
    $("#loginModal").modal('toggle');
  });

  $("#whyButton").click(function () {
    $("#whyCard").card('toggle');
  });
  $("#includesButton").click(function () {
    $("#includesCard").card('toggle');
  });
  $("#funButton").click(function () {
    $("#funCard").card('toggle');
  });
  $("#natureButton").click(function () {
    $("#natureCard").card('toggle');
  });


});
