//import { Console } from "console";

function area(radius: number): number
{
    var PI= 3.14;
    var Ar= PI* radius*radius;
    return Ar;
}

var ret: number = 0;
ret = area(5)
console.log("Area is: "+ ret)