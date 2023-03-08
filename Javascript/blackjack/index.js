
const stand = document.getElementById('stand-button');
const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const getRank = rank =>{
  if(rank === 'ace'){
    return  1;
  }
  if(rank === 'jack' || rank === 'queen' || rank === 'king'){
    return 10;
  }
  if(!isNaN(rank)){
    return rank;
  }
};
  



const makeDeck = ()=>{
  const suits = ["hearts", "spades", "clubs", "diamonds"];
  const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
  let deck = [];
  for(let suit of suits){
    for(const rank of ranks){
      const card = {
        rank,
        suit,
        pointValue: getRank(rank),
      }
      deck.push(card);
    }
  }
  return deck;
}

const deck = makeDeck();

    const outPut = document.createElement("div");
    const doFirstDeal = () =>{
      let recipient = 'player';
      for(let i = 0; i < 4; i++){
        renderCard(deck.pop(), recipient);
        if(recipient ==='player'){
          recipient = 'dealer';
        }else{
          recipient = 'player';
        }
      }
    }
   

    const cardCount = {
      dealer: 1,
      player: 1
    };

    const renderCard = (card, recipient) => {
      const img = document.createElement('img');
      const url = `./img/images/${card.rank}_of_${card.suit}.png`
      img.src = url;
      const cardId = `${recipient}-${cardCount[recipient]}`;

      if(recipient === 'player'){
        dealerHand.appendChild(img);

      }else {
        playerHand.appendChild(img);
      }
    }

    const handleClick = (e) => {
      const type = e.target.id;
      if(type === 'deal'){
           doFirstDeal();
      }else{
        renderCard(deck.pop(), 'player')
      }
      if(dealerHand.length > 1){
        // const hiddenCard = 
      }
      
    }

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
  const deal = document.getElementById('deal-button');
  deal.onclick = handleClick;
  const hit = document.getElementById('hit-button');
  hit.onclick = handleClick;
});


 
 







