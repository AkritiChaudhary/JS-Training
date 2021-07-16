function fizzBuzz(upper,lower){
    for (let i =lower;i<upper;i++){
        if(i%3==0){
            console.log("Fizz")
        }else if(1%5==0){
            console.log("Buzz")
        }else if (i%3==0&& i%5==0){
            console.log("FizzBuzz")
        }else{
            console.log(i)
        }
    }
}        