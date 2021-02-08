//  Defining variables for the Flip or Flop
let moves;
let second = 0;
let minute = 0;
let hour = 0;
let interval;
let totalGameTime;
let overlayElement = document.getElementById('gameOverOverlay');
let totalMovesMade = document.getElementById('totalMoves');
let totalTimeTaken = document.getElementById('totalGameTime');
let flippedCards = [];
let matchedCards =  [];
let cards = document.getElementsByClassName('game-card');
let cardsArray = [...cards];
let cardFace = document.getElementsByClassName('game-card-img');
let cardFaceArray = [...cardFace];
let counter = document.getElementById('moveCounter');
let timer = document.getElementById('timer');

// Functions

// Shuffle Cards

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

// Start Game

function startGame() {
    let shuffledImages = shuffle(cardFaceArray);
    for(i=0; i<shuffledImages.length; i++) {
        cards[i].innerHTML = "";
        cards[i].appendChild(shuffledImages[i]);
        cards[i].type = `${shuffledImages[i].alt}`;
        cards[i].classList.remove("show", "open", "match", "disabled");
        cards[i].children[0].classList.remove("show-img");
    }

// Adding the event listener

for(let i = 0; i < cardsArray.length; i++) {
        cardsArray[i].addEventListener("click", displayCard);
    }


// Flash the cards at the start of the game

    flashCards();
    moves = 0;
    counter.innerText = moves + " move(s)";
    timer.innerHTML = '0 mins 0 secs';
    clearInterval(interval);
}

function flashCards() {
    for(i=0; i<cards.length; i++) {
        cards[i].children[0].classList.add("show-img");
    }
    setTimeout(function(){
        for(i=0; i<cards.length; i++) {
            cards[i].children[0].classList.remove("show-img");
        }
    }, 500);
}

// Display the cards

function displayCard() {
    this.children[0].classList.toggle('show-img');
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    clickedCard(this);
}

// The card chosen by the user

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

// If the card matches the clicked card

function matchingCards() {
    flippedCards[0].classList.add("match");
    flippedCards[1].classList.add("match");
    flippedCards[0].classList.remove("show", "open");
    flippedCards[1].classList.remove("show", "open");
    matchedCards.push(flippedCards[0]);
    matchedCards.push(flippedCards[1]);
    flippedCards = [];
    if(matchedCards.length == 16) {
        endGame();
    }
}

// If the card  does not match the clicked card

function nonMatchingCards() {
    flippedCards[0].classList.add("unmatched");
    flippedCards[1].classList.add("unmatched");
    disableCard();
    setTimeout(function() {
        flippedCards[0].classList.remove("show", "open", "unmatched");
        flippedCards[1].classList.remove("show", "open", "unmatched");
        flippedCards[0].children[0].classList.remove('show-img');
        flippedCards[1].children[0].classList.remove('show-img');
        enableCard();
        flippedCards = [];
    }, 1100);
}

function disableCard() {
    cardsArray.filter((card, i, cardsArray) => {
        card.classList.add('disabled');
    });
}
function enableCard() {
    cardsArray.filter((card, i, cardsArray) => {
        card.classList.remove('disabled');
        for(let i=0; i<matchedCards.length; i++) {
            matchedCards[i].classList.add('disabled');
        }
    });
}

// Starting the game timer

function startTimer() {
    interval = setInterval(function(){
        timer.innerHTML = minute + " mins " + second + " secs";
        second++;
        if(second == 60) {
            minute++;
            second = 0;
        }
        if(minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

// Total moves counter

function totalMoves() {
    moves++;
    counter.innerHTML = moves + " move(s)";
    if(moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

// End game including overlay

function endGame() {
    clearInterval(interval);
    totalGameTime = timer.innerHTML;
    overlayElement.classList.add("show-overlay");
    totalTimeTaken.innerHTML = totalGameTime;
    totalMovesMade.innerHTML = moves;
    matchedCards = [];
}

// Restart the game once complete

function playAgain() {
    overlayElement.classList.remove("show-overlay");
    startGame();
}

window.onload = function () {
    setTimeout(function() {
        startGame();
    }, 1200);
};

 