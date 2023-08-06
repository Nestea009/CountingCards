'use strict';

function counter() {

  let i = 0;

  let wins = 0;
  let losses = 0;
  let ties = 0;

  let Money = 10000;

  let NumberOfRounds = 1;

  let currentBet = 5;

  let RunningCount = 0;
  let Decks = 6;
  let CardsDealt = 52;

  let deck = ["Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10]

  while(i < NumberOfRounds){

    let TrueCount = RunningCount / Decks;

    let SoftPlayersHand = false; 
    let SoftDealersHand = false;

    function GetRandomCard() {

      let RandomSelectedNumber = (Math.floor(Math.random() * CardsDealt) + 1)
      
      let RandomCard = deck[RandomSelectedNumber];

      deck.splice(RandomSelectedNumber, 1);

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
          i = NumberOfRounds + 1;
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
      //Draw 1 more card, then stand
      currentBet = currentBet * 2;
      Hit(PlayersHand);
      Stand(PlayersHand);
    }

    //Stand
    function Stand(PlayersHand){

      //Dealers Turn
      let SecondDealersCard = GetRandomCard();
      let DealersHand = DealersCard + SecondDealersCard;

      if (PlayersHand == "BlackJack"){
        if(DealersHand == 21){
          //Push
          ties += 1;
          console.log("Push")
          return console.log("Push")
        }
        else {
          BlackJack(currentBet, Money);
          console.log("BlackJack!!!!!!!!")
          return console.log("BlackJack!!!!!!!!")
        }
      }

      while (DealersHand < 17){
        Hit(DealersHand);
      }

      if((DealersHand > 21) && (SoftDealersHand == false)){
        PlayerWins(currentBet, Money);
        console.log("Player Won")
        return console.log("Player Won")
      }

      else if(SoftDealersHand == true){
        DealersHand = DealersHand - 10; 
        while (DealersHand < 17){
          Hit(DealersHand);
        }
        if(DealersHand > 21){
          PlayerWins(currentBet, Money);
          console.log("Player Won")
          return console.log("Player Won")
        }
      }

      if(PlayersHand == DealersHand){
        ties += 1;
        console.log("Push")
        return console.log("Push")
      }
      else if(PlayersHand > DealersHand){
        PlayerWins(currentBet, Money);
        console.log("Player Wins")
        return console.log("Player Wins")
      }
      else if(PlayersHand < DealersHand){
        PlayerLooses(currentBet, Money);
        console.log("Player lost");
        return console.log("Player lost");
      }
    }

    //BlackJack
    function BlackJack(currentBet, Money){
      Money = Money + (currentBet * 1.5)
    }

    //Win
    function PlayerWins(currentBet, Money){
      Money = Money + currentBet;
      wins += 1;
    }

    //Loss
    function PlayerLooses(currentBet, Money){
      Money = Money - currentBet;
      losses += 1;
    }

    //PLAYER'S ALGORITHM 

    if (SoftPlayersHand == false){
      if ((PlayersHand == 11) || (PlayersHand == 10 && DealersCard <= 9) || (PlayersHand == 9 && 2 < DealersCard < 6)){
        //Double Down
        DoubleDown(PlayersHand);

      }

      else if (17 > PlayersHand > 12 && DealersCard >= 7){
        while (17 > PlayersHand){
          Hit(PlayersHand);
        }
        if(PlayersHand > 21){
          PlayerLooses(currentBet, Money);
        }
        else {
          Stand(PlayersHand);
        }
      }
      else if ((PlayersHand <= 8) || (PlayersHand == 9 && (DealersCard == 2 || 7 < DealersCard)) || (PlayersHand == 10 && DealersCard < 10) || (PlayersHand == 12 && (((DealersCard == 2) || (DealersCard == 3) || (7 <= DealersCard <= 11) || (13 <= PlayersHand <= 16 && 7 <= DealersCard <= 11))))){
        Hit(PlayersHand);

        while ((17 > PlayersHand >= 10) && (7 < DealersCard || (DealersCard == 3 || DealersCard == 2))){
          Hit(PlayersHand);
        }

        if (PlayersHand <= 21){
          Stand(PlayersHand);
        }
        else {
          PlayerLooses(currentBet, Money);
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
        DoubleDown(PlayersHand);      //WRONG

      }

      else if((PlayersHand == 19) || ((PlayersHand == 18) && (DealersCard != 6)) || ((PlayersHand == 17) && ((DealersCard == 7) || (DealersCard == 8)))){
        //Stand
        Stand(PlayersHand);
      }

      else {
        //Hit until we are > 17 and below 21, or if we are above 21, 11 turns into 1 and we keep hitting
        while(17 <= PlayersHand <= 21){
          Hit(PlayersHand);
        }
        if(PlayersHand > 21){
          PlayersHand = PlayersHand - 10;
          while(17 > PlayersHand){
            Hit(PlayersHand);
          }
          if(PlayersHand > 21){
            PlayerLooses(currentBet, Money);
          }
          else {
            Stand(PlayersHand);
          }
        }
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
    i += 1;
  }
  console.log("Wins: ", wins)
  console.log("Losses: ", losses)
  console.log("Ties: ", ties)
}

counter();
