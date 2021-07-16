function palindrome(str){
    let arr=String.split("")
    let reverseArr=arr.reverse()
    let reverseStr=reverseArr.split("")

    if(str==reverseStr){
        console.log("It is a Plaindrome")

    }else{
        console.log("Not a Palindrome")
    }
}
palindrome("bobo")
palindrome(2356)