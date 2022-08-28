import { Point } from "./classes/Point";
import { RobotSpiderMk1 } from "./classes/RobotSpiderMk1";
import { countCharacters } from "./Utils/countCharacters";
import PromptSync, {  } from "prompt-sync";


const prompt = PromptSync();

const startingPositionX: number = Number(prompt('What is the starting x co-ordinate?: '));
if (Number.isNaN(startingPositionX)) throw "Invalid X co-ordinate";

const startingPositionY: number = Number(prompt('What is the starting y co-ordinate?: '));
if (Number.isNaN(startingPositionY)) throw "Invalid Y co-ordinate";

const commands: string = prompt('Please enter your set of commands: ');

const startPosition = new Point(startingPositionX, startingPositionY);
const robot = new RobotSpiderMk1(startPosition);

robot.applyCommands(commands);

console.log(`The final co-ordinates of the robot is: (${robot.position.x}, ${robot.position.y})`);



