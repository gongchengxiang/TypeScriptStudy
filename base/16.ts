//类：定义一个事物的抽象特点
//对象：通过 new 类()生成类的实例
//面向对象：编程思想，三大特征：封装，继承，多态
//封装：对数据的操作隐藏起来，只对外暴露接口，外界就无法知道操作细节
//继承：子类继承父类，子类拥有父类的特征外，还有一些更具体的特征
//多态：由继承产生的相关的但不同的类，对相同的方法有不一样的实现
//存取器：getter和setter，改变属性的读取和赋值行为
//修饰符：类似public，private，protected的关键字,用于限制属性的性质
//抽象类：是供其他类继承的基类，不能被实例化，抽象类中的抽象方法必须在子类中被实现
//接口：不同类之间公共的属性或方法可以被抽象成接口，接口可以被类实现，一个类只能继承一个类，但可以实现多个接口
interface AnimalInfo {
  name:string;
}
class Animal{
  name:string;
  constructor({name}:AnimalInfo){
    this.name = name;
  }
}
class Cat extends Animal{
  static type = 'cat';
  constructor({name}){
    super(name)
  }
  say(){
    console.log('喵喵喵')
  }
}
// 抽象类暂不整