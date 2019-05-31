// ================================JavaScript 变量======================================
var x_int = 0;
var x_f = 0.01;
var x_str = "hello, world";
var x_str2 = 'hello, world';

x_str.charAt(1);   // e
x_str.slice(0,5);  // hello  包左不包右 
x_str.slice(-5);   // world

x_str.indexOf('e'); // e 首次出现的位置
x_str.indexOf('e', 3); // e 在 3及之后首次出现的位置
x_str.lastIndexOf('e'); // e 最后一次出现的位置

x_str.split(', ');      // ["hello", "world"]

x_str.replace("h", "H");  //

var x_boole = true; // false
var x_null = null;       // "空"
var x_undefined = undefined; //undefined : 为定义 和null 相似

// 注： undefined/null/0/-0/Nan/""   会被转换为 false

// ================================JavaScrip 中最重要的类型是对象。======================================

var book = {
    topic: "JavaScript",
    fat:true
};


// 通过 "." 或 [] 来访问对象 属性

book.topic;    // JavaScript
book["fat"];      // true

book.author = "Flanagan";   // 新增属性1
book["author2"] = "Flanagan2";   // 新增属性2

// Object.create() 方法，它创建一个新的对象，其中第一个参数是这个对象的原型。第二个参数，用于对 对象属性进一步描述。

var o1 = {
    x: 1, y: 2
};

var o2 = Object.create(o1); 

// Object.create(null); 创建一个没有原型的新对象，通过null创建的对象不会继承任何东西。




// ================================JavaScript 数组===================================
var primes = [2, 3, 5, 7];
primes[0];                         // 2,  索引为0

primes.length;                     // 4
primes[4] = 9;                     // 新增元素

var empty = [];                    // [] 空数组， 长度为 0

primes.push(1,2,3);                // push()向数组中添加元素

primes.reverse();                 // reverse() 翻转数组

// ================================数组和对象混合使用================================

var points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];// 数组中2个元素，每个元素是一个对象

var data = {
    trial1: [[1,2], [3,4]],
    trial2: [[3,2], [3,4]]
}; // 一个对象包含2个属性，每个属性的值是一个数组。


// ================================JavaScript 函数======================================

function plus1(x, y){
    return x + y;
};// 函数一

var square = function(x){
    return x * x;
};// 函数二

// ================================JavaScript 方法（函数 + 对象）======================================

var points2 = [
    {x: 0, y: 0},
    {x: 3, y:4}
];

points2.dist = function(){
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    return Math.sqrt(
        a * a + b * b
    );

}; // 计算对象数组中，2个对象之间的距离！   points2.dist()



// ================================JavaScript 条件判断和循环======================================

// if - else

function abs(x){
    if (x >= 0){
        return x;
    }
    else{
        return -x;
    }
};

// 多个分支
if (n == 1){
    // 执行代码块 1
}
else if (n == 2){
    // 执行代码块 2
}
else if (n == 3 ){
    // 执行代码块3
}
else{
    // 其他条件，执行！
}

// switch

switch(n){
    case 1:                            // 如果 n === 1, 从这里执行
        // 执行代码块 1
        break;
    case 2:
        // 执行代码块 2
        break;
    case 3:
        // 执行代码块 3
        break;
    default:                           // 所有的条件都不匹配
        // 执行代码块 4
        break;

}



// while 循环

function fun_while(n){
    var product = 1;
    while(n > 1){
        product *= n;
        n--;
    }
    return product;
}

// for 循环

function fun_for(n){
    var product = 1;
    for (var i=1; i <= n; i++){
        product *= i;
    }
    return product;
}

// do while  --> 至少会执行一次

/*

do{
    执行代码；
}while ();

*/




// ================================JavaScript 面向对象编程（类）======================================


// 定义类
function Poin(x, y){
    this.x = x;        // 类似Python 类属性
    this.y = y;        // 类似Python 类属性
    this.aa = function (){
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        )
    };  // 内置函数
};

// 类的实例化
var p = new Poin(1, 1)

// p.name = 3 / p["age"] = 23 示例对象添加属性

// 动态给类添加方法
Poin.prototype.r = function(){
    return Math.sqrt(
        this.x * this.x + this.y * this.y
    )
};

// p.r()  调用

