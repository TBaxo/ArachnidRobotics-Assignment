# ArachnidRobotics-Assignment




# How to run 
Firstly, open up a console and navigate to the working directly. install all dependencies using yarn like so:
```
yarn install
```

Now you can run the following command which can be fond in `package.json`:
```
yarn run start
```

You will then be asked to enter the starting co-ordinates and a set of commands in the format given in the spec.

# Assumptions

## Interpretting Commands
The first assumption I had to make was how the different commands interacted with the spider robot, I have gone with the following:

Assuming that (0,0) is the top left of a quadrant of the space:
```
(0,0) F = (0, 1);
(0,0) B = (0, -1);
(0,0) R = (1, 0);
(0,0) L = (-1, 0);
```


# Testing
I installed jest and ts-jest for handling unit tests, these can be run with yarn by using the command:
```
yarn run test
```
