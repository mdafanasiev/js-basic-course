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
        currCount++;
        if (!hasValidType(value)) {
            continue;
        } else {
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
console.log(queryStr1);
