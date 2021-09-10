# rattlerRace

### Description 
Inspired by 1976 snake video game, Blockade and 1991 Rattler Race created by Christopher Lee Fraley. Its a fast moving game in which, you, a snake try to eat all of the apples, but the more you eat the more you grow so try not to eat yourself.  

### ScreenShots

### Technologies Used
- JS, HTML/CSS

### Getting Started 
Use the arrow keys or the numeric keypad to movew the snake's head, try to eat all of the apples to advance to the next level 

### Next Steps
- track high scores 
- 

### Wireframe 

<a href="https://www.figma.com/file/k1247DzM2dWvngDV5vOdt4/RattlerRace?node-id=0%3A1" target="_blank">Rattler Race Wireframe</a>

### Pseudocode 

1) Define required constants
 1.1) define the size of the game board grid as well as an array of positions 
 1.2) snake's position on board
 1.3) apple's poition on board

2) Define required variables used to track the state of the game
 2.1) timer 
 2.2) lives: 3
 2.3) score: 1 point for each apple
 2.4) newgame 

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
  3.1) 

4) Upon loading the app should:
	4.1) Initialize the state variables
	4.2) Render those values to the page
	4.3) Wait for the user to click to start game and use keycodes to change the direction of the   snake 

5) Handle a player clicking the space bar to start the game
  5.1) timer starts counting down 
  5.2) snake position 
  5.3) snake eats apple 
    5.3a) increase the length of the snake and randomly position a new apple on board 
    5.3b) if snake eats itself, take away a life and check to see how many lives are left
    5.3c) if player hits the edges just bounce off?? 

6) Handle a player clicking the new game 
