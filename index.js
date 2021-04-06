// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Intialize both arrays
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let end = numbers.length - 1;
let start = 0;
let temp = 0;

while (start < end) {
  temp = numbers[start];
  numbers[start] = numbers[end];
  numbers[end] = temp;
  console.log(start, end);
  end--;
  start++;
}

console.log(numbers);
