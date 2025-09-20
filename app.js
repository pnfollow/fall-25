const name = "Paige" ;

const age = 20;

if(age > 16){
    console.log("You may continue with the application.");
} else if (age < 14) {
    console.log("You are way too young to apply.");
} else {
    console.log("You are not old enough to apply.");
}

console.log(`Hello my name is ${name} I am ${age} years old and I am interested in this position.`);

console.log(name + age);

let text;
switch (new Date().getDay()) {
  case 6:
    text = "Todays date is Saturday.";
    break;
  case 0:
    text = "Todays date is Sunday.";
    break;
  default:
    text = "Looking forward to the Weekend.";
}

console.log(text)

const coin1=1;
const coin2=2;

if (coin1 === 1 && coin2 === 1) {
    console.log("You rolled heads twice in a row!");
} else {
    console.log("You lost.")
}

if (coin1 === 1 || coin2 === 1) {
    console.log("You win!");
} else {
    console.log("You lost.")
}