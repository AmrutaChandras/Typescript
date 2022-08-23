function DisplayFactor (no1: number)
{
    var i: number= 1;
    for(i; i<+ no1; i++)
    {
        if (no1%i ==0)
        {
            console.log(i)
        }
    }

}

DisplayFactor(20);