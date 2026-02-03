const isComing = confirm("Is the new feature coming soon?");
if (isComing) {
  alert("Great! Stay tuned for updates.");
} else {
  alert("Oh no! We'll keep you posted on any changes.");
}
console.log(isComing);

const userResponse = prompt("Do you like JavaScript? (yes/no)");
console.log("User response:", userResponse);

const x = 10;
const y = 20;
console.log("Sum of x and y is:", x + y);

const z = 15;
const t = 25;
console.log("z > t:", z > t);
console.log("z < t:", z < t);

console.log(5 == '5'); // true
console.log(5 != '5'); // true
console.log(1 == true); // true

console.log(0.1 + 0.2 == 0.3); // false due to floating-point precision
console.log((0.1 + 0.2).toFixed(1) == 0.3); // true

console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.3));  // 5
console.log(Math.round(4.5)); // 5

console.log(Math.random() * 10 + 5); // Random number between 5 and 15

console.log(1+'1'); // '11'
console.log(1+2+'3'); // '33'
console.log('3'+1+2); // '312'

const guestName = "Alice";
const roomNumber = 101;
const greeting = 
`Hello, ${guestName}! Your room number is ${roomNumber}.`;
console.log(greeting);

const message = "This is a multi-line\nstring using\nescape sequences.";
console.log(message.length);
console.log(message.toUpperCase());

const type = age >= 18 ? 'adult' : 'minor';
console.log(type);

const num1 = 5;
const num2 = 10;

const biggerNumber = num1 > num2 ? num1 : num2;
console.log(biggerNumber);

