import { Point } from "../classes/Point";

export enum Heading { North, East, South, West }

export interface IRotatingRobotSpider {
    position: Point;
    heading: Heading;

    applyCommands: (commands: string) => void;
}