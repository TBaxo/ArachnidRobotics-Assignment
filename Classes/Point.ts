export class Point{ 
    x: number;
    y: number;

    constructor(x?: number, y?: number)
    { 
        this.x = x ?? 0;
        this.y = y ?? 0
    }


    public Add(point: Point)
    { 
        this.x += point.x;
        this.y += point.y;
    }



}