let board;
let currentIndex = 0;
let appleIndex;
let currentSnake;
let score;
let speed = 0.8;
let sec = 10;
let time;

let gameBoardEl = document.querySelector(".grid");
let playAgain = document.querySelector(".playAgain");
let scoreDisplay = document.querySelector(".scoreDisplay");
let winMsg = document.getElementById('winmsg');
let loseMsg = document.getElementById('losemsg');
let left = document.querySelector(".left");
let down = document.querySelector(".down")
let right = document.querySelector(".right");
let up = document.querySelector(".up");

let helpEl = document.getElementById("help")
let overlayEl = document.getElementById("overlay")

function on() {
  overlayEl.style.display = "block";
}
on()

function off() {
  overlayEl.style.display = "none";
}
off()

function init() {
     board = [
        [1, 0, 0, 0, 0, 0, 0, 0, -1, 0],
        [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],    
        [0, -1, 0, 0, 0, 0, 0, 0, -1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, -1, 0, 0, 0, 0], 
        [-1, 0, 0, 0, 0, 0, 0, -1, 0, 0],
        [0, -1, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, -1, 0, 0, 0, 0, -1],
    ]
    drawGrid()
    render()
}   

document.addEventListener("DOMContentLoaded", function () {
      document.addEventListener("keydown", control);
      playAgain.addEventListener("click", replay);
      helpEl.addEventListener("click", on);
      overlayEl.addEventListener("click", off);
});

function drawGrid() {
    board.forEach((row, rId) => {
        let rowEl = document.createElement('div')   
        rowEl.classList.add('row')                                       
        row.forEach((square, sId) => {                              
            let squareEl = document.createElement('div')   
            squareEl.classList.add('square')         
           squareEl.id =`s-${rId}-${sId}`              
            rowEl.appendChild(squareEl)                  
        })
        gameBoardEl.appendChild(rowEl)             
    })
}

function render() {
    board.forEach((row, rId) => {
        row.forEach((square, sId) => {
            if  (square === 0) { 
            document.getElementById(`s-${rId}-${sId}`).classList.remove("snake")
            } else if  (square > 0) { 
            document.getElementById(`s-${rId}-${sId}`).classList.add("snake")
            } else if (square < 0) {
            document.getElementById(`s-${rId}-${sId}`).classList.add("apple")
            }
        })
    }) 
}

function startGame() {
  let squares = document.querySelectorAll(".grid div");
  score = 0
  scoreDisplay.innerHTML = score;
  sec = 10
  currentSnake =  {r: 0, s: 0}
  currentApple = {r: 5, s:7}
  currentIndex = 0;
  document.getElementById(`s-${currentSnake.r}-${currentSnake.s}`).classList.add("snake");
  document.getElementById(`s-${currentApple.r}-${currentApple.s}`).classList.add("apple");
}

function win() {
    if (score == 10) {
      winMsg.innerText = "You Win!"
  }
}

right.addEventListener("click", moveRight);
left.addEventListener("click", moveLeft);
up.addEventListener("click", moveUp);
down.addEventListener("click", moveDown);

function moveRight(squares) {        
    board[currentSnake.r][currentSnake.s] = 0
    currentSnake.s += 1
    eatApple()
    board[currentSnake.r][currentSnake.s] = 1
    render() 
    win()
}

function moveLeft(squares) {
  board[currentSnake.r][currentSnake.s] = 0
  currentSnake.s -= 1
  eatApple()
  board[currentSnake.r][currentSnake.s] = 1
  render()
  win()
}

function moveDown() {
  board[currentSnake.r][currentSnake.s] = 0
  currentSnake.r += 1
  eatApple()
  board[currentSnake.r][currentSnake.s] = 1
  render()
  win()
}

function moveUp() {
  board[currentSnake.r][currentSnake.s] = 0
  currentSnake.r -= 1
  eatApple()
  board[currentSnake.r][currentSnake.s] = 1
  render()
  win()
}

function control(e) {
  if (e.keyCode == '39') {
    board[currentSnake.r][currentSnake.s] = 0
    currentSnake.s += 1
    eatApple()
    board[currentSnake.r][currentSnake.s] = 1
    render() 
    win()
  } else if (e.keyCode == '38') {
    board[currentSnake.r][currentSnake.s] = 0
    currentSnake.r -= 1
    eatApple()
    board[currentSnake.r][currentSnake.s] = 1
    render()
    win()
  } else if (e.keyCode == '37') {
    board[currentSnake.r][currentSnake.s] = 0
    currentSnake.s -= 1
    eatApple()
    board[currentSnake.r][currentSnake.s] = 1
    render()
    win()
  } else if (e.keyCode == '40') {
    board[currentSnake.r][currentSnake.s] = 0
    currentSnake.r += 1
    eatApple()
    board[currentSnake.r][currentSnake.s] = 1
    render()
    win()
  }
}

function eatApple(squares) {
  if ((board[currentSnake.r][currentSnake.s]) == -1) {
    document.getElementById(`s-${currentSnake.r}-${currentSnake.s}`).classList.remove("apple")
    score++;
    scoreDisplay.textContent = score;
  }
}

// time = setInterval(myTimer, 1000);
// function myTimer() {
//     document.getElementById('timer').innerHTML = sec + "s";
//     sec--;
//     if (sec == -1) {
//         clearInterval(time);
//         winMsg.innerText = "You Lose!";
//     } 
// }

function replay() {
  gameBoardEl.innerHTML = "";
  winMsg.innerText = "";
  loseMsg.innerText = "";
  drawGrid()
  startGame()
  render()
}

init()