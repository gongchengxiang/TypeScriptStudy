// 类型断言
// 语法   值 as 类型  或  <类型>值 ，后面这个不推荐
var fish = {
    name: 'fish',
    swim: function () { }
};
// 下面这个例子不太对，只是为了说明 animal as Cat 才能使用cat的专属方法， as 只能骗过typescript， 运行时该保存还是报错
function animal(animal) {
    if (typeof animal.run === 'function') {
        animal.run();
    }
    else {
        animal.swim();
    }
}
