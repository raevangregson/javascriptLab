var userHealth = document.getElementById("userHealth");
var grantHealth = document.getElementById("grantHealth");
var healCount = document.getElementById("healCount");
var wins = document.getElementById("wins");
var texts = document.getElementsByTagName("p");
var start = document.getElementById("start");
var words = ["health:","healcount:","wins:","grant's health:"]
var attack = document.getElementById("attack");
var heal = document.getElementById("heal");
var quit = document.getElementById("quit");
var user = {
  name:"",
  health:40,
  healCount: 0,
  //users attack method yo - moved from my orginial combat function
  attack: function attack(){
    this.health -= damage(1,3);
    console.log(this.name+"'s' health is "+this.health);
  },
  heal:function (){
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
attack: function (){
  this.health -= damage(1,5);
  console.log(this.name+"'s' Health is "+this.health);
}
};

start.onclick = function(){
  start.style.display = "none";
  attack.style.display = "inherit";
  heal.style.display = "inherit";
  quit.style.display = "inherit";

  userHealth.style.display = "inherit";
  grantHealth.style.display = "inherit";
  healCount.style.display = "inherit";
  wins.style.display = "inherit";
  var count = -1;
  texts.foreach(function(text){
  count++;
  text.textContent = words[count];
  });
}
function(){
attack.onclick = function(){
  user.attack();
  grant.attack();
  userHealth.value = user.health;
  grantHealth.value = grant.health;

  if(grant.health<=0 && user.health>0){
        user.wins++;
        wins.value = user.wins;
        grant.health = 10;
        grantHealth.value = grant.health;
        if(roundCount<3){
          grant.health = 10;
          grantHealth.value = grant.health;
        }
  }

}

heal.onclick = function(){
  user.heal();
  userHealth.value = user.health;
  user.healCount++;
  healCount.value = user.healCount;
  grant.attack();
}

quit.onclick = function(){

}
}

function damage(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
