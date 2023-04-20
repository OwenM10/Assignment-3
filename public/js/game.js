"use strict";

const $ = (selector) => document.querySelector(selector);
// Declare all variables
let box1clicked = false;
let box2clicked = false;
let box3clicked = false;
let box4clicked = false;
let box5clicked = false;
let box6clicked = false;
let box7clicked = false;
let box8clicked = false;
let box9clicked = false;
let Player = 1;
let turn = 0;
let winner = false;
// using list to more easily reset a few things
let boxes = [$("#box1"),$("#box2"),$("#box3"),$("#box4"),$("#box5"),$("#box6"),$("#box7"),$("#box8"),$("#box9")]

//reset function linked to the Reset Game button
const ResetGame = ()=> {
    box1clicked = false;
    box2clicked = false;
    box3clicked = false;
    box4clicked = false;
    box5clicked = false;
    box6clicked = false;
    box7clicked = false;
    box8clicked = false;
    box9clicked = false;
    Player = 1;
    turn = 0;
    winner = false;
//runs through the list of boxes and resets all values and text and reapplies the hover class
for (let i =0; i < 9 ; i++){
boxes[i].textContent = "";
boxes[i].value = 0;
boxes[i].classList.add("col1hover");
}
//get rid of winner/tie message
 $("#WinnerMessage").textContent = "";
}

