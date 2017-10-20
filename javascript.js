
//This is where I instatiate my variables
  //My name variable I use for both asking if the user wants to play a game and then storing their name.
var name = prompt("Would you like to play a game?");
var userPoints = 40;
var computerPoints = 10;
var roundCount = 0;
var userWins = 0;


//if the user says yes then I ask for their name and then call my playgame function with my game functionality inside.
if (name === "yes"){
  name = prompt("What is your name?");
  playGame();

}

function playGame(){

  /*I use a while loop to make sure both users score is above 0
    as soon as someones health is 0 or lower then my while loop becomes false
    and stops running.

    I use a nested if statement to check for
  */
    while(userPoints >0 && computerPoints >0 && roundCount<3){

      userPoints -= randomIntFromInterval(1,2);
      computerPoints -= randomIntFromInterval(1,2);
      console.log(name+"'s' health is "+userPoints);
      console.log("Grant's Health is "+computerPoints);

      if(computerPoints<=0 && userPoints>0){
        roundCount++
        console.log("End Round "+roundCount);
        if(roundCount<3){
          computerPoints = 10;
        }
      }
    }
    winOrLose();

}

function winOrLose(){
  if(userPoints<=0 && computerPoints>0){
    console.log("You lose!");
  }
  else if(computerPoints<=0 && userPoints>0 && roundCount===3){
    userWins++;
    console.log("You Win!\nYou've won "+userWins+" Game!")
  }
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
