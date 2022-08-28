import { cp } from "fs";
import { Point } from "./Point";
import { IRobotSpider } from "../interfaces/IRobotSpider";


export enum Heading { North, East, South, West }

const robotActionsDictionary : Record<Heading, Point> = {
    [Heading.North]:  new Point(0, 1),
    [Heading.South]:  new Point(0, -1),
    [Heading.East]:   new Point(1, 0),
    [Heading.West]:   new Point(-1, 0)

}

const actionKeys = Object.keys(robotActionsDictionary);

export class RobotSpiderMk2 implements IRobotSpider {
    heading: Heading
    position: Point;

    constructor(startingPosition : Point, startingHeading: Heading) {
        this.position = startingPosition;
        this.heading = startingHeading;
    }


    public applyCommands(commands: string) : void { 
        
        for (const command of commands)
        {
            

            switch (command) {
                case 'F':
                    this.move();
                    break;
                case 'B':
                    this.turn('L');
                    this.turn('L');
                    this.move();
                    break;
                case 'R':
                    this.turn('R');
                    break;
                case 'L':
                    this.turn('L');
                    break;
                default:
                    throw `Invalid Command ${command}`;

            }
        }
    }

    private move() {
        const newPosition = this.position.Add(robotActionsDictionary[this.heading]);

        if (newPosition.x < 0) newPosition.x = 0;
        
        if (newPosition.y < 0) newPosition.y = 0;

        this.position = newPosition;
    }


    private turn(command: string) { 

        //Added this as it corrects for negative numbers e.g. -1 mod 4 becomes 3
        const mod = (n, m) => ((n % m) + m) % m;

        if (command === "R")
        { 
            this.heading = mod(this.heading + 1, 4);
            return;
        }

        this.heading = mod(this.heading - 1, 4);
    }
}  