let arr = [1, -2, 3, 2, -1, 6];
// let arr = [1, 2, 3, 4, 5, 6];

let some = function(val, cb) {
    if (!Array.isArray(val)) {
        throw new Error('the first argument should be an array');
    }
    if (!(cb instanceof Function)) {
        throw new Error('the second argument should be a function')
    }

    let retValue = false;
    for(let i = 0; i < val.length; i++) {
        retValue = retValue || cb(val[i], i, val);
    }
    return retValue;
}

console.log(some(arr, item => item < 0));