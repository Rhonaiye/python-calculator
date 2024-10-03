// Function to format the result, similar to Python version
function formatResult(result) {
    return Number.isInteger(result) ? result : result.toFixed(2);
  }
  
  try {
    const number1 = parseFloat(prompt("Type the first number:"));
    const number2 = parseFloat(prompt("Type the second number:"));
    const sign = prompt("Sign (+, -, *, /):");
  
    if (isNaN(number1) || isNaN(number2)) {
      throw new Error("Invalid input. Please enter valid numbers.");
    }
  
    let result;
  
    switch (sign) {
      case "+":
        result = number1 + number2;
        alert(`Result: ${formatResult(result)}`);
        break;
      case "-":
        result = number1 - number2;
        alert(`Result: ${formatResult(result)}`);
        break;
      case "*":
        result = number1 * number2;
        alert(`Result: ${formatResult(result)}`);
        break;
      case "/":
        if (number2 === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        result = number1 / number2;
        alert(`Result: ${formatResult(result)}`);
        break;
      default:
        alert("Error: Invalid operator. Use +, -, *, or /.");
        break;
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
  