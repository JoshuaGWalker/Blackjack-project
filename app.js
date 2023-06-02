
var element = document.getElementById("mystery_card");

element.addEventListener("click", function() {
  element.setAttribute("suite", "hearts");
  element.setAttribute("rank", "queen");
});

var stack_of_cards =  [
{suite : "hearts", rank : "2"},
{suite : "hearts", rank : "3"}
];
var card_drawn = document.getElementById("card_from_stack");
card_drawn.addEventListener("click", function() {
  card_drawn.setAttribute("suite", stack_of_cards[1].suite);
  card_drawn.setAttribute("rank", stack_of_cards[1].rank);
});
