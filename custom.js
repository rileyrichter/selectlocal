$("#credit").click(function () {
  localStorage.setItem("method", "credit");
});

$("#wire").click(function () {
  localStorage.setItem("method", "wire");
});

$(document).ready(function () {
  if (localStorage.getItem("method") == "credit") {
    console.log("credit");
  } else if (localStorage.getItem("method") == "wire") {
    console.log("wire");
  } else {
    console.log("nothing");
  }
});
