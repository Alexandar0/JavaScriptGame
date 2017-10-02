alert("You again? Ok let's do this.");
var name = prompt("State your name");

var role = prompt("What will it be today, warrior, rogue, ranger or mage?").toLowerCase();

switch(role) {
	case "warrior":
	   alert("A mighty warrior is it? We'll see about that.");
	   break;
	case "rogue":
	   alert("Sneaky bastard, aren't you?");
	   break;
	case "ranger":
	   alert("Away from the fight, smart.");
	   break;
	case "mage":
	   alert("You like dressing up colorful? I bet you do you pansy ass bitch.");
	   break; 
	default:
	   alert("Please state a valid role.");
	   break;   
};

function letsDoThis(){
	alert("Ok, let's do this " + name + " the " + role);
}
letsDoThis();

var ready = prompt("Are you ready? Need few seconds to get ready? How many seconds do you need?(write a number)");

for(var i = 1; i <= ready; i++){
	alert(i);
};

var unarmed = confirm("Would you like to get a weapon before you venture in to the abyss?");

while (unarmed) {
	alert("Ok, I've got this rusty nail here, if you stab someone just right you can give him tetanus");
	var yes = confirm("Would you like browsing some other weapons?");
	
	if(yes) {
		var response = prompt("Well what would you like as a weapon Mr.Great " + role +"?");
		
		if(response){
			alert("Well cry me a river, this nail is all I got, now take it and git, giiit!");
			unarmed = false;
		}
	}
	else{
    unarmed = false;
	}
};

var scenarios = ["You are traveling through the enchanted forest, magical creatures lurk in the shadows of the trees around you.",
 "You are exploring the dungeon of doom, the horde has made it's headquarters here.", "You are lost in the desert of Kharaak, you haven't seen a living soul for a while now."];

function randomNumber(range) {
   return Math.round( Math.random() * range );
}

alert(scenarios[randomNumber(scenarios.length - 1)]);

alert("Suddenly a Wild Orc appears in front of you, He has 50 HP, pick up your rusty nail and fight");

var fight = randomNumber(100);

if(fight < 50){
   alert("You did only " + fight + " damage to him, he smashed yo head like a watermelon hit by a cargo truck. You lose!!!");
}
else if (fight > 50){
   alert("You hit the Orc for " + fight + " damage, you shanked that bitch with yo nail, he ran away crying, probably gave him a tetanus too, he will surely die ...some day. You win!!!");
};

alert("Game Over");   