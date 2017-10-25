

var outcome;

window.alert("You're just an ordinary adventurer, traveling through the world of Ath looking for cheap thrills and fun. But soon the life is about to change for you.");

var beginningScenarios = ["You are traveling through the enchanted forest, magical creatures lurk in the shadows of the trees around you.", 
 "You are exploring the dungeon of doom, the horde has made it's headquarters here.", "You are lost in the desert of Kharaak, you haven't seen a living soul for a while now."];
 
function randomNumber(range) {
	"use strict";
	if (typeof range === "number") {
		return Math.round(Math.random() * range);
	}
}	

window.alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);


var character = {
	health: 5,
	strenght: 0,
	stealth: 0,
	
	name: window.prompt("What is your name?"),
	
	characterClass: window.prompt("What is your affinity young adventurer? Warrior, thief or priest?").toLowerCase()
};

if (!character.name) {
  character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself...Last chance. What is your name?");
  
  if (!character.name) {
    window.alert("Alrighty then, Noob Noob it is. Welcome back Noob Noob you fucking cunt, I knew it was you the whole time.");
    character.name = "Noob Noob";
  }
}

if (character.characterClass === "warrior") {
  character.strength = 5;
}

if (character.characterClass === "thief") {
  character.stealth = 5;
}

if (character.characterClass === "priest") {
  character.health = 7;
}


var choice = window.prompt("The traveling " + character.characterClass + " " + character.name + " stops for a rest, and you notice an Orc slowly aproaching you. The Orc still hasn't noticed you, what action shall you take? Attack, attempt to sneak by the Orc or bless yourself? ").toLowerCase();

if (choice === "attack") {
   
  if (character.strength === 5) {
    
    window.alert("Using only your bare hands, you slay the Orc! Success! You loot his body for goods and find an axe.");
    
    outcome = "win";
    
    character.strength++;
    
  } 
    else if (character.strength < 5) {
    window.alert("You fearlessly charge the Orc with all your strength. Using your mighty powers you crush thy foe as if it was a sheet of paper you needed to shred.");
    window.alert("Just kidding. He one-punches you in the neck and knocks you out cold. But not all is lost -- if time spent together makes one friends, then you and the Orc become best friends, and live together for eternity. The end.");
    
    outcome = "lose";
  }
}

if (choice === "sneak" || choice === "sneak by the orc") {
  
  if (character.stealth === 5) {
    window.alert("You sneak by the Orc, you clever bastard. The Orc has seen you tho, you are not a good thief. But he doesn't care. He's like 'Wtf is that guy doing, I'm just a fisherman, I ain't even got a weapon, this pigskins are crazy'.");
    
    outcome = "win";
	
	character.stealth++
  }
  
  if (character.stealth < 5) {
    
    window.alert("You try to slip by the Orc, but you accidentally stumble over a branch, alerting the Orc of your existence. He slowly turns his head and runs towards you.");
    
    if (character.strength === 5) {
      window.alert("As he reaches you, you remember that you are actually a warrior so you roundhouse kick him in the balls and he dropes down crying. He just wanted to hug you... well, it is what it is.");
      
      outcome = "win";
      
    } else {
      window.alert("You get a beating of a lifetime. Attacking a 200kg Orc, unarmed, while wearing your priest robe that is basicly a dress, was definitly not the way to go. You are not a smart person.");
      
      outcome = "lose";
    }
  }
}

if (choice === "bless" || choice === "bless yourself" || choice === "bless myself" ) {
  
  if (character.health === 7) {
    window.alert("The Orc is aware now that you are a holy man. Makes no difference tho, since he has a different religion. He belives in Khul the two-headed blood-god of thousand blades, but he is tolerant to all cultures so he just leave you be.");
    
    outcome = "win";
	
	character.health++
  }
  
  if (character.health < 7) {
    
    window.alert("You try to bless yourself, but you don't know shit about blessing, like 0 prayers known by you. He comes at you hard.");
    
    if (character.strength === 5) {
      window.alert("As he reaches you, you remember that you are actually a warrior so you roundhouse kick him in the balls and he dropes down crying. He just wanted to hug you... well, it is what it is.");
      
      outcome = "win";
      
    } else {
      window.alert("You get a beating of a lifetime. As you lie on the ground while the Orc is kicking you, you remember that you didn't actually go to priest school but you started stealing instead, and you're like '...Oh, right'. You probably deserve this.");
      
      outcome = "lose";
    }
  }
}

if (outcome === "lose") {
  window.alert("You lose! Yeee... wait... Naeeyyy!");
} else if (outcome === "win") {
  window.alert("You win! Yeeeey!");
}

