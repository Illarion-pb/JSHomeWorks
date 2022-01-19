var f = function(val) {
    if (isNaN(val)) {
        throw new Error('parameter type is not a Number');
    }
    if ((val < 1) || (val > 7)) {
        throw new Error('parameter should be in the range of 1 to 7');
    }
    switch (val) {
        case 2:
            console.log('Понедельник');
            break;
        case 3:
            console.log('Вторник');
            break;
        case 4:
            console.log('Среда');
            break;
        case 5:
            console.log('Четверг');
            break;
        case 6:
            console.log('Пятница');
            break;
        case 7:
            console.log('Суббота');
            break;
        case 1:
            console.log('Воскресенье');
            break;    
    }
}

try {
    f(1);
    f(5);
    f(8);
} catch (e) {
    console.log('Error: ' + e.message);
}

