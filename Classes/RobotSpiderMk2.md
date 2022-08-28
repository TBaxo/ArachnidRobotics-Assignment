# The Robot Spider Mark 2


## Assumptions

### Robot Headings
Because the robot is only needing to work in a 2-dimensional space, I decided to label each direction it could be moving as a local North, South, East, or West. 

Since the start position of a grid is specified  (as0,0) I decided to go with the following spec:

Given that the robot is pointing a direction and a `F` command is received, the following will happen:
```
(0,0) North = (0, 1);
(0,0) South = (0, -1);
(0,0) East = (1, 0);
(0,0) West = (-1, 0);
```

### Turning
When and an L or R command is received the robot will turn counter-clockwise or clockwise respectively. 