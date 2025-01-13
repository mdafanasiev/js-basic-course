function filter(inpArray, deleteFunc) {
    const resArray = [];
    for (const el of inpArray)
        if (deleteFunc(el)) continue;
        else resArray.push(el);
    return resArray;
}

const delFn = function (el) {
    return el >= 5;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
arr = filter(arr, delFn);
console.log(arr);
