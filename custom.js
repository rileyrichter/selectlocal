// set credit
$("#credit").click(function () {
  localStorage.setItem("method", "credit");
});

// set wire
$("#wire").click(function () {
  localStorage.setItem("method", "wire");
});

// if else
$(document).ready(function () {
  if (localStorage.getItem("method") == "credit") {
    console.log("credit");
  } else if (localStorage.getItem("method") == "wire") {
    console.log("wire");
  } else {
    console.log("nothing");
  }
});
