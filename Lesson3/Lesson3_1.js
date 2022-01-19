var f = function f (val) {
    if (isNaN(val)) {
        throw new Error('parameter type is not a Number.');
    }
    return val**3;
}

try {
    console.log(f(5));
    console.log(f('Content'));
} catch (e) {
    console.log('Error: ' + e.message);
}