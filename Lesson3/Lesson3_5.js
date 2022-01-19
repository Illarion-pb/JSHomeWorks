var arr = [1, 2, -4, 3, -9, -1, 7];

var isPositive = function(val) {
    if (isNaN(val)) {
        throw new Error('parameter type is not a Number');
    }
    return (val > 0)?true:false; 
}

var arr_new = [];
try {
    for (var i = 0; i < arr.length; i++) {
        if (isPositive(arr[i])) {
            arr_new.push(arr[i]);
        }
    }
    console.log(arr_new);
}catch (e) {
    console.log('Error: ' + e.message);
}
