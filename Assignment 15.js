function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "p") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "p") {
            return "Scissors beat paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == " P") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s ") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

function test(name,expected,actual){
    if(actual===expected){
        console.log(name+": Test passed ,"+actual+" is equals to "+expected)
    }
    else{
        console.log(name+": Test failed! ,"+actual+" is not equals to "+expected)
    }

}
test("player1:r player2:r","tie",rps("r","r"))
test("player1 :r, player2 :s","Player2 wins",rps("r","s"))
test("player1 :r, player2 :p","Player1 wins",rps("r","p"))
test("player1 :p, player2 :r","Player1 wins",rps("p","r"))
test("player1 :p, player2 :p","Tie",rps("p","p"))
test("player1 :p, player2 :s","Player2 wins",rps("p","s")) 
test("player1 :s, player2 :r","Player2 wins",rps("s","r"))
test("player1 :s, player2 :p","Player1 wins",rps("s","p"))
test("player1 :s, player2 :s","Tie",rps("s","s"))