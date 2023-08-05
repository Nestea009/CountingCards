'use strict';

function counter() {

  let SoftPlayersHand = false; 
  let SoftDealersHand = false; 

  function GetRandomCard() {
    let suit = ["Ace",2,3,4,5,6,7,8,9,10,10,10,10]
    
    let RandomCard = suit(Math.floor(Math.random() * 11) + 1);

    return RandomCard;
  }

  let DealersCard = GetRandomCard();

  if (DealersCard == "Ace"){
    DealersCard == 11;

  }

  //document.getElementById('app').innerHTML = `<p>Hi, your card is ${RandomCard}</p>`;
  
  let FirstCard = GetRandomCard();
  let SecondCard = GetRandomCard();

  if ((FirstCard == "Ace" && SecondCard == "Ace")){
    FirstCard = 11;
    SecondCard = 1;
  }

  if (FirstCard == "Ace"){
    SoftPlayersHand = true; 
    if (SecondCard == 10){
      FirstCard == 11;
    }
    else {
      FirstCard == 1;
    }
  }

  if (SecondCard == "Ace"){
    SoftPlayersHand = true; 
    if (FirstCard == 10){
      SecondCard == 11;
    }
    else {
      SecondCard == 1;
    }
  }

  let PlayersHand = FirstCard + SecondCard; 

  //PLAING OPTIONS

  //Hit

  function Hit(PlayersHand) {
    let ThirdCard = GetRandomCard();

    if (ThirdCard == "Ace"){
      if (PlayersHand <= 10){
        ThirdCard == 11;
      }
      else {
        ThirdCard == 1;
      }
    }
    PlayersHand = PlayersHand + ThirdCard;

    return PlayersHand
  }

  //Double Down

  //Stand

  function Stand(){
    DealersTurn();
  }

  //DealersTurn
  function DealersTurn(){
    console.log("still working on it")

  }




  //PLAYER'S ALGORITHM 

  if ((PlayersHand == 11) || (PlayersHand == 10 && DealersCard <= 9) || (PlayersHand == 9 && 2 < DealersCard < 6)){
    //Double Down

  }

  if (17 > PlayersHand > 12 && DealersCard >= 7){
    while (17 > PlayersHand){
      Hit(PlayersHand);
    }
  }

  if ((PlayersHand <= 8) || (PlayersHand == 9 && (DealersCard == 2 || 7 < DealersCard)) || (PlayersHand == 10 && DealersCard < 10)){
    //Hit
    Hit(PlayersHand);

    while ((17 > PlayersHand >= 10) && (7 < DealersCard || (DealersCard == 3 || DealersCard == 2))){
      Hit(PlayersHand);
    }

  }
}
counter();
