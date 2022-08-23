var  Maximum: number[] = [23, 89, 6, 29, 56, 45, 77, 32]
  var i: number =0;
  var j: number =0;  
  var Smax = Maximum[0]
for(i = 1; i<= Maximum.length; i++)
{
  for (j = i + 1; j < Maximum.length; j++) 
  {
    if(Maximum[i]> Maximum[j])
    {
      Smax = Maximum[i];
      Maximum[i] = Maximum [j]
      Maximum[j] = Smax
    }
    
  } 
  
}
console.log("Second Maximum number is: "+ Maximum[Maximum.length-2]);

console.log("Maximum number is: "+ Smax);

         

 