/*.toExponential()==return string
.toFixed()===to a fixed number of decimal places
.toPrecision()==simple number */

function randomNumberGenerator(min,max)
{
    let min=Math.ceil(min)
    let max=Math.floor(max)
    let result=((Math.random())*(max-min)+min)
    console.log(result)
}