
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

var first_card_drawn = document.getElementById("first_card_drawn");
var times_clicked = 0;
var curVal = 0;
first_card_drawn.addEventListener("click", function() {
  if(times_clicked<52){
  var random_card = Math.round(Math.random() * (51-times_clicked));
  times_clicked += 1;
  first_card_drawn.setAttribute("rank", stack_of_cards[random_card].rank);
  first_card_drawn.setAttribute("suite", stack_of_cards[random_card].suite);
  addToValue("value",random_card);
  stack_of_cards.splice(random_card,1);
  }
  else{
    alert("End of stack");
  }
});
var second_card_drawn = document.getElementById("second_card_drawn");
second_card_drawn.addEventListener("click", function() {
  if(times_clicked<52){
  random_card = Math.round(Math.random() * (51-times_clicked));
  times_clicked += 1;
  second_card_drawn.setAttribute("rank", stack_of_cards[random_card].rank);
  second_card_drawn.setAttribute("suite", stack_of_cards[random_card].suite);
  addToValue("value",random_card);
  stack_of_cards.splice(random_card,1);
  }
  else{
    alert("End of stack");
  }
});

var dealers_card = document.getElementById("dealers_card");
dealers_card.addEventListener("click", function() {
  if(times_clicked<52){
  random_card = Math.round(Math.random() * (51-times_clicked));
  times_clicked += 1;
  dealers_card.setAttribute("rank", stack_of_cards[random_card].rank);
  dealers_card.setAttribute("suite", stack_of_cards[random_card].suite);
  addToValue("value2",random_card);
  stack_of_cards.splice(random_card,1);
  }
  else{
    alert("End of stack");
  }
});

var dealers_card_2 = document.getElementById("dealers_card_2");
dealers_card_2.addEventListener("click", function() {
  if(times_clicked<52){
  random_card = Math.round(Math.random() * (51-times_clicked));
  times_clicked += 1;
  dealers_card_2.setAttribute("rank", stack_of_cards[random_card].rank);
  dealers_card_2.setAttribute("suite", stack_of_cards[random_card].suite);
  addToValue("value2",random_card);
  stack_of_cards.splice(random_card,1);
  }
  else{
    alert("End of stack");
  }
});
function addToValue(idOfValue,random_card){
  //going to make it a binary search soon to speed up.
    if(stack_of_cards[random_card].rank==="2"){
    curVal+=2;
    document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
    }else if(stack_of_cards[random_card].rank==="3"){
      curVal+=3;
      document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
      }else if(stack_of_cards[random_card].rank==="4"){
        curVal+=4;
        document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
        }else if(stack_of_cards[random_card].rank==="5"){
          curVal+=5;
          document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
          }else if(stack_of_cards[random_card].rank==="6"){
            curVal+=6;
            document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
            }else if(stack_of_cards[random_card].rank==="7"){
              curVal+=7;
              document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
              }else if(stack_of_cards[random_card].rank==="8"){
                curVal+=8;
                document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
                }else if(stack_of_cards[random_card].rank==="9"){
                  curVal+=9;
                  document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
                  }else if(stack_of_cards[random_card].rank==="10"){
                    curVal+=10;
                    document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
                    }else if(stack_of_cards[random_card].rank==="jack"){
                      curVal+=10;
                      document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
                      }else if(stack_of_cards[random_card].rank==="queen"){
                        curVal+=10;
                        document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
                        }else if(stack_of_cards[random_card].rank==="king"){
                          curVal+=10;
                          document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
                          }else if(stack_of_cards[random_card].rank==="ace"){
                            curVal+=10;
                            document.getElementById(idOfValue).innerHTML = "Current value: "+ curVal;
                            }


}
