// 函数
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (total, next) {
        return total + next;
    }, 0);
}
var total = sum(1, 213, 312, 3, 432, 12, 45);
var sort = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.sort(function (a, b) { return a - b; });
};
console.log(sort(4, 2, 3));
// 可选参数
function fn2(name) {
    return 'hello' + name;
}
// 默认参数
function fn3(name) {
    if (name === void 0) { name = 'gcx'; }
    return 'hello' + name;
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse(1);
