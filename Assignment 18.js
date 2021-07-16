function compare(arr){
    for (let i=0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            console.log("value1 : "+arr[i] +", value2 : "+arr[j])
            if (arr[i]==arr[j]){
                console.log("matched")

            }else{
                console.log("did not match")
            }
        }
    }
}

arr=[9,9,86,66,2,5,7,2]
function compare(arr)
