/* Примеры входных данных:

Верные даты: "10.02.22", "11.12.23"
Неверные данные: "0.13.22", "41.12"
Задание:

Разработайте функцию, принимающую массив строк.
Функция должна анализировать каждую строку:
Отфильтровать невалидные даты.
Преобразовать валидные даты к единому формату.
Условия валидации дат:

Форматы дат: DD.MM.YY или MM/DD/YY.
День не может быть больше 31.
Месяц не может быть больше 12.
Учитывать високосные года для февраля (опционально).
Результат:

За единый формат примем DD-MM-YY*/
function correctDates(inputArr) {
    return inputArr
        .filter((el) => isValidDate(el))
        .map((date) => dateToRightFormat(date));
}

function isValidDate(date) {
    const separator = dateSeparator(date);
    if (separator === "") return false;

    const dateParts = date.split(separator);
    return isVaildPartsOfDate(dateParts, separator);
}

function dateToRightFormat(date) {
    const separator = dateSeparator(date);
    const dateParts = date.split(separator);

    if (separator === ".")
        return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
    else return `${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`;

    return newDate;
}

function dateSeparator(date) {
    switch (true) {
        case date.includes("."):
            return ".";
        case date.includes("/"):
            return "/";
        default:
            return "";
    }
}

function isVaildPartsOfDate(dateParts, separator) {
    const PARTS_COUNT = 3;
    const PARTS_LENGTH = 2;
    const hasWrongLengthParts = !dateParts.every(
        (el) => el.length == PARTS_LENGTH
    );
    if (dateParts.length != PARTS_COUNT || hasWrongLengthParts) return false;

    if (separator == ".")
        [year, month, day] = [
            Number(dateParts[2]),
            Number(dateParts[1]),
            Number(dateParts[0]),
        ];
    else
        [year, month, day] = [
            Number(dateParts[2]),
            Number(dateParts[0]),
            Number(dateParts[1]),
        ];

    return isCorrectDate(year, month, day);
}

function isCorrectDate(year, month, day) {
    if (month > 12 || month <= 0) return false;

    const LONG_MONTHS = [1, 3, 5, 7, 8, 10, 12];

    if (LONG_MONTHS.includes(month)) {
        return day <= 31;
    } else {
        if (month == 2) {
            return isLeapYear(year) ? day <= 29 : day <= 28;
        }

        return day <= 30;
    }
}

function isLeapYear(year) {
    year += 2000;
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

// Тестирование
console.log(
    correctDates([
        "10.02.22",
        "11/12/23",
        "0.13.22",
        "41.12",
        "test",
        "29.02.2023",
        "29.02.23",
        "29.02.24",
        "02/20/25",
    ])
);
