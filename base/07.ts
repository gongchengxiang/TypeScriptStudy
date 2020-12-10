// 数组类型
const arr1:number[] = [1,2,343]
// arr1.push('2') // number[]类型的数组元素只能是number
const arr2:Array<number> = [1,23,4124] // Array<number> 也可以表示数组内全是数字，这是泛型

const arr3:string[] = ['a','b'] // string[] 类型
const arr4:Array<string> = ['a','b'] // string[] 泛型表示法

interface ArrayInterface { // 用接口描述数组，每一个元素都是string, 不推荐
  [index:number]:string;
}
const arr5:ArrayInterface = ['21','123']

// 类数组可以用接口描述
interface ArrayLikeObj {
  [index:number]:any;
  length:number;
  callee: Function;
}
// ArrayLikeObj 这个可以用来描述函数的参数对象 arguments
