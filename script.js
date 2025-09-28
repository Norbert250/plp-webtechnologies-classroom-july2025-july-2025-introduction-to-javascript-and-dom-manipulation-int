// Part 1: Variables & Conditionals
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", function() {
    const age = Number(ageInput.value);
    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a minor.";
    }
});

// Part 2: Functions
function calculateSum(a, b) {
    return a + b;
}

function greetUser(name) {
    return `Hello, ${name}!`;
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumBtn = document.getElementById("sumBtn");
const sumResult = document.getElementById("sumResult");

sumBtn.addEventListener("click", function() {
    const sum = calculateSum(Number(num1.value), Number(num2.value));
    sumResult.textContent = `Sum: ${sum}`;
});

// Part 3: Loops
const generateListBtn = document.getElementById("generateListBtn");
const numberList = document.getElementById("numberList");

generateListBtn.addEventListener("click", function() {
    numberList.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i}`;
        numberList.appendChild(li);
    }
});

// Part 4: DOM Manipulation
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const header = document.querySelector("h1");

changeTextBtn.addEventListener("click", function() {
    header.textContent = "Header Text Changed!";
});

toggleColorBtn.addEventListener("click", function() {
    header.classList.toggle("red");
});
