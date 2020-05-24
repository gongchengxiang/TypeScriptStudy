// 接口：面向对象语言中，接口是对行为的抽象，具体行为由类去实现
// 在typeScript中，用接口来定义对象的类型（描述对象的形状）

// 基本写法：属性不能多也不能少，类型也要一致
interface Person {
  name: string;
  age: number;
  gender: string;
}
const gcx: Person = {
  name: "gcx",
  age: 26,
  gender: "male",
};

// 可选属性 ,接口属性后面加问号，类中可有可以
interface Obj {
  name: string;
  aaa?: any;
}

const obj: Obj = {
  name: "obj",
};

// 任意属性
interface anyObj {
  [propName: string]: any;
}
