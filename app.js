
var element = document.getElementById("mystery_card");

element.addEventListener("click", function() {
  element.setAttribute("suite", "hearts");
  element.setAttribute("rank", "queen");
});

