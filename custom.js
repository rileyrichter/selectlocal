// set credit
$("#credit").click(function () {
  localStorage.setItem("method", "credit");
});

// set wire
$("#wire").click(function () {
  localStorage.setItem("method", "wire");
});

$("#wireswitch").click(function () {
  localStorage.setItem("method", "wire");
  $(".credit-block").hide();
  $(".wire-block").show();
});

$("#creditswitch").click(function () {
  localStorage.setItem("method", "credit");
  $(".wire-block").hide();
  $(".credit-block").show();
});

// if else
$(document).ready(function () {
  if (localStorage.getItem("method") == "credit") {
    $(".credit-block").show();
    console.log("credit");
  } else if (localStorage.getItem("method") == "wire") {
    $(".wire-block").show();
    console.log("wire");
  } else {
    console.log("nothing");
  }
});

// select redirect
$(function () {
  $("#state").on("change", function () {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
    return false;
  });
});
