  var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  display = false;

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (display === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (display === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "/") {
      display = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      display = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

// adding click handlers to operators
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "/") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // if first key pressed is an opearator, don't do anything
      console.log("enter a number");
    } else {
      input.innerHTML += e.target.innerHTML;
    }

  });
}
function equal(){ var inputString = input.innerHTML;
  // forming an array of numbers.
  var numbers = inputString.split(/\+|\-|\x|\//g);
  // forming an array of operators.
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  var divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
  }

  var multiply = operators.indexOf("x");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("x");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output
  display = true;
}
function clearBtn(){
   input.innerHTML = "";
}
// on click of equal button
result.addEventListener("click", equal);

// clearing button
clear.addEventListener("click", clearBtn);