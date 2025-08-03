let currentExpression = "";

function appendNumber(number) {
  currentExpression += number;
  document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
  currentExpression += operator;
  document.getElementById('result').value = currentExpression;
}

function calculateResult() {
  try {
    let result = eval(currentExpression); // Eval handles + - * /
    document.getElementById('result').value = result;
    currentExpression = result.toString(); // Update expression for continued use
  } catch {
    document.getElementById('result').value = "Error";
    currentExpression = "";
  }
}

function clearResult() {
  currentExpression = "";
  document.getElementById('result').value = "";
}

function deleteLast() {
  currentExpression = currentExpression.slice(0, -1);
  document.getElementById('result').value = currentExpression;
}
