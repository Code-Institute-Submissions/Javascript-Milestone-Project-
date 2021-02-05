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
function shuffle(array) {
    let currentIndex = array.length,
        interimValue,
        randomIndex;
    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        interimValue = array[currentIndex];
    }
    return array;
}