class Assign1Component 
 {
  
  no1: number;
no2: number;


constructor ( a: number, b: number)
  {
    this.no1= a;
    this.no2= b;

}

Addition()
{
  var Ans: number=0;
  Ans = this.no1 + this.no2;
  return Ans
}
Subtraction()
{
  var Ans: number=0;
  Ans = this.no1 - this.no2;
  return Ans
}
multiplication()
{
  var Ans: number=0;
  Ans = this.no1 * this.no2;
  return Ans
}
Divide()
{
  var Ans: number=0;
  Ans = this.no1 / this.no2;
  return Ans
}

 }

var obj2 = new Assign1Component(20,2)
var Rettemp: number= 0;
Rettemp = obj2.Addition();
var Sub = obj2.Subtraction();
var mul = obj2.multiplication();
var div = obj2.Divide();
console.log("Addition is"+ Rettemp);
console.log("Addition is"+ Sub);
console.log("Addition is"+ mul);
console.log("Addition is"+ div);
