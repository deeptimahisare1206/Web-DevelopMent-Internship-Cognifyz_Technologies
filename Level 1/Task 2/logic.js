// Color changing button
const btn = document.getElementById("colorbtn");
const box = document.getElementById("box");
let index = 0;
let colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
btn.addEventListener("click", function colorChange() {
  if (index <= colors.length) {
    btn.style.backgroundColor = colors[index];
    box.style.backgroundColor = colors[index];
    index = index + 1;
  } else {
    index = 0;
  }
});

// <!-- ==================================================================================================== -->

// Greeting according to the time
const greet = document.getElementById("clock");

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
if (minute < 10) {
  minute = "0" + minute;
}
if (second < 10) {
  second = "0" + second;
}
function wish() {
  if (hour < 12) {
    alert("GOOD MORNING");
  } else if (hour < 17) {
    alert("GOOD AFTERNOON");
  } else {
    alert("GOOD EVENING");
  }
}
greet.innerText = "Time = " + hour + ":" + minute + ":" + second;

// <!-- ==================================================================================================== -->

//Calculator

let numone = document.getElementById("num1");
let numtwo = document.getElementById("num2");
let ad = document.getElementById("result");
numone.addEventListener("input", addition);
numtwo.addEventListener("input", addition);

function addition() {
  let one = parseFloat(numone.value) || 0;
  let two = parseFloat(numtwo.value) || 0;
  ad.innerText = one + two;
}
