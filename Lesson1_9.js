var arr = [1,2,3,4,5,6];
var tmp;
for (var i = 0; i < 6; i++) {
    for (var j = i; j < 6; j ++) {
        if (arr[i] < arr[j]) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.dir(arr);