var solution = function(a, b) {
    var op1, op2, sum, flag = 0;
    var c = [];
    while ((a.length > 0) || (b.length > 0)) {
        op1 = (a.length == 0)?0:a.pop();
        op2 = (b.length == 0)?0:b.pop();
        sum = op1 + op2 + flag;
        flag = (sum > 9)?1:0;
        sum = (sum > 9)?(sum - 10):sum;
        c.unshift(sum);
    }
    if (flag == 1) {
        c.unshift(1);
    }
    return c;
}

console.log(solution([2, 4, 3],[5, 6, 4]));
console.log(solution([1, 4, 5],[4, 4, 2]));
console.log(solution([1, 1, 1],[]));
console.log(solution([],[9, 9, 9]));
console.log(solution([9, 9, 9],[9, 9, 9]));
console.log(solution([],[]));
console.log(solution([],[0]));
console.log(solution([0],[0]));
console.dir(solution([1, 1, 1, 1, 1, 1, 1, 1],[1, 0]));
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));