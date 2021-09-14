/*----- constants -----*/
// gameBoard array 

/*----- app's state (variables) -----*/
// score, speed, snakeBody, snakePosition, apple, applePosition 
let score = 0 
let speed; 
let snakeBody; 
let snakePosition; 
let apple; 
let board; 


/*----- cached element references -----*/
//select the board, score, and the start and restart button 
let gameBoardEl = document.getElementById('gameboard'); 
let scoreEl = document.getElementById('score');
let startEl = document.getElementById('start')
let restartEl = document.getElementById('restart')

/*----- event listeners -----*/
// keycodes so when the key is pressed the direction changes (function executes)
// listen for a click to start the game and restart the game 
// listen for a click to change the direction of the snake 

/*----- functions -----*/
// initialize the board 
function init() {
     board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    ]
    drawGrid()
}

// draw snake grid  
function drawGrid() {
    board.forEach((row, rId) => {
        let rowEl = document.createElement('div')
        rowEl.classList.add('row')
        row.forEach((square, sId) => {
            let squareEl = document.createElement('div')
            squareEl.classList.add('square')
            rowEl.appendChild(squareEl)
        })
        gameBoardEl.appendChild(rowEl)
    })
}

// keycode function 
// set a variable to deal with the direction of the snake
// setInterval to execute a function 

// move snake in directions 

// start game and restart game 

// randomly generate an apple 
// make sure it doesnt appear where the snake is 
// Math.floor(Math.random() * max)

// snake outcomes 

    // if snake eats apple 
        // attach apple to snake body 
        // score will increase by 1 
        // display score on dom 
        
    // else snake hitting self 
    // else snake hitting border  top, right, bottom, left 

// what happens if snake hits anything other than an apple? 
    // interval ends and score goes back to 0 
    // snake loses all of the apples 
    // direction of the snake restarts 

    // what happens to the snake 
// loses all of the apples from the tail 
// direction of the snake restarts
init()