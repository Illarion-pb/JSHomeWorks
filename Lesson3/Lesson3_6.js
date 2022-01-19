var isEven = function(val) {
    if (isNaN(val)) {
        throw new Error('parameter type is not a Number');
    }
    return (val % 2 == 0)?true:false;
}

try {
    console.log(isEven(3));
    console.log(isEven(4));
    console.log(isEven('Content'));
} catch (e) {
    console.log('Error: ' + e.message);
}