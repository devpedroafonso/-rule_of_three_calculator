document.getElementById('calculate').addEventListener('click', function () {
    const numberA = parseFloat(document.getElementById('numberA').value);
    const numberB = parseFloat(document.getElementById('numberB').value);
    const numberC = parseFloat(document.getElementById('numberC').value);

    if (isNaN(numberA) || isNaN(numberB) || isNaN(numberC) || numberA === 0) {
        document.getElementById('result').textContent = 'invalido';
        return;
    }

    let result = (numberC * numberB) / numberA;

    if (Number.isInteger(result)) {
        document.getElementById('result').textContent = result;
    }
    else {
        document.getElementById('result').textContent = result.toFixed(2);
    }

});




