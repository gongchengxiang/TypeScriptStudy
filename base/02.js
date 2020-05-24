// 基本数据类型
// js数据类型分为原始数据类型和对象数据类型
// 原始数据类型：boolean number string undefined null symbol
// 对象数据类型：object array
var boolValue = false;
boolValue = true;
boolValue = Boolean(1);
console.log(boolValue);
var numberValue = 1;
numberValue = 10;
numberValue = NaN;
numberValue = Infinity;
numberValue = 0.012;
numberValue = undefined;
console.log(numberValue);
var stringValue = "gcx";
stringValue = "" + 111;
stringValue = String(1);
stringValue = null;
stringValue = undefined;
console.log(stringValue);
function test() {
    console.log("test");
}
var voidValue = undefined;
voidValue = null;
var u = undefined;
var n = null;
// undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
var number0 = undefined;
var number1 = null;
var voidValueTest = null;
// let numberValueTest: number = voidValueTest;  // void 不能给number赋值
// undefined 和 null 可以给任意类型赋值，void类型的值只能给void类型赋值
// let v: void = undefined;
// let num: number = v;
