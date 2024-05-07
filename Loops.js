//------------------------------If Else-------------------------------------------



const age = 21;

if (age > 18){
    console.log("Welcome homie, where have you been !?");
} else if ( age === 18){
    console.log("Ah, having your 18th birthday party in the pub, eh");
} else {
    console.log("Go home kiddo, your mother is calling");
}


//Ternary operator syntax - condition ? true : false

//--------------------------------Switch-----------------------------------------


const superHero = "Harley Quinn";

switch(superHero){
    case "Joker":
        console.log("I used to think my life was a tragedy, but now I realize, it's a comedy");
        break;
    case "Harley Quinn":
        console.log("I may be twisted, but at least I make it interesting");
        break;
    case "Batman":
        console.log("It's not who I am underneath, but what I do that defines me");
        break;
    default:
        console.log("You are out of tricks. Pick another superhero, your chaos won't work here");
}
