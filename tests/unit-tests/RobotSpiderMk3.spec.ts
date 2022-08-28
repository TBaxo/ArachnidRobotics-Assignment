import { expect, test } from '@jest/globals';
import { Point } from '../../classes/Point';
import { RobotSpiderMk3 } from '../../classes/RobotSpiderMk3';
import { Heading } from '../../interfaces/IRotatingRobotSpider';


test(`x co-ordinate should be -1 instead of 0`, () => {
    const startPosition = new Point(0, 0);
    const robot = new RobotSpiderMk3(startPosition, Heading.North, 30);

    const commands: string = "LF"
    
    robot.applyCommands(commands);

    expect(robot.position.x).toBe(-1);
    expect(robot.position.y).toBe(0);
});

test(`y co-ordinate should be -1 instead of 0`, () => {
    const startPosition = new Point(0, 0);
    const robot = new RobotSpiderMk3(startPosition, Heading.North);

    const commands: string = "B"

    robot.applyCommands(commands);
    
    expect(robot.position.x).toBe(0);
    expect(robot.position.y).toBe(-1);
});


test(`should not boost if fuel is 0`, () => {
    const startPosition = new Point(0, 0);
    const robot = new RobotSpiderMk3(startPosition, Heading.North, 0);

    const commands: string = "5F"

    robot.applyCommands(commands);

    expect(robot.position.x).toBe(0);
    expect(robot.position.y).toBe(1);
});

test(`should use remaining fuel if boost is greater than remaining fuel`, () => {
    const startPosition = new Point(0, 0);
    const robot = new RobotSpiderMk3(startPosition, Heading.North, 3);

    const commands: string = "5F"

    robot.applyCommands(commands);

    expect(robot.position.x).toBe(0);
    expect(robot.position.y).toBe(3);
});


test(`should output (2, 3)`, () => {
    const commands = "FFFRFF";
    const startPosition = new Point(0, 0)

    const robot = new RobotSpiderMk3(startPosition, Heading.North);

    robot.applyCommands(commands);

    expect(robot.position.x).toBe(2);
    expect(robot.position.y).toBe(3);

});


test(`should output (-1, 5)`, () => {
    const commands = "FFBBFFFLFFB";
    const startPosition = new Point(0, 0)

    const robot = new RobotSpiderMk3(startPosition, Heading.North);

    robot.applyCommands(commands);

    expect(robot.position.x).toBe(-1);
    expect(robot.position.y).toBe(5);

});


// These tests are the ones given in the example

test(`should output (-6, 14)`, () => {
    const commands = "FFFFFF3FLFFFFFFR5FL";
    const startPosition = new Point(0, 0)

    const robot = new RobotSpiderMk3(startPosition, Heading.North);

    robot.applyCommands(commands);

    expect(robot.position.x).toBe(-6);
    expect(robot.position.y).toBe(14);

});


test(`should output (36, 15)`, () => {
    const commands = "FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF";
    const startPosition = new Point(4, 3)
    // 3 + 13 - 6 + 5 = 
    // 4 + 32 = 36

    const robot = new RobotSpiderMk3(startPosition, Heading.North);

    robot.applyCommands(commands);

    expect(robot.position.x).toBe(36);
    expect(robot.position.y).toBe(15);

});

/*
0,0 FFFFFF3FLFFFFFFR5FL
4,3 FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF


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