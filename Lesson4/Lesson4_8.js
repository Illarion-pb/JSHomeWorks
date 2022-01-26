let f = function(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('argument is not Array')
    }
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc + f(item)
        } else {
            if (typeof(item) !== "number") {
                throw new Error('element is NaN')
            }
            return acc + item
        }
    },0)
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3