document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values of the two input numbers
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Calculate the sum
    const sum = num1 + num2;

    // Display the result
    document.getElementById('result').textContent = `Sum: ${sum}`;
});
