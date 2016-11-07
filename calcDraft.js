var num1Input = document.getElementById("num1Input");
var num2Input = document.getElementById("num2Input");
var calculateFunctionInput = document.getElementById("calculateFunctionInput")
var theAnswer = document.getElementById("theAnswer");
var calculatorButton = document.getElementById("calculatorButton");


calculatorButton.addEventListener("click", function() {

    var num1 = num1Input.value;
    var num2 = num2Input.value;
    var calculateFunction = calculateFunctionInput.value;
    var answer;

    if (calculateFunction === "+") {
        var answer = +num1 + +num2;
    }
    if (calculateFunction==="-") {
        var answer = +num1 - +num2;
    }
    if (calculateFunction==="*") {
        var answer = +num1 * +num2;
    }
    if (calculateFunction==="/") {
        var answer = +num1 / +num2;
    }
    if (calculateFunction==="^") {
        var answer=Math.pow(+num1, +num2)
    }
    if (calculateFunction==="%") {
        var answer=+num1 / 100 * +num2;
    }
    document.getElementById("theAnswer").innerHTML = answer;

});
