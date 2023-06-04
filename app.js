


var stack_of_cards =  [
{suite : "hearts", rank : "2"}, 
{suite : "hearts", rank : "3"},
{suite : "hearts", rank : "4"},
{suite : "hearts", rank : "5"},
{suite : "hearts", rank : "6"},
{suite : "hearts", rank : "7"},
{suite : "hearts", rank : "8"},
{suite : "hearts", rank : "9"},
{suite : "hearts", rank : "10"},
{suite : "hearts", rank : "jack"},
{suite : "hearts", rank : "queen"},
{suite : "hearts", rank : "king"},
{suite : "hearts", rank : "ace"},

{suite : "diamonds", rank : "2"}, 
{suite : "diamonds", rank : "3"},
{suite : "diamonds", rank : "4"},
{suite : "diamonds", rank : "5"},
{suite : "diamonds", rank : "6"},
{suite : "diamonds", rank : "7"},
{suite : "diamonds", rank : "8"},
{suite : "diamonds", rank : "9"},
{suite : "diamonds", rank : "10"},
{suite : "diamonds", rank : "jack"},
{suite : "diamonds", rank : "queen"},
{suite : "diamonds", rank : "king"},
{suite : "diamonds", rank : "ace"},

{suite : "spades", rank : "2"}, 
{suite : "spades", rank : "3"},
{suite : "spades", rank : "4"},
{suite : "spades", rank : "5"},
{suite : "spades", rank : "6"},
{suite : "spades", rank : "7"},
{suite : "spades", rank : "8"},
{suite : "spades", rank : "9"},
{suite : "spades", rank : "10"},
{suite : "spades", rank : "jack"},
{suite : "spades", rank : "queen"},
{suite : "spades", rank : "king"},
{suite : "spades", rank : "ace"},

{suite : "clubs", rank : "2"}, 
{suite : "clubs", rank : "3"},
{suite : "clubs", rank : "4"},
{suite : "clubs", rank : "5"},
{suite : "clubs", rank : "6"},
{suite : "clubs", rank : "7"},
{suite : "clubs", rank : "8"},
{suite : "clubs", rank : "9"},
{suite : "clubs", rank : "10"},
{suite : "clubs", rank : "jack"},
{suite : "clubs", rank : "queen"},
{suite : "clubs", rank : "king"},
{suite : "clubs", rank : "ace"},
];
var card_drawn = document.getElementById("card_from_stack");
var times_clicked = 0;
card_drawn.addEventListener("click", function() {
  if(times_clicked<52){
  var random_card = Math.round(Math.random() * (51-times_clicked));
  times_clicked += 1;
  card_drawn.setAttribute("rank", stack_of_cards[random_card].rank);
  card_drawn.setAttribute("suite", stack_of_cards[random_card].suite);
  stack_of_cards.splice(random_card,1);
  }
  else{
    alert("End of stack");
  }
});
var dealed_card = document.getElementById("dealt");

dealed_card.addEventListener("click", function() {
  var random_card_2 = Math.round(Math.random()*51);
  element.setAttribute("suite", stack_of_cards[random_card_2].suite);
  element.setAttribute("rank", stack_of_cards[random_card_2].rank);
});
var reload = document.getElementById("reset");
reload.addEventListener("click", function(){
card_drawn.setAttribute("suite",null);
card_drawn.setAttribute("rank",null);
});
