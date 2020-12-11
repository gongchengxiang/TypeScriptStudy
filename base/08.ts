// 函数
function sum(...nums:number[]):number{
  return nums.reduce((total,next)=>{
    return total + next
  },0)
}
const total:number = sum(1,213,312,3,432,12,45)

// 接口定义函数形状
interface Fn1{
  (...rest:number[]):number[];
}
const sort:Fn1 = function (...rest){
  return rest.sort((a,b)=>a-b)
}
console.log(sort(4,2,3))

// 可选参数
function fn2(name?:string):string{
  return 'hello' + name
}
// 默认参数
function fn3(name:string='gcx'):string{
  return 'hello' + name
}
// 联合类型
function reverse(x:number):number
function reverse(x:string):string
function reverse(x:number|string):number|string{
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
reverse(1)