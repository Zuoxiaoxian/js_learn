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

var then = new Date(2001, 8, 17); // 2001年1月1日
var later = new Date(2001, 8, 17, 17, 20, 50); //2001年1月1日5:20:50
var now = new Date()             // 当前日期和时间

var year = now.getFullYear()     // 得到 year
var month = now.getMonth()       // 得到 month
var day = now.getDay()           // 得到 day 0: 星期日， 5：星期一
var now_time = now.getHours()    // 得到 当地当前时间

