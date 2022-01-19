var f = function(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    }
    if (arr.length == 0) {
        throw new Error('parameter can\'t be an empty')
    }
    console.log(arr.shift());
    if (arr.length > 0) f(arr);
}

try {
    f([1,2,3]);
    f(1,2,3);
    f('Content');
    f([]);
} catch (e) {
    console.log('Error: ' + e.message);
}