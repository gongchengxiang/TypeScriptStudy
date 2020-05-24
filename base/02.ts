// 基本数据类型

// js数据类型分为原始数据类型和对象数据类型
// 原始数据类型：boolean number string undefined null symbol
// 对象数据类型：object array
let boolValue: boolean = false;
boolValue = true;
boolValue = Boolean(1);
console.log(boolValue);

let numberValue: number = 1;
numberValue = 0b1010;
numberValue = NaN;
numberValue = Infinity;
numberValue = 0.012;
numberValue = undefined;
console.log(numberValue);

let stringValue: string = "gcx";
stringValue = `${111}`;
stringValue = String(1);
stringValue = null;
stringValue = undefined;
console.log(stringValue);

function test(): void {
  console.log("test");
}
let voidValue: void = undefined;
voidValue = null;

let u: undefined = undefined;
let n: null = null;
// undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let number0: number = undefined;
let number1: number = null;
let voidValueTest: void = null;
// let numberValueTest: number = voidValueTest;  // void 不能给number赋值

// undefined 和 null 可以给任意类型赋值，void类型的值只能给void类型赋值
// let v: void = undefined;
// let num: number = v;
