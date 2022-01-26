let arr = [1, -2, 3, 2, -1, 6];
// let arr = [1, 2, 3, 4, 5, 6];

let reduce = function(val, cb, acc) {
    if (!Array.isArray(val)) {
        throw new Error('the first argument should be an array')
    }
    if (typeof(cb) !== "function") {
        throw new Error('the second argument should be a function')
    }
    if ((typeof(acc) !=="number") && (typeof(acc) !== "string") && !Array.isArray(acc)) {
        throw new Error('the third argument shoud be a number or string (or array)')
    }

    let retValue = acc;
    for(let i = 0; i < val.length; i++) {
        if (!val[i]) continue;
        retValue = cb(retValue, val[i], i, val)
    }
    return retValue;
}

console.log(reduce(arr, (acc, item) => acc + item, 0)); //9
console.log(reduce([[0, 1], [2, 3], [4, 5]], (a, b) => a.concat(b), [])); //[ 0, 1, 2, 3, 4, 5 ]
console.log(reduce(['b', 'c', 'd'], (a, b) => a + b, 'a')); //abcd