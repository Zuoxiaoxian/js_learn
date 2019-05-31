// 运算函数

/*
Math.pow(2, 2)                     // 4 2的2 次幂
Math.round(.6)                     // 1.0 四舍五入
Math.ceil(.6)                      // 1.0 向上取整
Math.floor(.6)                     // 0.0 向下取整
Math.abs(-5)                       // 5 绝对值
Math.max(1, 2, 5)                  // 5 最大值
Math.min(1, 2, 5)                  // 1 最小值
Math.random()                      // 生成一个 >= 0 ， < 1.0 的伪随机数
Math.PI                            // 圆周率
Math.sqrt(2)                       // 2 的平方根
Math.pow(9, 1/3)                   // 9 的立方根

...


*/


// 日期和时间

var then = new Date(2001, 8, 17); // Mon Sep 17 2001 00:00:00 GMT+0800 (中国标准时间)
then.toLocaleString();            // "2001/9/17 上午12:00:00"
var later = new Date(2001, 8, 17, 17, 20, 50); // Mon Sep 17 2001 17:20:50 GMT+0800 (中国标准时间)
var now = new Date()             // 当前日期和时间

var year = now.getFullYear()     // 得到 year
var month = now.getMonth()       // 得到 month
var day = now.getDay()           // 得到 0: 星期日， 5：星期一
var day = now.getDate()          // 得到 day
var now_time = now.getHours()    // 得到 当地当前时间



// RegExp 正则

// 在js中使用 /正则表达式/修饰匹配模式  如： /^HTML/ -->匹配以HTML开始的字符串， /[1-9][0-9]*/ -->匹配一个非零数，后是任意个数字

//  /javascript/i -->匹配单词javascript, 忽略大小写

var text = "testing: 1, 2, 3"; // 文本示例

var pattern = /\d+/;           // 匹配所有包含一个或多个数字的实例

pattern.test(text);            // => true: 匹配成功

text.search(pattern);           // 返回首次匹配成功的位置

text.match(pattern);           // 所有匹配组成的数组

text.replace(pattern, '@');    // 返回 testing: @, @, @



// 条件运算符 (?:)

x > 0 ? x: -x;   // x 绝对值

// delete

// delete ： 删除对象属性或数组元素

var o = { x: 1, y: 1 }; // 定义一个对象
delete o.x;             // 删除对象o的一个属性

"x" in o;               // 判断x 是否在对象o中

var a = [1, 2, 3];
delete a[2];           // 删除下标为2的元素

2 in a;          


// typeof(x)           得到 x 的类型

var a = 1;
typeof(a);             // => 'number'

var x = '1';           // => 'string'


// 捕获异常



// 抛出异常  使用 throw

function fac(x){
    // 如果输入参数是非法的，则抛出一个异常
    if (x < 0 ){
        throw new Error("x 不能为负数");
    }
    else{
        alert(x)
    }
}



