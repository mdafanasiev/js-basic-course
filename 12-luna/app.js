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
            .map((num, i) => num + ((((i + 1) % 2) * 2) % 9))
            .reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0) % 10
    );
}

console.log(isCardNumberCorrect("4561-1213-4367-2612"));
