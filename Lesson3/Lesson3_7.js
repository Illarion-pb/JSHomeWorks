var getDivisors = function(val) {
    if (isNaN(val)) {
        throw new Error('parameter type is not a Number');
    }
    if (val <= 0) {
        throw new Error('parameter can\'t be a 0 or less');
    }
    var arr = [];
    for (var i = 1; i <= val; i++) {
        if (val % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

try {
    console.log(getDivisors(12));
    console.log(getDivisors('Content'));
    console.log(getDivisors(0));
} catch (e) {
    console.log('Error: ' + e.message);
}