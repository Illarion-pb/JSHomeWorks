var f = function(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error('all parameters type should be a Number');
    }
    return (a - b) / c;
}

try {
    console.log(f(9,3,2));
    console.log(f('s',9,3));
} catch (e) {
    console.log('Error: ' + e.message);
}