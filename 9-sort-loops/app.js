// isAsc - параметр, для указания порядка сортировки. Значение true - по возрастанию, false - по убыванию.
function sortArray(inputArray, isAsc = true) {
    const array = [...inputArray];
    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array.length - i; j++) {
            if (sortOrderCondition(array[j], array[j + 1], isAsc)) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]];
            }
        }
    return array;
}

// Определяем условие относительно значения порядка сортировки
function sortOrderCondition(elem1, elem2, isAsc) {
    return isAsc ? elem1 > elem2 : elem1 < elem2;
}