//runs after every box is clicked to either stop the game if theres a winner or allow the game to keep playing
const CheckForWin = ()=> {

    if ($("#box1").value == 1 && $("#box2").value == 1 && $("#box3").value == 1){
        $("#WinnerMessage").textContent = "Player 1 Wins!";
        winner = true;
        //removes 
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    } 

    else if ($("#box1").value == 2 && $("#box2").value == 2 && $("#box3").value == 2){
        $("#WinnerMessage").textContent = "Player 2 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    }
    
    else if ($("#box4").value == 1 && $("#box5").value == 1 && $("#box6").value == 1){
        $("#WinnerMessage").textContent = "Player 1 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }
    } 

    else if ($("#box4").value == 2 && $("#box5").value == 2 && $("#box6").value == 2){
        $("#WinnerMessage").textContent = "Player 2 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    }

    else if ($("#box7").value == 1 && $("#box8").value == 1 && $("#box9").value == 1){
        $("#WinnerMessage").textContent = "Player 1 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    } 

    else if ($("#box7").value == 2 && $("#box8").value == 2 && $("#box9").value == 2){
        $("#WinnerMessage").textContent = "Player 2 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    }

    else if ($("#box1").value == 1 && $("#box4").value == 1 && $("#box7").value == 1){
        $("#WinnerMessage").textContent = "Player 1 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }
    } 

    else if ($("#box1").value == 2 && $("#box4").value == 2 && $("#box7").value == 2){
        $("#WinnerMessage").textContent = "Player 2 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }
    }

    else if ($("#box2").value == 1 && $("#box5").value == 1 && $("#box8").value == 1){
        $("#WinnerMessage").textContent = "Player 1 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    } 

    else if ($("#box2").value == 2 && $("#box5").value == 2 && $("#box8").value == 2){
        $("#WinnerMessage").textContent = "Player 2 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    }

    else if ($("#box3").value == 1 && $("#box6").value == 1 && $("#box9").value == 1){
        $("#WinnerMessage").textContent = "Player 1 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    } 

    else if ($("#box3").value == 2 && $("#box6").value == 2 && $("#box9").value == 2){
        $("#WinnerMessage").textContent = "Player 2 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    }

    else if ($("#box1").value == 1 && $("#box5").value == 1 && $("#box9").value == 1){
        $("#WinnerMessage").textContent = "Player 1 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    } 

    else if ($("#box1").value == 2 && $("#box5").value == 2 && $("#box9").value == 2){
        $("#WinnerMessage").textContent = "Player 2 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    }

    else if ($("#box3").value == 1 && $("#box5").value == 1 && $("#box7").value == 1){
        $("#WinnerMessage").textContent = "Player 1 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    } 

    else if ($("#box3").value == 2 && $("#box5").value == 2 && $("#box7").value == 2){
        $("#WinnerMessage").textContent = "Player 2 Wins!";
        winner = true;
        for (let i =0; i < 9 ; i++){
            boxes[i].classList.remove("col1hover");
        }

    }

    else if (turn == 9){
        $("#WinnerMessage").textContent = "The game ends in a tie.";
        
    }

        

}

const clicked1 = ()=> {
    if (box1clicked == false && winner == false){
        box1clicked = true;
        turn += 1;
        $("#box1").classList.remove("col1hover");
        if (Player == 1){
            $("#box1").textContent = "X";
            Player = 2;
            $("#box1").value = 1;
            CheckForWin();
        }
    else{
        $("#box1").textContent = "O";
        Player = 1;
        $("#box1").value = 2;
        CheckForWin();
    }
    
    
    }
}

const clicked2 = ()=> {
    if (box2clicked == false && winner == false){
        box2clicked = true;
        turn += 1;
        $("#box2").classList.remove("col1hover");
        if (Player == 1){
            $("#box2").textContent = "X";
            Player = 2;
            $("#box2").value = 1;
            CheckForWin();
        }
    else{
        $("#box2").textContent = "O";
        Player = 1;
        $("#box2").value = 2;
        CheckForWin();
    }
    
    
    }
}

const clicked3 = ()=> {
    if (box3clicked == false && winner == false){
        box3clicked = true;
        turn += 1;
        $("#box3").classList.remove("col1hover");
        if (Player == 1){
            $("#box3").textContent = "X";
            Player = 2;
            $("#box3").value = 1;
            CheckForWin();
        }
    else{
        $("#box3").textContent = "O";
        Player = 1;
        $("#box3").value = 2;
        CheckForWin();
    }
    
    
    }
}

const clicked4 = ()=> {
    if (box4clicked == false && winner == false){
        box4clicked = true;
        turn += 1;
        $("#box4").classList.remove("col1hover");
        if (Player == 1){
            $("#box4").textContent = "X";
            Player = 2;
            $("#box4").value = 1;
            CheckForWin();
        }
    else{
        $("#box4").textContent = "O";
        Player = 1;
        $("#box4").value = 2;
        CheckForWin();
    }
    
    
    }
}

const clicked5 = ()=> {
    if (box5clicked == false && winner == false){
        box5clicked = true;
        turn += 1;
        $("#box5").classList.remove("col1hover");
        if (Player == 1){
            $("#box5").textContent = "X";
            Player = 2;
            $("#box5").value = 1;
            CheckForWin();
        }
    else{
        $("#box5").textContent = "O";
        Player = 1;
        $("#box5").value = 2;
        CheckForWin();
    }
    
    
    }
}

const clicked6 = ()=> {
    if (box6clicked == false && winner == false){
        box6clicked = true;
        turn += 1;
        $("#box6").classList.remove("col1hover");
        if (Player == 1){
            $("#box6").textContent = "X";
            Player = 2;
            $("#box6").value = 1;
            CheckForWin();
        }
    else{
        $("#box6").textContent = "O";
        Player = 1;
        $("#box6").value = 2;
        CheckForWin();
    }
    
    
    }
}

const clicked7 = ()=> {
    if (box7clicked == false && winner == false){
        box7clicked = true;
        turn += 1;
        $("#box7").classList.remove("col1hover");
        if (Player == 1){
            $("#box7").textContent = "X";
            Player = 2;
            $("#box7").value = 1;
            CheckForWin();
        }
    else{
        $("#box7").textContent = "O";
        Player = 1;
        $("#box7").value = 2;
        CheckForWin();
    }
    
    
    }
}

const clicked8 = ()=> {
    if (box8clicked == false && winner == false){
        box8clicked = true;
        turn += 1;
        $("#box8").classList.remove("col1hover");
        if (Player == 1){
            $("#box8").textContent = "X";
            Player = 2;
            $("#box8").value = 1;
            CheckForWin();
        }
    else{
        $("#box8").textContent = "O";
        Player = 1;
        $("#box8").value = 2;
        CheckForWin();
    }
    
    
    }
}

const clicked9 = ()=> {
    if (box9clicked == false && winner == false){
        box9clicked = true;
        turn += 1;
        $("#box9").classList.remove("col1hover");
        if (Player == 1){
            $("#box9").textContent = "X";
            Player = 2;
            $("#box9").value = 1;
            CheckForWin();
        }
    else{
        $("#box9").textContent = "O";
        Player = 1;
        $("#box9").value = 2;
        CheckForWin();
    }
    
    
    }
}




document.addEventListener("DOMContentLoaded", () => {
    $("#box1").addEventListener("click", clicked1);
    $("#box2").addEventListener("click", clicked2);
    $("#box3").addEventListener("click", clicked3);
    $("#box4").addEventListener("click", clicked4);
    $("#box5").addEventListener("click", clicked5);
    $("#box6").addEventListener("click", clicked6);
    $("#box7").addEventListener("click", clicked7);
    $("#box8").addEventListener("click", clicked8);
    $("#box9").addEventListener("click", clicked9);
    $("#reset_btn").addEventListener("click", ResetGame);

});
