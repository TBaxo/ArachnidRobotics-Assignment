import { Point } from "./classes/Point";
import { RobotSpiderMk1 } from "./classes/RobotSpiderMk1";
import { countCharacters } from "./Utils/countCharacters";
import PromptSync, {  } from "prompt-sync";
import { IRobotSpider } from "./interfaces/IRobotSpider";
import { Heading, RobotSpiderMk2 } from "./classes/RobotSpiderMk2";

const prompt = PromptSync();

//Default value of 2
const getRobot = (robotVersion: number, startPosition: Point): IRobotSpider => { 
    if (robotVersion == 1) return new RobotSpiderMk1(startPosition);

    return new RobotSpiderMk2(startPosition, Heading.North);
}

const robotVersion: number = Number(prompt('What version of spider are you running (currently support 1 and 2): '));
if (Number.isNaN(robotVersion)) throw "Invalid X co-ordinate";

const startingPositionX: number = Number(prompt('What is the starting x co-ordinate?: '));
if (Number.isNaN(startingPositionX)) throw "Invalid X co-ordinate";

const startingPositionY: number = Number(prompt('What is the starting y co-ordinate?: '));
if (Number.isNaN(startingPositionY)) throw "Invalid Y co-ordinate";

const commands: string = prompt('Please enter your set of commands: ');


const startPosition = new Point(startingPositionX, startingPositionY);
const robot = getRobot(robotVersion, startPosition);

robot.applyCommands(commands);

console.log(`The final co-ordinates of the robot is: (${robot.position.x}, ${robot.position.y})`);



