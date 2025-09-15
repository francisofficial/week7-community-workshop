// ----------------------------
// Part 1: Animation Trigger
// ----------------------------
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.querySelector(".animate-box");

animateBtn.addEventListener("click", () => {
  // Add animation class
  animateBox.classList.add("animated");

  // Remove class after animation ends so it can be triggered again
  animateBox.addEventListener("animationend", () => {
    animateBox.classList.remove("animated");
  }, { once: true });
});

// ----------------------------
// Part 2: Function Demo
// Demonstrates scope, parameters, and return values
// ----------------------------
function sumNumbers(a, b) {
  // Function parameters a and b
  let total = a + b; // local scope variable
  return total;      // returns value to caller
}

const calculateBtn = document.getElementById("calculateBtn");
const calcResult = document.getElementById("calcResult");

calculateBtn.addEventListener("click", () => {
  let result = sumNumbers(10, 20); // call function with arguments
  calcResult.textContent = `The sum of 10 + 20 is ${result}`;
});

// ----------------------------
// Part 3: Scope Example
// ----------------------------
let workshopName = "Community Workshop";

function showScope() {
  let localMsg = "This is local to the function";
  console.log("Global variable:", workshopName);
  console.log("Local variable:", localMsg);
}

showScope();
// console.log(localMsg); // ❌ Would give an error because localMsg is function-scoped
