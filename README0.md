
# Classic Arcade Game Project
---

### Get Started
Open the file **index.html** from your browser and start playing. The arrows are the only keys allowed in the game, and you can use them to move the player.


### Game Rules
The following are the game rules:-
- The player can't move out of the game borders.
- The player should reach to the river in order to score a point.
- The player shouldn't be hit by any of the enemies. _(if the player gets hit by any of the enemies, your points will be reset to zero)_
- The maximum consecutive points you manage to score is your final score.  


### How to Play The game
When you open **index.html**, the player will be placed in the middle of last row. You should move the player using the following arrows in the keyboard:

- up
- down
- left
- right
Once you reach the river, you'll score a point and return to the starting point. All enemies are coming from the left to the right with varying speeds.

Watch out :)

### About The Code
The code is written in modular way such that it is totally independent of the Canvas specification. In other words, we might increase the number of blocks and the size of the canvas and the will be robust and will work fine.

Moreover, you can use the following global variables provided in **app.js** in order reduce or increase the difficulty of the game.
```
var generateRatio = 1.5;
var enemyPlayerHitAccuracy = 50;
var maxEnemySpeed = 400;
```  
1. **generateRatio** determines how frequent you want to generate enemies in the game. The larger the value, the more enemies you'll have in the game.

2. **enemyPlayerHitAccuracy** determines how accurate you want the collision detection. The smaller the number, the less accurate it is (the enemy needs to overlap the player to detect the collision).

3. **maxEnemySpeed** determines the maximum possible speed for an enemy.

---

**I hope you like and enjoy the game :)**
