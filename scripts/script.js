alert("Welcome adventurer, there is an epic dungeon waiting to be explored and I shall be your dungeon master.");
var name = prompt("What is your name?");

if(name != "Noob-noob"){
	var name = prompt("Are you sure is not 'Noob-noob'? If it is just write it right here.");
	if(name != "Noob-noob"){
	var name = prompt("I don't know why you so stubborn bro, 'Noob-noob' sounds like a good adventurer's name. So what will it be?");
	if(name != "Noob-noob"){
	var name = prompt("Tell you what, just write down 'Noob-noob' right here in this square bellow and we call it a day and we continue with our adventure like real grown ups, or be a dick and write your pseudonim again and i shall adress you by that stupid name.");
	if(name === "Noob-noob"){
	alert("He he he, Noob-noob, fail.");
}
}
else if(name === "Noob-noob"){
	alert("He he he, Noob-noob, fail.");
}
}
else if(name === "Noob-noob"){
	alert("He he he, Noob-noob, fail.");
}
}
else if(name === "Noob-noob"){
	alert("He he he, Noob-noob, fail.");
}

var race = prompt("Choose your race: human, dwarf, elf, orc");
var role = prompt("Choose your class: warrior, ranger, paladin, rogue, mage");


if(role === "warrior"){
	var weapon = prompt("Choose your weapon: two-handed sword, sword and shield, two axes");
}
else if(role === "ranger"){
	var weapon = prompt("Choose your weapon: bow, spear");
}	
else if(role === "paladin"){
	var weapon = prompt("Choose your weapon: mace, hammer and shield");
}	
else if(role === "rogue"){
	var weapon = prompt("Choose your weapon: knife, throwing knifes");
}	
else if(role === "mage"){
	var weapon = prompt("Choose your weapon: staff, wand");
}	
else {
	alert("no such class");
}

var attack = prompt("Right as you enter the door, the dungeon minions come at you with full force, they have 20 HP. What do you do, attack or run?");

if(attack === "run"){
	alert("Really bro? You came all the way here to run? I scripted all this shit for nothing you pussy-ass fucker.");
}
else if(attack === "attack"){
	var hitPoints = Math.round(Math.random()*100);
	alert(name + " " + "the" + " " + race + " " + role + " " + "hits the minions with his" + " " + weapon + " " + "for" + " " + hitPoints + "HP");
	if(hitPoints > 20){
		alert("You hit them suckers right in their dick-slurping mouths and fucked them all up like the bitches that they are, good job.");
		var boss = prompt("OMG, O M G, a big boss appears in front of you, it's a boss fight, so exciting. He has 70 HP, you have 100 HP. What do you do, attack or run?");
		if(boss === "run"){
	    alert("Really bro? You came all the way here to run? I scripted all this shit for nothing you pussy-ass fucker.");
        }
		else if(boss === "attack"){
			var bossHP = Math.round(Math.random()*100);
			alert(name + " " + "the" + " " + race + " " + role + " " + "hits the Big Boss with his" + " " + weapon + " " + "for" + " " + bossHP + "HP");
			if(bossHP > 70){
				alert("You split him open like a condom filled with vegetable soup hitting the pavement after a four stories fall");
				alert("Good job" + " " + name + " " + "the" + " " + race + " " + role + " " + "you've finished the game.");
			}
			else if(bossHP < 70){
				var special = prompt("He now has" + " " + (70 - bossHP) + "HP" + " " + "left, do you want to use special attack, yes or no?");
				if(special === "yes"){
					var specialTwo = prompt("Wich one, roundhouse kick or sucker-punch in the neck?");
					alert("You split him open like a condom filled with vegetable soup hitting the pavement after a four stories fall");
					alert("Good job" + " " + name + " " + "the" + " " + race + " " + role + " " + "you've finished the game.");
				}
				else if(special === "no"){
					alert("Right as you decide to fight like a pussy, a large piece of the celling detaches and falls on his head, thus killing him.");
					alert("Good job" + " " + name + " " + "the" + " " + race + " " + role + " " + "you've finished the game.");
				}
				else {
					alert("no such thing you dumb fuck");
				}
			}
		}
	}
	else if(hitPoints < 20){
		alert("They come at you with the fury of a middle-aged man who accomplished nothing.");
		alert("They shanked you son, you are dead, you died, you are dead now. Why are you sitting in that chair? Go lie down, you are dead.");
	}
}

if(name === "Noob-noob"){
	alert(name + " " + "the" + " " + race + " " + role + " " + "he he he, fail.");
}
else if(name!= "Noob-noob"){
	alert("Are you sure your name is not Noob-noob tho?");
}
 