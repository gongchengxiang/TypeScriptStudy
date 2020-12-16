// 声明文件，当引入第三方库时，需要引入他的声明文件，才能获得对应的代码补全，接口提示等功能
// jQuery
declare var jQuery : (selector:string) => any // 定义jQuery变量
declare function $(selector:string) : any // jQuery也可以用函数来定义
