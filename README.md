# Virus smack

## Description
Survive the Virus is a game where the player has to click quickly on the appearing virus images, before all squares fills up. The game ends if all squares are full or time is up(1min). Game is cleared/won if the player survives all 3 levels.

## MVP (DOM - CANVAS)
3 levels; 3 lives; Scores every time hitting the virus; Virus images pop up from 6 holes, which needs to be killed; Avoid killing green virus; Game over: all 6 holes are full; Losing lives: hitting 3 times green virus; Instruction at the begining. Able to restart the game; Background music;

## Backlog
Increase level difficulty.
Make green virus;

## Data structure
### main()
splashScreen()
startGame()
endGame()

### game()
drawCanvas()
addVirus()
addGreenVirus()
addEvents()
updateCanvas()
clearCanvas()

### viruses()
draw()
move()
click()
interval()

### event()
mouseClick()

## States y States Transitions
- splashScreen(a simple screen with an image and start button)
- gameScreen (6 holes and appearing viruses in them)
- gameoverScreen (score; lives that are left and GAME OVER text, restart button)
- winScreen (same as gameover screen just with WIN text)

## Task
### Try out:
Build canvas;
Build simple shapes and try out mechanics;
### Main:
create screens;
create buttons;
event;
### Game:
update canvas;
import images;
### Virus
create image;
import images;
add events;
### Extra:
music;
extra buttons;
style;
extra virus;
lives;
score;

## Links
### Trello
[Link url](https://trello.com/invite/b/75q4wPf9/9a00544a48e8c5cbcffda32300561dd6/ironhack-1-game)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/AruneM/Game)
[Link Deploy](https://arunem.GitHub.io/Game)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1pOnBN7Y_OhmQIAU25LWVM6cR_oLMidFKhg8r5FTKRLk/edit?usp=sharing)
