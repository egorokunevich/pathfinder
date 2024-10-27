# PATHFINDER

### Project description

This is my pet project — **Pathfinder** game, which is currently _Work in Progress_.

#### Game rules

The goal of the game is to choose the right "actions" sequence and reach the "goal" destination.
Considering also "lava" cells, which lead to game over.

#### User Interface

User Interface consists of **game field** and **task manager**.
Game field represents current player coordinates and view direction. The field itself consists of cells that have different colors representing it's nature: whether it is a wall, lava or desired destination.
Task manager have a bunch of available actions that player will sort in order to achieve a goal.

### Future Updates

There are some planned features for this project:

- [ ] Level selector
- [ ] More levels.
- [ ] Application styling.
- [ ] Responsive design.
- [ ] Settings for field UI (cell-size, gap, borders).
- [ ] Level editor

### Technology Stack

I am using `TypeScript`, `React`, `Next.js`, `Tailwind CSS`, `Zustand`.

- I started this project with Next.js. But i might switch to vanilla React, as this project is tends to be SPA.
- Zustand is used as state manager for player's coordinates, actions and current level data.
