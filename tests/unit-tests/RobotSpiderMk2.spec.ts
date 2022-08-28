import { expect, test } from '@jest/globals';
import { Point } from '../../classes/Point';
import { RobotSpiderMk1 } from '../../classes/RobotSpiderMk1';
import { Heading, RobotSpiderMk2 } from '../../classes/RobotSpiderMk2';

/*

0, 0, FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF = ?
    3, 6, FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF = ?
        0, 7, RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR =?

*/

test(`x co-ordinate should be 0 instead of -1`, () => {
    const startPosition = new Point(0, 0);
    const robot = new RobotSpiderMk2(startPosition, Heading.North);

    const commands: string = "LF"
    
    robot.applyCommands(commands);

    expect(robot.position.x).toBe(0);
    expect(robot.position.y).toBe(0);
});

test(`y co-ordinate should be 0 instead of -1`, () => {
    const startPosition = new Point(0, 0);
    const robot = new RobotSpiderMk2(startPosition, Heading.North);

    const commands: string = "BF"

    robot.applyCommands(commands);
    
    expect(robot.position.x).toBe(0);
    expect(robot.position.y).toBe(0);
});


test(`should output (2, 3)`, () => {
    const commands = "FFFRFF";
    const startPosition = new Point(0, 0)

    const robot = new RobotSpiderMk2(startPosition, Heading.North);

    robot.applyCommands(commands);

    expect(robot.position.x).toBe(2);
    expect(robot.position.y).toBe(3);

});


test(`should output (1, 5)`, () => {
    const commands = "FFBBFFFLFFB";
    const startPosition = new Point(0, 0)

    const robot = new RobotSpiderMk2(startPosition, Heading.North);

    robot.applyCommands(commands);

    expect(robot.position.x).toBe(1);
    expect(robot.position.y).toBe(5);

});


test(`should output (-1, 21)`, () => {
    const commands= "FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF";
    const startPosition = new Point(0, 0)

    const robot = new RobotSpiderMk2(startPosition, Heading.North);


    robot.applyCommands(commands);

    expect(robot.position.x).toBe(0);
    expect(robot.position.y).toBe(0);
    
});



test(`should output (16, 7)`, () => {
    const commands = "FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF";
    const startPosition = new Point(3, 6)

    const robot = new RobotSpiderMk1(startPosition);


    robot.applyCommands(commands);

    expect(robot.position.x).toBe(4);
    expect(robot.position.y).toBe(19);
    
});

/*
test(`should output (8, 10)`, () => {
    const commands = "RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR";
    const startPosition = new Point(0, 7)

    const robot = new RobotSpiderMk1(startPosition);


    robot.applyCommands(commands);

    expect(robot.position.x).toBe(3);
    expect(robot.position.y).toBe(15);
    
});

*/