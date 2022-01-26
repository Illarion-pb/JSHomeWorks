let arr = [1, 5, 3];
arr[10] = 15;

let forEach = function (val, cb) {
    if (!Array.isArray(val)) {
        throw new Error('the first argument should be an array');
    }
    if (!(cb instanceof Function)) {
        throw new Error('the second argument should be a function')
    }

    for(let i = 0; i < val.length; i++) {
        if (!val[i]) continue;
        cb(val[i], i, val);
    }
}

forEach(arr, (item, index, arr) => {
    console.log({index, item});
})
