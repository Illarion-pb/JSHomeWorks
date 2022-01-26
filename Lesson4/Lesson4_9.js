let arrayFill = function(val, len) {
    if (!val || (typeof(val) === "undefined") || (typeof(val) === "boolean")) {
        console.log(val);
        throw new Error('может принимать только число, строку, объект, массив')
    }
    if (typeof(len) !== "number") {
        throw new Error('может принимать только число')
    }
    let retValue = new Array(len);
    retValue.fill(val);
    return retValue
}

let a = 'Hello';
console.log(arrayFill(a, 5)); // [ 'Hello', 'Hello', 'Hello', 'Hello', 'Hello' ]