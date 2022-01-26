let reverse = function(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter should be an array')
    }
    if (arr.length == 0) {
        throw new Error('array shouldn\'t be empty')
    }
    let retValue = [];
    for (let i = 0; i < arr.length; i++) {
        retValue.unshift(arr[i]);
    }
    return retValue
}

const arr = [3,2,1];
console.log(reverse(arr)); // [1,2,3]