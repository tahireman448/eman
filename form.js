
var correctPassword = "KINGALIRAZA"; 
var userPassword = prompt("Please enter your password:"); 

if (!userPassword) {
    alert("Please enter your password"); 
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password"); 
} else {
    alert("Incorrect password"); 
}

var secretNum = 7
var guess = +prompt("Guess the secret number (1-10):");
if (guess === secretNum) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNum) {
    alert("Close enough to the correct answer");
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


