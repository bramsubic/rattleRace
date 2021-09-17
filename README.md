# rattlerRace

### Description 
Inspired by 1991 Rattler Race created by Christopher Lee Fraley. Its a fast paced game in which, you try to eat all of the apples before the time is up.  

### ScreenShots

[![screenshot1](https://i.imgur.com/GrxR1h9.png)
[![screenshot2](https://i.imgur.com/oH4wNA1.png)
[![screenshot3](https://i.imgur.com/i1JVxD7.png)
[![screenshot4](https://i.imgur.com/ErOpDXi.png)
[![screenshot5](https://i.imgur.com/JGk7mtu.png)

### Technologies Used
- JS, HTML/CSS

### Getting Started 
Use the arrow keys or the buttons on the screen to move the snake, try to eat all 10 of the apples before the time is up to win!

### Next Steps
- get the snake to move on it's own 
- get the snake to grow every time it eats an apple
- randomly position new apples on the board
- set boundaries for the snakes move outcomes

### Wireframe 

<a href="https://www.figma.com/file/k1247DzM2dWvngDV5vOdt4/RattlerRace?node-id=0%3A1" target="_blank">Rattler Race Wireframe</a>

### Pseudocode 

- declare variables
- the timer 
- the game score
- the start position of the snake 
	- direction of the snake 
	- speed of the snake 
	- array containing the coordinates of the snakes body 
	- length of the snake 
- posiiton of the apple
- board 

- drawBoard 
- use an array to create a grid of 10 rows and 10 squares
- iterate through the board, and create 10 rows for each row create a class of divs
- iterate through the rows, and create 10 squares    

- play 
- will start the timer 
- position the 
- snakeOutcomes 
- when snake collides with apple it gets 1 point and a new apple appears on the board at a random position 
- if snake hits any of the four corners game is over 
- if snake hits itself game is over  

- applePosition 
- randomly place the apple on the board 
- check to see if a snake is not positioned in that index 

- render
- this function will update the board constantly to move the snake 
- check to see if the snake hasn't collided with anything 
- check to see if the snake has eated an apple 
- add a new apple 

- keycodes 
- add some event listeners on the keys to move the snake in different directions 
- check what key has been pressed and then change the direction and index of the snake 
