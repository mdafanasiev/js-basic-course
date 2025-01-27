const operations = {
    plus(op1, op2) {
        return op1 + op2;
    },
    minus(op1, op2) {
        return op1 - op2;
    },
    mult(op1, op2) {
        return op1 * op2;
    },
    div(op1, op2) {
        return op2 === 0 ? NaN : op1 / op2;
    },
};

const clearInputs = function () {
    const operands = document.getElementsByClassName("operand");
    Array.prototype.map.call(operands, (operand) => (operand.value = ""));
};
const showResult = function (result) {
    clearInputs();
    const resultBlock = document.querySelector(".result_hidden");
    if (resultBlock) {
        resultBlock.classList.remove("result_hidden");
        resultBlock.classList.add("result_show");
    }
    const resultTextField = document.getElementById("result_value");
    resultTextField.innerText = String(result);
};

function plus() {
    evaluate(operations.plus);
}

function minus() {
    evaluate(operations.minus);
}

function mult() {
    evaluate(operations.mult);
}

function divide() {
    evaluate(operations.div);
}

function evaluate(operation) {
    const [operand1, operand2] = document.getElementsByClassName("operand");
    const [val1, val2] = [
        Number(operand1.value.trim()),
        Number(operand2.value.trim()),
    ];
    showResult(operation(val1, val2));
}
