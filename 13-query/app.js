const hasValidType = (val) =>
    typeof val === "number" ||
    typeof val === "string" ||
    typeof val === "boolean";

function queryString(queryObj) {
    let queryStr = "";
    const queryKeyValues = Object.entries(queryObj);
    const keysCount = queryKeyValues.length;

    let currCount = 0;
    for (const [key, value] of queryKeyValues) {
        if (!hasValidType(value)) {
            continue;
        } else {
            currCount++;
            queryStr += `${currCount == 1 ? "" : "&"}${key}=${value}`;
        }
    }
    return queryStr;
}

// Тесты
const queryStr1 = queryString({
    search: "Вася",
    take: 10,
    func: function () {
        return 5;
    },
});
console.log(queryStr1);

const queryStr2 = queryString({
    obj: {
        search: "Вася",
        take: 10,
    },
    name: "Mih",
});
console.log(queryStr2);

const queryStr3 = queryString({
    get3: function () {
        return 3;
    },
    val: true,
});
console.log(queryStr3);

const queryStr4 = queryString({
    salary: 500000,
    print4: function () {
        console.log(4);
    },
    isHuman: false,
});
console.log(queryStr4);
