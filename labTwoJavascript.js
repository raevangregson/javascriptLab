
//This is where I instatiate my variables
//My name variable I use for both asking if the user wants to play a game and then storing their name.

var userPoints = 40;
var computerPoints = 10;
var roundCount = 0;
var userWins = 0;

playGame();


function playGame(){
  var name = prompt("Would you like to play a game?");
  if (name === "yes"){
  name = prompt("What is your name?");
  hit(true);
}
else{
  console.log(prompt("Goodbye!"));
}
}


//if the user says yes then I ask for their name and then call my playgame function with my game functionality inside.
function hit(attack){

/*
    I use a while loop to make sure both users score is above 0
    as soon as someones health is 0 or lower then my while loop becomes false
    and stops running. I also check to make sure that it has been less then 3
    rounds or the while statement stops.
*/
    while(userPoints >0 && computerPoints >0 && roundCount<3 && attack === true){

//This is where I "hit" each user & then print out their respective health
      userPoints -= damage(1,5);
      computerPoints -= damage(1,5);
      console.log(name+"'s' health is "+userPoints);
      console.log("Grant's Health is "+computerPoints);

/*Now I use and if statement to see if either the computers points
have fallen below zero while the user still has points, in which
case I reset the computer and add a round
*/
      if(computerPoints<=0 && userPoints>0){
        roundCount++;
        console.log("End Round "+roundCount);

        if(roundCount<3){
          computerPoints = 10;
        }
      }

      if(!confirm("Would you like to attack again?")){
        attack = false;
        console.log("You quit! You lose. :()")
      }
    }

   /*if the userPoints is less then zero and the computer is greater the computer
wins and if its been three rounds and the computer is less then zero then the user wins.
*/
    if(userPoints<=0 && computerPoints>0){
    console.log("You lose!");
  }
  else if(computerPoints<=0 && userPoints>0 && roundCount===3){
    userWins++;
    console.log("You Win!\nYou've won "+userWins+" Game!");
  }
}

//this function is called to produce a random number between 1 and 2.
function damage(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
