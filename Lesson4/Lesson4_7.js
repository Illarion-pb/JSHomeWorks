let arr = ['abcd', 'abcde', 'ab', 'abc'];
let arrLength = [];
for (let i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}
console.log( arrLength ); // 4,5,2,3
arrLength = [];
console.log(arrLength); //[]
arrLength = ['abcd', 'abcde', 'ab', 'abc', 'new_value'].map(item => item.length); //[ 4, 5, 2, 3, 9 ]
console.log(arrLength);

