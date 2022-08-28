import { expect, test } from '@jest/globals';
import { Point } from '../../Classes/Point';
import { RobotSpiderMk1 } from '../../Classes/RobotSpiderMk1';

/*

0, 0, FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF = ?
    3, 6, FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF = ?
        0, 7, RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR =?

*/

test(`should output (5, 21)`, () => {
    const commands= "FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF";
    const startPosition = new Point(0, 0)

    const robot = new RobotSpiderMk1(startPosition);


    robot.applyCommands(commands);

    expect(robot.position.x).toBe(-1);
    expect(robot.position.y).toBe(21);
    
});


test(`should output (16, 7)`, () => {
    const commands = "FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF";
    const startPosition = new Point(3, 6)

    const robot = new RobotSpiderMk1(startPosition);


    robot.applyCommands(commands);

    expect(robot.position.x).toBe(4);
    expect(robot.position.y).toBe(19);
    
});

test(`should output (8, 10)`, () => {
    const commands = "RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR";
    const startPosition = new Point(0, 7)

    const robot = new RobotSpiderMk1(startPosition);


    robot.applyCommands(commands);

    expect(robot.position.x).toBe(3);
    expect(robot.position.y).toBe(15);
    
});

