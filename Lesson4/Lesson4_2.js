let arr = [1, -2, 3, 2, -1, 6];
arr[10] = 22;

let filter = function(val, cb) {
    if (!Array.isArray(val)) {
        throw new Error('the first argument should be an array');
    }
    if (!(cb instanceof Function)) {
        throw new Error('the second argument should be a function')
    }

    let retValue = [];

    for(let i = 0; i < val.length; i++) {
        if (cb(val[i], i, val)) {
            retValue.push(val[i]);
        }
    }
    return retValue;
}
console.log(filter(arr, (item, index) => {
    return ((index % 2) == 0) && (item > 0)
}));