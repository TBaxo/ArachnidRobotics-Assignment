import { cp } from "fs";
import { Point } from "./Point";
import { IRobotSpider } from "../interfaces/IRobotSpider";
import { timingSafeEqual } from "crypto";
import { Heading, IRotatingRobotSpider } from "../interfaces/IRotatingRobotSpider";



const robotActionsDictionary : Record<Heading, Point> = {
    [Heading.North]:  new Point(0, 1),
    [Heading.South]:  new Point(0, -1),
    [Heading.East]:   new Point(1, 0),
    [Heading.West]:   new Point(-1, 0)

}

const actionKeys = Object.keys(robotActionsDictionary);

export class RobotSpiderMk3 implements IRobotSpider, IRotatingRobotSpider {
    heading: Heading
    position: Point;
    fuel: number = 30;

    constructor(startingPosition : Point, startingHeading: Heading, startingFuel?: number) {
        this.position = startingPosition;
        this.heading = startingHeading;
        this.fuel = startingFuel ?? this.fuel;
    }


    public applyCommands(commands: string) : void { 
        
        const isBoostCommand = (command :string) : boolean => { 
            return !Number.isNaN(Number(command));
        }    

        let currentBoost: number = 1;
        for (const command of commands)
        {
            if (isBoostCommand(command))
            {
                currentBoost = this.prepareBooster(Number(command));
                continue;
            }          

            switch (command) {
                case 'F':
                    this.move(currentBoost);
                    break;
                case 'B':
                    this.turn('L');
                    this.turn('L');
                    this.move(currentBoost);
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
            
            currentBoost = 1;
        }
    }

    private move(amountOfBoost: number) {
        const normalMovementVector = robotActionsDictionary[this.heading];

        const boostedMovementVector = new Point(normalMovementVector.x * amountOfBoost, normalMovementVector.y * amountOfBoost)

        const newPosition = this.position.Add(boostedMovementVector);

        this.position = newPosition;
    }


    private turn(command: string) { 

        //Added this as it corrects for negative numbers e.g. -1 mod 4 becomes 3
        const mod = (n: number, m: number) => ((n % m) + m) % m;

        if (command === "R")
        { 
            this.heading = mod(this.heading + 1, 4);
            return;
        }

        this.heading = mod(this.heading - 1, 4);
    }

    private prepareBooster(amountOfBoost: number): number {
        const minimumBoost = 1;
        const maximumBoost = 5;
        
        //this can be negative
        const predictedRemainingFuel = this.fuel - amountOfBoost;

        const currentBoost = predictedRemainingFuel < 0 ? amountOfBoost + predictedRemainingFuel : amountOfBoost;

        this.fuel -= currentBoost;
        
        //This is essentially a clamp that keeps the boost value between the minimum and the maximum
        return Math.max(Math.min(currentBoost, maximumBoost), minimumBoost);
    }
}  