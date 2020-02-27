let player = 0
let number = []
let pos = []
let imgId = ""
let buttonId = ""
let x = 0
const k = 0
document.getElementById("divPlayagain").style.display = "none";
document.getElementById("quited").style.display = "none";

function startGame(){
    x = prompt("hur stor spelplan vill du ha?",10)
    for (i = 1; i <= x; i++){
        for (j = 1 ; j <= x; j++){
            imgId = "myImg" + i + k + j
            buttonId = "myButton" + i + k + j
            number += " <button class='myButton' id='" + buttonId + "' value='0' onclick='valdRuta(" + imgId + ", " + buttonId +")'><img src='vit-ruta.png' id='" + imgId + "'></button>"
            var conv = pos.push(buttonId);
            document.getElementById('text').innerHTML = number
        }
        document.getElementById("start").style.display = "none"
        number = number + "<br>"
    }
}

function valdRuta(imgId, buttonId){
    let winner = ""
   
    if (buttonId.value != "1" && buttonId.value != "2"){
        if(player % 2){
            imgId.src="x.jpg";  
            buttonId.value = "1";
            //let viewValue = document.getElementById(buttonId.id);
            //viewValue.onclick = changeValue;      
            document.getElementById("player").innerHTML = "Det är nu spelare O tur"
        } else{
            imgId.src="o.jpg";
            buttonId.value = "2";
            //let viewValue = document.getElementById(buttonId);
            //viewValue.onclick = changeValue;
            document.getElementById("player").innerHTML = "Det är nu spelare X tur"
            console.log(pos[x])
        }
        player++
        document.getElementById("antDrag").innerHTML = "Antal gjorda drag: " + player + "."
         
    }
   
    winner = checkW()
    if (winner!=""){
        win(winner)
    }
}

function checkW(){

    let w = 1
    let v = 0
    let lastV = 5
    let winner = ""

    //Check for winner on the row
    for(let i = 1; i <= x; i++){
        for (let j=1; j<= x; j++){
            v=checkValue(i,j)
            if (v!=0){
                if (v==lastV){
                    ++w
                }else{
                    w=1
                }
            }
            if (w==5){
                if (v==1){
                    winner="X"
                }else{
                    winner="O"
                }
                return winner
            }
            lastV=v
        }
        w=0
    }
   
    //Check for winner on the col
    for(let j = 1; j <= x; j++){
        for (let i=1; i<= x; i++){
            v=checkValue(i,j)
            if (v!=0){
                if (v==lastV){
                    ++w
                }else{
                    w=1
                }
            }
            if (w==5){
                if (v==1){
                    winner="X"
                }else{
                    winner="O"
                }
                return winner
            }
            lastV=v
        }
        w=0
    }
   
    //Check for winner on the diagonal right-down (up)
    for (let y=0; y<x; y++){
        //let thisButton
        for(let i = 1, j=1+y; i <= x-y; i++, j++){
            v=checkValue(i,j)
            if (v!=0){
                if (v==lastV){
                    ++w
                }else{
                    w=1
                }
            }
            if (w==5){
                if (v==1){
                    winner="X"
                }else{
                    winner="O"
                }
                return winner
            }
            lastV=v  
        }
        w=0
    }
   
    //Check for winner on the diagonal right-down (down)
    for (let y=0; y<x; y++){
        //let thisButton
        for(let j = 1, i=1+y; j <= x-y; i++, j++){
            v=checkValue(i,j)
            if (v!=0){
                if (v==lastV){
                    ++w
                }else{
                    w=1
                }
            }
            if (w==5){
                if (v==1){
                    winner="X"
                }else{
                    winner="O"
                }
                return winner
            }
            lastV=v
        }
        w=0
    }
   
    //Check for winner on the diagonal left-down (up)
    for (let y=0; y<x; y++){
        //let thisButton
        for(let i = 1, j=x-y; i <= x-y; i++, j--){
            v=checkValue(i,j)
            if (v!=0){
                if (v==lastV){
                    ++w
                }else{
                    w=1
                }
            }
            if (w==5){
                if (v==1){
                    winner="X"
                }else{
                    winner="O"
                }
                return winner
            }
            lastV=v  
        }
        w=0
    }
   
    //Check for winner on the diagonal left-down (down)
    for (let y=0; y<x; y++){
        //let thisButton
        for(let i = 1+y, j=x; j > 0+y; i++, j--){
            v=checkValue(i,j)
            if (v!=0){
                if (v==lastV){
                    ++w
                }else{
                    w=1
                }
            }
            if (w==5){
                if (v==1){
                    winner="X"
                }else{
                    winner="O"
                }
                return winner
            }
            lastV=v  
        }
        w=0
    }      
   
    return winner
}

function win(winner){
    let height = (50 * x) + 'px'
    document.getElementById("divPlayagain").style.display = "block";
    document.getElementById("divPlayagain").style.height = height;
    document.getElementById("winner").innerHTML = "Vinnare är: " + winner + ",  grattis till vinsten."
}
function checkValue(i,j){
   
    let thisButton = "myButton" + i + k + j
    let thisValue = ""
    thisValue=document.getElementById(thisButton).value
    //alert("B=" + thisButton + " V=" + thisValue)
    return thisValue
}

function playAgain(){
    location.reload();
}
function quit(){
    document.getElementById("quited").style.display = "block";
}