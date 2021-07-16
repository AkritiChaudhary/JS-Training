// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["", ""]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Akriti",
        lastName: "Chaudhary"
    },
    {
        firstName: "Kajol",
        lastName: "Seth"
    },
    {
        firstName: "Abhishek",
        lastName: "Goel"
    },
    {
        firstName: "Namita",
        lastName: "Chakroborty"
    },
    {
        firstName: "Shruti",
        lastName: "Garg"
    },

]
function randomGenerator(min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function randomNumber1to100(){
    let randValue=randomGenerator(1,100)
    document.getElementById("p1").innerHTML=randValue
}

function randomNumberStarttoEnd(){
    let start=document.getElementById("i1").value
    console.log("Start")
    let end=document.getElementById("i2").value
    console.log("End")
    let answer=randomGenerator(start,end)
    console.log(answer)
    document.getElementById("p2").innerHTML=answer
}

function loremString(){
    document.getElementById("p3").innerHTML=lorem
}

//returns lorem string based on sentences
function loremSentence(){
    let newLorem=lorem.split(".")
    let resultSentence=""
    let len=document.getElementById("i3").value
    for(let i=0;i<len;i++){
        resultSentence=resultSentence+newLorem[i]+"."
    }
    document.getElementById("p4").innerHTML=resultSentence
}

function loremChar(){
    let newLorem=lorem.split(".")
    let resultChar=""
    let len=document.getElementById("i4").value
    for (let i=0;i<len;i++){
        resultChar=resultChar+newLorem[i]+"."
    }
    document.getElementById("p5").innerHTML=resultSentence
}

function getDate(){
    let date=new Date()
    let day=date.getDate()
    let month=date.getMonth()+1
    let year=date.getFullYear()

    let myDate =  day+"/"+month+"/"+year
    document.getElementById("p6").innerHTML=myDate
}

function getTime(){
    let time=new Date()
    let hours=time.getHours()
    let minutes=time.getMinutes()
    let ampm

    if(hours>12)
    {
        ampm="PM"
        hours=hours-12
    }
    else{
        ampm="AM"
    }

    if(minutes<10)
    {
        minutes="0"+minutes
    }

    let mydate =  hours+":"+minutes+" "+ampm
    document.getElementById("p7").innerHTML=mydate
}

function inchesToFeet(){
    let inches=document.getElementById("i5").value
    let answer =inches/12 +"Ft"
    document.getElementById("p8").innerHTML=answer

}

function feetToInches(){
    let feet=document.getElementById("i6").value
    let answer=feet*12+"inch"
    document.getElementById("p9").innerHTML=answer

}

function compareLength(){
    let word1=document.getElementById("i7").value
    let word2=document.getElementById("i8").value

let reuslt
if(word1.length==word2.length){
   result="Same Length"
}
else{
    result="Both Have different length"
}
 document.getElementById("p10").innerHTML=result
}

function randomPass(){
    let result=""
    let chars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','@','$','!','0','1','2','3','4','5','6','7','8','9']
    for(let i=0;i<10;i++){
        let num=randomGenerator(0,10)
        result=result+chars[num]
    }
    console.log(result)
    document.getElementById("p11").innerHTML=result
}

function evenOrOdd()
{
    let num=document.getElementById("i9").value
    if(num%2==0)
    {
        document.getElementById("p12").innerHTML="The number "+num+" is even "
        }
        else{
            document.getElementById("p12").innerHTML="The number "+num+" is odd"

        }
}

function randomColor()
{
    let colors=["red","pink","neon","green","yellow","brown","voilet","white"]
    let ans=randomGenerator(0,7)
    document.getElementById("p13").innerHTML=colors[ans]
}

function randName(){
    let firstName=names[randomGenerator(0,names.length)].firstName
    let lastName=names[randomGenerator(0,names.length)].lastName
    let answer=firstName+" "+lastName
    document.getElementById("p14").innerHTML=answer
}



