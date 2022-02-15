let divButton = document.getElementById("button");
let blankParag = document.getElementById("blank")

let number = [Math.floor[Math.random() * 100]]

divButton.addEventListener("click",function(){
    let input = document.getElementById("age_guess").value ;
    if (input == number){
        blankParag.innerHTML = `you gueesed right, your number 
        was ${number}` 
    } else if(input < number){
        blankParag.innerHTML = "you guessed wrong"
    }if (input>number){
        blankParag.innerHTML = "You guessed too high"
    }   
})
















