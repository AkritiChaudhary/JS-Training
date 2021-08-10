let answer=prompt("You owe me Rs 10, please enter the amount you are paying")

function calculate(amount){
    let newAmount;
    let cost=10;
    newAmount=cost-amount;
    return newAmount;

}
calculate(answer)
 if (calculate(answer)==0){
     console.log("You gave the exact amount")
 }
else if (calculate(answer)>0){
    console.log("You still owe me"+" "+calculate(answer))
}
else if (calculate(answer)<0){
    console.log("You gave too much, your change is"+" "+calculate(answer))
}