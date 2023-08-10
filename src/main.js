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
  let Decks = 100000;

  let deck = ["Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10];

  let CardsDealt = deck.length;

  while(i < NumberOfRounds){

    let Splitting = false;
    let Hands = [];

    let TrueCount = RunningCount / Decks;

    let SoftPlayersHand = false; 
    let SoftDealersHand = false;
    let DoubleAces = false;

    function GetRandomCard() {

      let RandomSelectedNumber = (Math.floor(Math.random() * (CardsDealt - 1)) + 1)

      let RandomCard = deck[RandomSelectedNumber];

      deck.splice(RandomSelectedNumber, 1);

      console.log(RandomCard);

      CardsDealt = deck.length;

      if([2,3,4,5,6].includes(RandomCard)){
        RunningCount += 1;
      }
      else if([10,"Ace"].includes(RandomCard)){
        RunningCount -= 1;
      }
      
      if(CardsDealt <= 5){
        Decks -= 1;
        deck = ["Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10,"Ace",2,3,4,5,6,7,8,9,10,10,10,10];
        CardsDealt = deck.length;
        console.log(`There are ${Decks} decks left!`)
        if (Decks <= 0){
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
    let SecondCard = FirstCard;   //FIX LATER!!!!!!!!!!!!!
    console.log(SecondCard)

    if(FirstCard == SecondCard){
      Splitting = true;
    }

    if ((FirstCard == "Ace" && SecondCard == "Ace")){
      SoftPlayersHand = true;
      DoubleAces = true;
      FirstCard = 11;
      SecondCard = 1;
    }

    if (FirstCard == "Ace"){
      SoftPlayersHand = true; 
      if (SecondCard <= 10){
        FirstCard = 11;
      }
      else {
        FirstCard = 1;
      }
    }

    if (SecondCard == "Ace"){
      SoftPlayersHand = true; 
      if (FirstCard <= 10){
        SecondCard = 11;
      }
      else {
        SecondCard = 1;
      }
    }

    let PlayersHand = FirstCard + SecondCard;
    Hands = [PlayersHand];

    //PLAING OPTIONS

    //Hit
    function Hit(PlayersHand) {
      let ThirdCard = GetRandomCard();

      if (ThirdCard == "Ace"){
        if (PlayersHand <= 10){ 
          ThirdCard = 11;
          SoftPlayersHand = true;
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
      currentBet = currentBet * 2;
      PlayersHand = Hit(PlayersHand);
      Stand(PlayersHand);
      return PlayersHand
    }

    //Stand
    function Stand(PlayersHand){

      let SecondDealersCard = GetRandomCard();

      if(SecondDealersCard == "Ace"){
        SecondDealersCard = 11;
      }

      let DealersHand = DealersCard + SecondDealersCard;

      if (PlayersHand == "BlackJack"){
        if(DealersHand == 21){
          //Push
          SoftPlayersHand = false;
          ties += 1;
          return;
        }
        else {
          BlackJack(currentBet);
          return;
        }
      }

      while (DealersHand < 17){
        DealersHand = Hit(DealersHand);
      }

      if((DealersHand > 21) && (SoftDealersHand == false)){
        PlayerWins(currentBet);
        return;
      }

      else if((DealersHand > 21) && (SoftDealersHand == true)){
        DealersHand = DealersHand - 10; 
        while (DealersHand < 17){
          DealersHand = Hit(DealersHand);
        }
        if(DealersHand > 21){
          PlayerWins(currentBet);
          return;
        }
      }

      if(PlayersHand == DealersHand){
        SoftPlayersHand = false;
        ties += 1;
        return;
      }
      else if(PlayersHand > DealersHand){
        PlayerWins(currentBet);
        return;
      }
      else if(PlayersHand < DealersHand){
        PlayerLooses(currentBet);
        return;
      }
      else {
        console.log("ERR: se mamó 2")
      }
    }

    function Split(FirstCard, SecondCard, SoftPlayersHand){
      let FirstCard1 = FirstCard;
      let FirstCard2 = SecondCard;
      let SecondCard1 = GetRandomCard();
      let SecondCard2 = GetRandomCard();

      let FirstSoft = false;
      let SecondSoft = false;

      if(SoftPlayersHand == true){
        if(FirstCard1 == 11){
          //FirstCard is Ace
          FirstSoft = true;
        }
        if((FirstCard2 == 11) || (FirstCard2 == 1)){
          //SecondCard is Ace
          SecondSoft = true;
          if(FirstCard2 = 1){
            FirstCard2 = 11;
          }
        }
      }

      if ((FirstCard1 == 11 && SecondCard1 == "Ace")){
        FirstSoft = true;
        FirstCard1 = 11;
        SecondCard1 = 1;
      }

      if ((FirstCard2 == 11 && SecondCard2 == "Ace")){
        SecondSoft = true;
        FirstCard2 = 11;
        SecondCard2 = 1;
      }

      if(SecondCard1 == "Ace"){
        FirstSoft = true;
        if (FirstCard1 <= 10){
          SecondCard1 = 11;
        }
        else {
          SecondCard1 = 1;
        }
      }
      if(SecondCard2 == "Ace"){
        SecondSoft = true;
        if (FirstCard2 <= 10){
          SecondCard2 = 11;
        }
        else {
          SecondCard2 = 1;
        }
      }

      let PlayersHand1 = FirstCard1 + SecondCard1;
      let PlayersHand2 = FirstCard2 + SecondCard2;

      return [PlayersHand1, PlayersHand2], FirstSoft, SecondSoft;
    }

    //BlackJack
    function BlackJack(currentBet){
      Money += (currentBet * 1.5);
      SoftPlayersHand = false;
      wins += 1;
      return;
    }

    //Win
    function PlayerWins(currentBet){
      Money += currentBet;
      SoftPlayersHand = false;
      wins += 1;
      return;
    }

    //Loss
    function PlayerLooses(currentBet){
      Money -= currentBet;
      losses += 1;
      return;
    }

    //Splitting
    if(Splitting == true){   
      if((DoubleAces == true) || (PlayersHand == 16) || ((PlayersHand == 18) && (((2 <= DealersCard) && (DealersCard <= 6)) || ((DealersCard == 8) || (DealersCard == 9)))) || ((PlayersHand == 14) && ((DealersCard >= 2) && (DealersCard <= 7))) || ((PlayersHand == 12) && ((2 <= DealersCard) && (DealersCard <= 6))) || (((PlayersHand == 6) || (PlayersHand == 4)) && ((2 <= DealersCard) && (DealersCard <= 7)))){
          Hands, FirstSoft, SecondSoft = Split(FirstCard, SecondCard, SoftPlayersHand);
      }
    }


    //PLAYER'S ALGORITHM
    
    for (let l = 0; l < Hands.length; l++) {
      PlayersHand = Hands[l];
      if(Hands.length == 2){
        if(l == 1){
          SoftPlayersHand = FirstSoft;
        }
        if(l == 2){
          SoftPlayersHand = SecondSoft;
        }
      }
      if (SoftPlayersHand == false){
        if ((PlayersHand == 11) || ((PlayersHand == 10) && (DealersCard <= 9)) || ((PlayersHand == 9) && ((2 < DealersCard) && (DealersCard < 6)))){
          //Double Down
          PlayersHand = DoubleDown(PlayersHand);

        }
        else if (17 > PlayersHand > 12 && DealersCard >= 7){
          while (17 > PlayersHand){
            PlayersHand = Hit(PlayersHand);
          }
          if(PlayersHand > 21){
            PlayerLooses(currentBet);
          }
          else {
            Stand(PlayersHand);
          }
        }
        else if ((PlayersHand <= 8) || (PlayersHand == 9 && ((DealersCard == 2) || (7 <= DealersCard))) || (PlayersHand == 10 && DealersCard >= 10) || (PlayersHand == 12 && ((DealersCard == 2) || (DealersCard == 3) || ((7 <= DealersCard) && (DealersCard <= 11))) || (((13 <= PlayersHand) && (PlayersHand <= 16)) && (7 <= DealersCard)))){
          PlayersHand = Hit(PlayersHand);

          while ((PlayersHand == 11) || (PlayersHand == 9 && ((2 < DealersCard) && (DealersCard < 6))) || (PlayersHand == 10 && DealersCard <= 9) || (PlayersHand <= 8) || (PlayersHand == 9 && ((DealersCard == 2) || (7 <= DealersCard))) || (PlayersHand == 10 && DealersCard >= 10) || (PlayersHand == 12 && ((DealersCard == 2) || (DealersCard == 3) || ((7 <= DealersCard) && (DealersCard <= 11))) || (((13 <= PlayersHand) && (PlayersHand <= 16)) && (7 <= DealersCard)))){
            PlayersHand = Hit(PlayersHand);
          }

          if (PlayersHand <= 21){
            Stand(PlayersHand);
          }
          else {
            PlayerLooses(currentBet);
          }
        }
        else if ((PlayersHand >= 17) || (((13 <= PlayersHand) && (PlayersHand <= 16)) && ((2 <= DealersCard) && (DealersCard <= 6))) || (PlayersHand == 12 && ((4 <= DealersCard) && (DealersCard <= 6)))){
          Stand(PlayersHand);
        }
      }
      if (SoftPlayersHand == true){

        if(PlayersHand == 21){
          //BlackJack
          PlayersHand = "BlackJack";
          Stand(PlayersHand);
        }

        else if((((18 >= PlayersHand) && (PlayersHand >= 13)) && ((DealersCard == 5) || (DealersCard == 6))) || (PlayersHand == 19 && DealersCard == 6) || (((15 <= PlayersHand) && (PlayersHand <= 18)) && (DealersCard == 4)) || (((PlayersHand == 17) || (PlayersHand == 18)) && (DealersCard == 3))){
          // Double Down
          PlayersHand = DoubleDown(PlayersHand);      //WRONG

        }

        else if((PlayersHand == 19) || ((PlayersHand == 18) && (DealersCard != 6)) || ((PlayersHand == 17) && ((DealersCard == 7) || (DealersCard == 8)))){
          //Stand
          Stand(PlayersHand);
        }

        else {
          //Hit
          while(17 >= PlayersHand){
            PlayersHand = Hit(PlayersHand);
          }
          if(PlayersHand > 21){
            PlayersHand = PlayersHand - 10;
            while(17 > PlayersHand){
              PlayersHand = Hit(PlayersHand);
            }
            if(PlayersHand > 21){
              PlayerLooses(currentBet);
            }
            else {
              Stand(PlayersHand);
            }
          }
          else {
            Stand(PlayersHand);
          }
        }
      }
    }
    if(Decks <= 0){
      break;
    }

    if (TrueCount < 1){
      currentBet = 5;
    }
    else if ((1 < TrueCount) && (TrueCount < 2)){
      currentBet = 300;
    }
    else if (2 < TrueCount && TrueCount < 3){         
      currentBet = 500; 
    }
    else if (3 < TrueCount && TrueCount < 4){
      currentBet = 1000;
    }
    else if (4 < TrueCount && TrueCount < 5){
      currentBet = 1500;
    }
    else if (5 < TrueCount && TrueCount < 6){
      currentBet = 2000;
    }
    else if (TrueCount > 6){
      currentBet = 3000;
    }
    //console.log("Running Count: ", RunningCount)
    //console.log("True Count: ", TrueCount);
    //console.log(currentBet)
    i += 1;
  }
  console.log("Wins: ", wins)
  console.log("Losses: ", losses)
  console.log("Ties: ", ties)
  console.log("Money: ", Money)
}

counter();
