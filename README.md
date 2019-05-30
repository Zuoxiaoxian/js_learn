## javascript 学习

### demo1 

*变量，对象，数组，函数，方法，·类·*

**变量**

```javascript
var x_int = 0;
var x_f = 0.01;
var x_str = "hello, world";
var x_str2 = 'hello, world';
var x_boole = true; // false
var x_null = null;       // "空"
var x_undefined = undefined; //undefined 和null 相似

```


**对象**

```javascript
var book = {
    topic: "JavaScript",
    fat:true
};


// 通过 "." 或 [] 来访问对象 属性

book.topic;    // JavaScript
book["fat"];      // true

book.author = "Flanagan";   // 新增属性1
book["author2"] = "Flanagan2";   // 新增属性2

```

**数组**

```javascript
var primes = [2, 3, 5, 7];
primes[0];                         // 2,  索引为0

primes.length;                     // 4
primes[4] = 9;                     // 新增元素

var empty = [];                    // [] 空数组， 长度为 0

primes.push(1,2,3);                // push()向数组中添加元素

primes.reverse();                 // reverse() 翻转数组



```

**数组和对象混合使用**

```javascript
var points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];// 数组中2个元素，每个元素是一个对象

var data = {
    trial1: [[1,2], [3,4]],
    trial2: [[3,2], [3,4]]
}; // 一个对象包含2个属性，每个属性的值是一个数组。


```

**函数**

```javascript

function plus1(x, y){
    return x + y;
};// 函数一

var square = function(x){
    return x * x;
};// 函数二

// 调用 plus1(1, 3)    square(2, 4)
```

**方法（函数 + 对象）**

```javascript

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

```

**条件判断和循环**

```javascript

function abs(x){
    if (x >= 0){
        return x;
    }
    else{
        return -x;
    }
};

```

**循环**

```javascript

function fun_while(n){
    var result = 1;
    while(n > 1){
        result *= n;
        n--;
    }
    return result;
};

function fun_for(n){
    var result = 1;
    for (var i=1; i<n; i++){
        result *= i;
    }
    return result;
};
```

**面向对象编程（类）**

```javascript

// 定义类
function Point(x, y){
    this.x = x;    // 类属性
    this.y = y;    // 类属性

    this.rr = function (){ // 类---函数
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        );
    };
};

// 动态添加函数(方法)
Point.prototype.r = function(){
    return Math.sqrt(
        this.x * this.x + this.y * this.y
    );
};

// 实例化对象

var p = new Ponit(3, 4);

// 调用属性 p.x   p.y
// 调用方法 p.rr() p.r()
```

