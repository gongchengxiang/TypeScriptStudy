// 数组类型
var arr1 = [1, 2, 343];
// arr1.push('2') // number[]类型的数组元素只能是number
var arr2 = [1, 23, 4124]; // Array<number> 也可以表示数组内全是数字，这是泛型
var arr3 = ['a', 'b', 2]; // string,number[] 类型
var arr4 = ['a', 'b', 1]; // string,number[] 泛型表示法
var arr5 = ['21', '123'];
// ArrayLikeObj 这个可以用来描述函数的参数对象 arguments
var anyArray = [1, 'd', { a: 1 }, []];
