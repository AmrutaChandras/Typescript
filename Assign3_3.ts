import { inherits } from "util";

class CircleX extends CircleComponent 
 {  
  no1: any;
no2: number;

constructor (a: any)
  {
    super(this.Circlrarea);
    this.no1= a;     

}
public Circlrarea()
 {
   super.Circlrarea()
  
}
Circumference()
{
  super.Circlrarea();
  var Ans: number=0;
  Ans = 2*3.14*this.no1;
  return Ans
}

} 

var obj3 = new CircleX(5)
var Rettemp1: number= 0;
Rettemp1= obj3.Circumference();

console.log("Circumference is"+ Rettemp1);


