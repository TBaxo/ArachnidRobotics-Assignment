import { Point } from "../classes/Point";

export interface IRobotSpider{ 
    position: Point;

    applyCommands: (commands: string) => void;
}