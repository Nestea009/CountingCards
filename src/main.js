'use strict';

let wins = 0;
let losses = 0;

let Money = 10000;

function counter(i, Money) {

  let NumberOfRounds = 100;

  while(i < 100){
    let currentBet = 5;

    //Make the money thing

    let RunningCount = 0;
    let Decks = 6;
    let CardsDealt = 52;

    let deck = ["Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10]

    let TrueCount = RunningCount / Decks;

    let SoftPlayersHand = false; 
    let SoftDealersHand = false;

    function GetRandomCard() {

      let RandomSelectedNumber = (Math.floor(Math.random() * CardsDealt) + 1)
      
      let RandomCard = deck[RandomSelectedNumber];

      deck.remove[RandomSelectedNumber];

      CardsDealt += 1;


      if([2,3,4,5,6].includes(RandomCard)){
        RunningCount += 1;
      }
      else if([10,"Ace"].includes(RandomCard)){
        RunningCount -= 1;
      }

      if(CardsDealt <= 0){
        Decks -= 1;
        CardsDealt = 52;
        console.log(`There are ${Decks} decks left!`)
        if (Decks <= 0){
          i = 101;
        }
      }

      TrueCount = RunningCount / Decks;

      return RandomCard;
    }

    let DealersCard = GetRandomCard();

    if (DealersCard == "Ace"){
      DealersCard = 11;
      SoftDealersHand = true;
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
        FirstCard = 11;
      }
      else {
        FirstCard = 1;
      }
    }

    if (SecondCard == "Ace"){
      SoftPlayersHand = true; 
      if (FirstCard == 10){
        SecondCard = 11;
      }
      else {
        SecondCard = 1;
      }
    }

    let PlayersHand = FirstCard + SecondCard; 

    //PLAING OPTIONS

    //Hit
    function Hit(PlayersHand) {
      let ThirdCard = GetRandomCard();

      if (ThirdCard == "Ace"){
        if (PlayersHand <= 10){
          ThirdCard = 11;
        }
        else {
          ThirdCard = 1;
        }
      }
      PlayersHand = PlayersHand + ThirdCard;

      return PlayersHand
    }

    //Double Down
    function DoubleDown(PlayersHand) {

    }

    //Stand
    function Stand(PlayersHand){
      //Dealers Turn
      console.log("still working on it")
    }


    //PLAYER'S ALGORITHM 

    if (SoftPlayersHand == false){
      if ((PlayersHand == 11) || (PlayersHand == 10 && DealersCard <= 9) || (PlayersHand == 9 && 2 < DealersCard < 6)){
        //Double Down

      }

      else if (17 > PlayersHand > 12 && DealersCard >= 7){
        while (17 > PlayersHand){
          Hit(PlayersHand);
        }
      }

      else if ((PlayersHand <= 8) || (PlayersHand == 9 && (DealersCard == 2 || 7 < DealersCard)) || (PlayersHand == 10 && DealersCard < 10) || (PlayersHand == 12 && (((DealersCard == 2) || (DealersCard == 3) || (7 <= DealersCard <= 11) || (13 <= PlayersHand <= 16 && 7 <= DealersCard <= 11))))){
        Hit(PlayersHand);

        while ((17 > PlayersHand >= 10) && (7 < DealersCard || (DealersCard == 3 || DealersCard == 2))){
          Hit(PlayersHand);
        }

        if (PlayersHand < 21){
          Stand(PlayersHand);
        }

      }

      else if ((PlayersHand > 17) || ((13 <= PlayersHand <= 16) && (2 <= DealersCard <= 6)) || (PlayersHand == 12 && (4 <= DealersCard <= 6))){
        Stand(PlayersHand);
      }
      else {
        console.log("ERR: Se mamó")
      }

    }
    else if (SoftPlayersHand == true){

      if(PlayersHand == 21){
        //BlackJack
        PlayersHand = "BlackJack";
        Stand(PlayersHand);
      }

      else if(((18 <= PlayersHand <= 13) && ((DealersCard == 5) || (DealersCard == 6))) || (PlayersHand == 19 && DealersCard == 6) || ((15 <= PlayersHand <= 18) && (DealersCard == 4)) || (((PlayersHand == 17) || (PlayersHand == 18)) && (DealersCard == 3)) || ((PlayersHand == 18) && (DealersCard == 2))){
        // Double Down

      }

      else if((PlayersHand == 19) || ((PlayersHand == 18) && (DealersCard != 6)) || ((PlayersHand == 17) && ((DealersCard == 7) || (DealersCard == 8)))){
        //Stand
        Stand(PlayersHand);
      }

      else {
        //Hit
        Hit(PlayersHand);
      }
    }

    if (TrueCount == 0){
      currentBet = 5;
    }
    if (TrueCount == 1){
      currentBet = 100;
    }
    if (TrueCount == 2){
      currentBet = 200;
    }
    if (TrueCount == 3){
      currentBet = 300;
    }
    if (TrueCount == 4){
      currentBet = 400;
    }
    if (TrueCount == 5){
      currentBet = 500;
    }
    if (TrueCount > 5){
      currentBet = 600;
    }
    i++;
  }
}
counter();
