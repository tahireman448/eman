
var correctPassword = "IQTIDAR12345"; 
var userPassword = prompt("Please enter your password:"); 

if (!userPassword) {
    alert("Please enter your password"); 
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password"); 
} else {
    alert("Incorrect password"); 
}

var secretNum = 12345
var guess = +prompt("Guess the secret number (1-10):");
if (guess === secretNum) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNum) {
    alert("Close enough to the correct answer");
}




