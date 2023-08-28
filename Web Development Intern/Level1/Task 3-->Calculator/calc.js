

function appendToResult(value) {                         /* for display value in input*/
    document.getElementById('display').value += value;
}

function clearResult() {                                 /* for clear all data*/
    document.getElementById('display').value = '';
}
function deleteResult() {
    display.value = display.value.slice(0, -1);           /* for delete last number*/
}
function toggleButton() {
    display.value = parseFloat(display.value) * -1;          /* for make a number negative */
}

function calculate() {                                  /* eval function use to solve the problem and yhis for equal button*/
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

