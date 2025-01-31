document
    .querySelector(".operations_container")
    .addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return;
        const operation = e.target;
        evaluate(operations[operation.getAttribute("operator")]);
    });

const operations = {
    "+": (op1, op2) => op1 + op2,
    "-": (op1, op2) => op1 - op2,
    "*": (op1, op2) => op1 * op2,
    "/": (op1, op2) => (op2 === 0 ? NaN : op1 / op2),
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

function evaluate(operation) {
    const [operand1, operand2] = document.getElementsByClassName("operand");
    const [val1, val2] = [
        Number(operand1.value.trim()),
        Number(operand2.value.trim()),
    ];
    showResult(operation(val1, val2));
}
