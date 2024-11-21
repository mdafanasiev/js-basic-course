// isAsc - параметр, для указания порядка сортировки. Значение true - по возрастанию, false - по убыванию.
function sortArray(inputArray, isAsc = true) {
    for (let i = 0; i < inputArray.length; i++)
        for (let j = 0; j < inputArray.length - i; j++) {
            if (sortOrderCondition(inputArray[j], inputArray[j + 1], isAsc)) {
                [inputArray[j + 1], inputArray[j]] = [
                    inputArray[j],
                    inputArray[j + 1],
                ];
            }
        }
    return inputArray;
}

// Определяем условие относительно значения порядка сортировки
function sortOrderCondition(elem1, elem2, isAsc) {
    return isAsc ? elem1 > elem2 : elem1 < elem2;
}
