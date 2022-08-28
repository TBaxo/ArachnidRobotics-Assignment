# The Robot Spider Mark 1


## Assumptions

### Interpretting Commands
The first assumption I had to make was how the different commands interacted with the spider robot, I have gone with the following:

Assuming that (0,0) is the top left of a quadrant of the space:
```
(0,0) F = (0, 1);
(0,0) B = (0, -1);
(0,0) R = (1, 0);
(0,0) L = (-1, 0);
```


# Current Issues
After re-reading the spec, it's clear the space (0,0) was meant to be the bottom of the grid instead of the top. 

An issue has been raised for this, which you can track [here](https://github.com/TBaxo/ArachnidRobotics-Assignment/issues/1).