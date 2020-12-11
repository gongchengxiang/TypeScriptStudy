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
