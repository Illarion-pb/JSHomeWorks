var arr = [6,5,4,3,2,1];
var tmp;
for (var i = 0; i < 6; i++) {
    for (var j = i; j < 6; j ++) {
        if (arr[i] > arr[j]) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.dir(arr);