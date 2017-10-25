
//count my rounds
var roundCount = 0;

//my two objects containing their respective properties
var user = {
  name:"",
  health:40,
  healCount: 0,
  //users attack method yo - moved from my orginial combat function
  attack: function attack(){
    this.health -= damage(1,3);
    console.log(this.name+"'s' health is "+this.health);
  },
  heal:function heal(){
    var healAmount = damage(1,10);
    this.health+=healAmount;
    console.log("oH Em GeEe, your fairy god mother has shown up an given you "
    +healAmount+" health!\r\n"+user.name+"'s health is "+user.health);
  },
  wins:0
};

var grant = {
name:"Grant",
health: 10,
  //users attack method yo - moved from my orginial combat function
attack: function attack(){
  this.health -= damage(1,5);
  console.log(this.name+"'s' Health is "+this.health);
}
};


playGame();


function playGame(){
  user.name = prompt("Would you like to play a game?");
  if (user.name === "yes"){
  user.name = prompt("What is your name?");
  hit(true);
}
else{
  console.log(prompt("Goodbye!"));
}
}

function hit(attack){

    while(user.health >0 && grant.health >0 && roundCount<3 && attack === true){

      if(grant.health<=0 && user.health>0){
        roundCount++;
        console.log("End Round "+roundCount);

        if(roundCount<3){
          grant.health = 10;
        }
      }

do{
      var userResponse = prompt("Would you like to attack, heal yourself, or quit ?");
      if(userResponse.toLowerCase() === "quit"){
        attack = false;
        console.log("You quit! You lose. :()")
        break;
      }
      else if (userResponse.toLowerCase() === "heal" && user.healCount <2){
        user.heal();
        user.healCount++;
        grant.attack();
      }
      else if(userResponse.toLowerCase() === "heal" && user.healCount >=2){
        userResponse = prompt("Sorry - fairy god mother is busy, would you like to attack again or quit ?");
      }
      else if(userResponse.toLowerCase() === "attack"){
        user.attack();
        grant.attack();
      }
    }
    while(!(userResponse.toLowerCase() === "attack") || !(userResponse.toLowerCase() === "quit") || !(userResponse.toLowerCase() === "heal"))
  }
  //winner check
    if(user.health<=0 && grant.health>0){
    console.log("You lose!");
  }
  else if(grant.health<=0 && user.health>0 && roundCount===3){
    user.wins++;
    console.log("You Win!\nYou've won "+user.wins+" Game!");
  }
}
function damage(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
