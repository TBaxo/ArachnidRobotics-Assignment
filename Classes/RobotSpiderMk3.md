# The Robot Spider Mark 3


## Assumptions

All the assumptions made in for the Mk2 are also made for the Mk3 robot. You can find the documenation to that [here](Classes/RobotSpiderMk2.md).

### What happens when you run out of boost?
In this case the robot will keep going on, but will be clamped at moving it's basic speed.


### What happens when you try and over-boost?
If you enter the command `6F` or higher then the robot will consider this the same as a `5F` command.

### What happens when you ask for more boost than you can give?
If your robot has 3 fuel and you enter the command `5F`, the robot will consider this the same as a `3F` command.


## Some possible improvements
I think that as it is the robots are fine, especially the simpler Mk1 and Mk2 robots as they perform very simple task. I've also not reused any code between robots as they should be able to change independently of each other. Below I've added some interesting extensions I think could be added in the future:

### Command Register
At the moment we only let robots use a hard-coded set of commands for that robot version, and each time new commands are added, a new version needs to be created. 

We could instead define a command register function which lets users pass in their own symbol and callback functions which interact with the state of the robot. 

### Extension through addition instead of inheritance 

One problem I can see happening is that if you add a Mk4 and Mk5 the functionality starts getting mroe and more complicated especially since we're updating what is essentially the same functions over and over again. This may be justfied if there is some huge breaking change like the difference between Mk1 and Mk2, but the difference between Mk2 and Mk3 is not that large.

I think a good way to go about this would be to add a sort of middleware extension to the class, that way we can "extend" the class without having to write a new version every single time.

We could do this by defining a base class for key versions and then allowing multiple children of that base class, or we could create a plugin framework which would let us add middleware into the key versions kind of like how you extend `GameObjects` in certain game engines. 
