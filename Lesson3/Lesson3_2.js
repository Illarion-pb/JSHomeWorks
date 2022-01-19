var f = function (...val) {
    var check = val.some(function(elem) {
        return (isNaN(elem))?true:false;
    });
    if (check) {
        throw new Error('all parameters type should be a Number');
    };
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        sum += val[i];
    }
    return sum;
}

try {
    console.log(f(1,2,3));
    console.log(f(1,1,1,1,1,1,1,1));
    console.log(f(1,2,'s',4));
} catch(e) {
    console.log("Error: " + e.message);
}