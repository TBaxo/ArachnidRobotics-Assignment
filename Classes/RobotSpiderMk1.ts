import * as readline from "readline"
import { Point } from "./Point";


const robotActionsDictionary : Record<string, Point> = {
    'F': new Point(0, 1),
    'B': new Point(0, -1),
    'R': new Point(1, 0),
    'L': new Point(-1, 0)

}

const actionKeys = Object.keys(robotActionsDictionary);

export class RobotSpiderMk1 {
    position: Point;

    constructor(startingPosition : Point) {
        this.position = startingPosition;
    }

    applyCommands(commands: string) { 
        
        for (const command of commands)
        { 
            if (!(actionKeys.includes(command))) throw "Invalid Action";
            this.position.Add(robotActionsDictionary[command]);
        }
        
        
    }
}  