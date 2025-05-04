 // Write a program that takes a number and prints a staircase up to that level
 
 for (let i = 0; i < 12; i++){
     for (let j = 0; j <= i; j++){
         document.write("^");
     }
     document.write("<br>");
}


// Using if...else,write the code which gets a number via propmt and then shows in alert
// - 1, if the value is greater than 0
// -1, if less than 0
// 0, if equals to 0



 let number = prompt("Enter a number:")
 number = Number(number);
 if (number > 0) {
     alert(1);
 } else if (number < 0) {
     alert(-1);
 }else {
     alert(0);
}



// ASsigments: Write a program to print prime numbers from 1 -100

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num% i === 0)return false;
    }
    return true;
}

console.log("prime numbers from 1 to 100:");
for (let i = 1; i <= 100; i++)  {
    if (isPrime(i)) {
        console.log(i);
    }
}



// Write a program to check if a number is odd or even



let mumber = prompt("Enter a number:")
number = Number(number);

if (isNaN(number)) {
    console.log("invalide, enter a number.");
} else if (number% 2 === 0){
    console.log(number +  "its an even number.")
} else{
    console.log(number + "its an odd number.")
}



// Wrirte a program to print the sum of numbers from 0 - n, n being the number entered


let n = prompt("Enter a number:");

n = Number(n);

if (isNaN(n) || n < 0) {
    console.log("Invalid ! Please enter a non-negative number.");
} else {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i; 
    }
    console.log("The sum of numbers from 0 to " + n + " is: " + sum);
}







// Write a program that prints the numbers from 1 to 100.
// But for multiples of 3, print "Fizz" instead of the number,
// for multiples of 5, print "Buzz",
// and for numbers that are multiples of both 3 and 5, print "FizzBuzz".
//



for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); 
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else{
        console.log(i);
    }
}


// Write a simple quessing game which has the user guess a selected number. Game 
// should only stop when user has gotten the answer right


const secretNumber = Math.floor(Math.random() * 10) + 1;

let guess;

while (guess !== secretNumber) {
 
    guess = prompt("Guess a number between 1 and 10:");
    
    guess = Number(guess);

    if (isNaN(guess)) {
        console.log("Invalid input! Please enter a numeric value.");
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guess > secretNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations! You guessed the correct number: " + secretNumber);
        break;
    }
}

