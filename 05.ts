// 联合类型：同时可以是多个指定类型
let num_str: number | string;
num_str = 1;
num_str = "str";

// 联合类型的值在不能确定是什么类型时候，属性只能取两个类型共有的属性
function aaa(value: number | string): void {
  // console.log(value.length); // 数字没有length属性
  // console.log(value.toFixed(2)); // 字符串没有toFixed方法
  console.log(value.toString()); // toString()是数字和字符串共有的方法
}

// 联合类型在赋值时被推断为某个类型;如被推断为数字的时候，仅可以用数字的方法和属性
let num_str_bool: number | string | boolean;
num_str_bool = 1;
num_str_bool.toFixed(2);
num_str_bool = "str";
num_str_bool.length;
num_str_bool = true;
num_str_bool.toString();
