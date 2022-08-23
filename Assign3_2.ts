class CircleComponent 
{
  
 radius : number;

 constructor(a: any) 
 {
   this.radius = a;
  }

  public Circlrarea()
  {
    var area: any;
    area =  3.14 * this.radius *this.radius
    return area;

  }


}
var obj1 = new CircleComponent(12)
var Ret ;
Ret = obj1.Circlrarea();
console.log("area is: "+ Ret);