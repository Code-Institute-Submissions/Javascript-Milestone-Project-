//  Defining variables for the main game
let moves;
let second = 0;
let minute = 0;
let hour = 0;
let interval;
let totalGameTime;
let overlayElement = document.getElementById('gameOverOverlay');
let totalMovesMade = document.getElementById('totalGameMoves');
let totalTimeTaken = document.getElementById('totalGameTime');
let closeOverlayIcon = document.getElementById('closeOverlay');
let flippedCards = [];
let matchedCards =  [];
let cards = document.getElementsByClassName('game-card');
let cardsArray = [...cards];
let cardFace = document.getElementsByClassName('game-card-img');
let cardFaceArray = [...cardFace];
let counter = document.getElementById('moveCounter');
let timer = document.getElementById('timer');

// Functions

function shuffle(array) {
    let currentIndex = array.length,
        interimValue,
        randomIndex;
    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        interimValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = interimValue;
    }
    return array;
}

function startGame() {
    let shuffledImages = shuffle(cardFaceArray);
    for(i=0; i<shuffledImages.length; i++) {
        cards[i].innerHTML = "";
        cards[i].appendChild(shuffledImages[i]);
        cards[i].type = `${shuffledImages[i].alt}`;
        cards[i].classList.remove("show", "open", "match", "disabled");
        cards[i].children[0].classList.remove("show-img");
    }

for(let i = 0; i < cardsArray.length; i++) {
        cardsArray[i].addEventListener("click", displayCard)
    }

    flashCards();
    moves = 0;
    counter.innerText = `${moves} move(s)`;
    timer.innerHTML = '0 mins 0 secs';
    clearInterval(interval);
}

function flashCards() {
    for(i=0; i<cards.length; i++) {
        cards[i].children[0].classList.add("show-img")
    }
    setTimeout(function(){
        for(i=0; i<cards.length; i++) {
            cards[i].children[0].classList.remove("show-img")
        }
    }, 1000)
}

function displayCard() {
    this.children[0].classList.toggle('show-img');
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    clickedCard(this);
}

function clickedCard(card) {
    flippedCards.push(card);
    let len = flippedCards.length;
    if(len === 2) {
        totalMoves();
        if(flippedCards[0].type === flippedCards[1].type) {
            matchingCards();
        } else {
            nonMatchingCards();
        }
    }
}