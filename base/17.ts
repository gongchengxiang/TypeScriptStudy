//类实现接口
interface getName{
  name:string
}
class Animal2 implements getName{
  name='animal'
}
//类可以实现多个接口
// 接口继承接口
interface Alarm {
  alert(): void;
}
interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}
