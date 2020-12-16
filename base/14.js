// 元组 ，
// 元组中的类型对应变量值的类型，例如下面这个元组，第一个位置必须是string类型，第二个位置必须是number类型，但是再往里push的可以是string类型或number类型
// 当变量初始换赋值的时候，可以是['tom',20] ，也可以不赋值，然后通过索引赋值，但是不能赋值为[]
var tom = ['tom', 20];
var bobo;
bobo = ['bobo', 25];
bobo.push('male');
bobo.push('student');
// bobo[0] = 111;
