 // 泛型是指定义函数，接口，类的时候，不预先指定具体类型，而在使用的时候在指定类型的一种特性
 function fn1<T>(params:T):T{
  return params;
 }
//多类型
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
// 泛型约束
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 若没有特意指定length属性，就无法使用
  return arg;
}
//泛型接口
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

//泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}