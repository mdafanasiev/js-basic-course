function isCardNumberCorrect(cardNumber) {
    const cardNumberFiltered = cardNumber.trim();
    const cardNumberArray = cardNumberFiltered
        .split("-")
        .map((block) => block.trim());
    if (!hasValidStructure(cardNumberArray)) return false;
    let numbersArray = cardNumberArray
        .join("")
        .split("")
        .map((el) => Number(el));
    return lunaAlgo(numbersArray);
}

function hasValidStructure(cardNumber) {
    const BLOCK_LENGTH = 4;
    const BLOCK_COUNT = BLOCK_LENGTH;
    return (
        cardNumber.length == BLOCK_COUNT &&
        cardNumber.every((block) => block.length == BLOCK_LENGTH)
    );
}

function isNumericalBlock(block) {
    return block.split().every((el) => isNaN(Number(el)));
}

function lunaAlgo(numbersArray) {
    return !(
        numbersArray
            .map((num, i) => {
                if (i % 2 == 0) return num * 2 > 9 ? num * 2 - 9 : num * 2;
                else return num;
            })
            .reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0) % 10
    );
}

console.log(isCardNumberCorrect("234s834503458353"));
console.log(isCardNumberCorrect("2342834503458353"));
console.log(isCardNumberCorrect("4561-2612-1234-5464"));
console.log(isCardNumberCorrect("4561-2612-1534-5464"));
