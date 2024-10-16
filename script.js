// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name");
let display = document.querySelector(".display");

// This code should be working
input.addEventListener("input", function () {
  const name = input.value;
  display.textContent = name;
});

function simpleMath(var1, var2) {
  let answer = var1 + var2;
  return answer;
}
console.log(simpleMath(2, 3));
