function btn1Pressed(){
    document.getElementById("p1").innerHTML = "Button 1 was Clicked!";
    alert("Button 1 was Clicked!");
}
function text1Typed(){
    let textInserted = document.getElementById("i1").value;
    let textLength = textInserted.length;
    document.getElementById("p2").innerHTML = "Characters Typed " + textLength;
}

document.getElementById("b2").addEventListener("click",btn2Pressed)
function btn2Pressed(){
    document.getElementById("p3").innerHTML = "";
}

document.getElementById("i2").addEventListener("change",text2Changed);
function text2Changed(){
    // let text2Length = this.length;
    // console.log("running i2")
    let text2Data = this.value;
    let text2Length = text2Data.length
    console.log(text2Length);
    document.getElementById("p4").style.fontSize = text2Length + "em";
} 