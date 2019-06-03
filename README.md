## javascript 学习

### demo 

*变量，对象，数组，函数，方法，·类·*

**变量**

```javascript
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
var x_undefined = undefined; //undefined:未定义 和null 相似

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

// Object.create() 方法，它创建一个新的对象，其中第一个参数是这个对象的原型。第二个参数，用于对 对象属性进一步描述。

var o1 = {
    x: 1, y: 2
};

var o2 = Object.create(o1); 

// Object.create(null); 创建一个没有原型的新对象，通过null创建的对象不会继承任何东西。




```

**数组**

```javascript
var primes = [2, 3, 5, 7];
primes[0];                         // 2,  索引为0

primes.length;                     // 4
primes[4] = 9;                     // 新增元素

var empty = [];                    // [] 空数组， 长度为 0

primes.push(1,2,3);                // push()向数组中添加元素

primes.pop();                      // pop() 弹出数组最后一个元素。

// unshift() 和 shift();   unshift() 在数组头部添加一个或多个元素,返回数组长度。 shift()删除数组的第一个元素并将其返回。

primes.reverse();                 // reverse() 翻转数组

// 可像删除对象属性一样，使用delete来删除元组元素

delete primes[0]; // 删除id 为 0 的元素！

// join()   Array.join()  将数字中的所有元素都转换为字符串连接在一起，返回最后生成的字符串。

// 可以指定一个可选的字符串在生成的字符串中分割数字的各个元素。如果不指定分割符，默认使用逗号。

var a = [1,2,3];
a.join(); // => "1,2,3"

a.join(" "); // => "1 2 3"

a.join(""); // => "123"


// reverse()  Array.reverse(): 将数组中的元素颠倒顺序，返回逆序的数组。

var a = [1,23];

a.reverse(); // =>[3,2,1]

// sort() Array.sort(): 将数组中的元素排序并返回排序后的数组。默认按字母表顺序排序。

// 如果按照其他方式而非字母表顺序，必须给sort()方法传递一个 比较函数。假设第一个参数应该在前，比较函数应返回一个小于 0 的值， 反之 大于 0

var a = [33, 4, 1111, 222];

a.sort(function(a, b){         // 4, 33, 222, 1111
    return a - b;             // 返回值，小于0 -> 从小到大顺序， 大于0 -> 从大到小！
});


// slic() Array.slice(): 返回指定数组的一个片段或子数组。

var a = [1,2,3,4,5];

a.slice(0,3);        // => [1, 2, 3]

a.slice(3);          // => [4, 5]

a.slice(1, -1);      // => [2,3,4]

a.slice(-3, -2);     // => [3]

// splice() Array.splice(): 从数字中删除、插入元素，修改了原数组！

var a = [1,2,3,4,5,6,7,8];
a.splice(4);              // => [5,6,7,8]; a: [1,2,3,4]

a.splice(1,2);            // => [2,3]; a:[1,4] 在id 为1处删除2个元素

a.splice(1,1);            // => [4]; a: [1] 在id 为1处删除1个元素

// splice() 的前两个参数指定了需要删除的数组元素。其后的任意个数的参数指定了需要插入到数组中的元素，从第一个参数指定的位置开始插入。

var a =[1,2,3,45];

a.splice(2,0,'a','b');   // => []; a: [1,2,'a','b',3,4,5]

a.splice(2,2,[1,2],3);   // => ['a',b]; a: [1,2,[1,2],3,3,4,5]

// toString() 和 toLocaleString()

// 数组和其他JavaScript对象一样有用toScript()方法。

var a = [1,2,3];
var a_ = a.toString();   // => '1,2,3'

// toLocaleString() 是 toString() 方法的本地化版本。


// Array.forEach(): 从头至尾遍历数组，为每个元素调用指定的函数。传递的第一个参数是函数，函数里面使用三个参数：数组元素，元素本身索引，数组本身。

var data = [1,2,3,4,5]; 

var sum = 0;

data.forEach(function(value, id, a){
    // value: 数组元素
    // id: 元素的索引id
    // a:  数组本身
    sum += value;
});

// 终止： 必须是在try块中， 抛出 foreach.break 异常


// Array.map()： 将调用数组中每一个元素传递给指定的函数，并返回一个数组。

var a = [1,2,3];

var b = a.map(function(x){ return x * x;}); // b: [1,4,9]

// Array.filter(): 和map() 类似，返回值为true或能转换为true，那么该元素就添加到返回数组中。

var a = [5,4,3,2,1];

var a_ = a.filter(function(x){ return x < 3;});  // [2,1]

var a__ = a.filter(function(x){ return x%2 == 0 ;}) // [4,2]

// Array.every()和 Aray.some() 函数

var a = [1,2,3,4,5,6];

var aa = a.every(function(x){ return x < 10; }); // => true, 所有值都小于10,都返回true

var aa_ = a.every(function(x){ return x % 2 === 0; }); // => false, 不是所有都为true


var b = a.some(function(x){ return x%2 === 0; }); // => true, 只要一个为true就但会true

var bb = a.some(isNaN)  // => false,都为false就返回false。
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

*switch*

```javascript

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



*其他有用的*


**条件运算符(?:)**

```javascript

x > 0 ? x: -x;   // x 绝对值, ? 左边是条件语句，右边为true的，: 后是false的

```

**delete**

```javascript

var o = { x: 1, y: 1 }; // 定义一个对象

delete o.x;             // 删除对象o的一个属性

"x" in o;               // 判断x 是否在对象o中

```

**typeof(x)           得到 x 的类型**

```javascript

var a = 1;
typeof(a);             // => 'number'

var x = '1';           // => 'string'


```

**抛出异常，使用throw new Error("")**

```javascript


function fac(x){
    // 如果输入参数是非法的，则抛出一个异常
    if (x < 0 ){
        throw new Error("x 不能为负数");
    }
    else{
        alert(x)
    }
}


```

**异常处理 try/catch/finally**


```javascript
try{
    // 通常来讲，这里的代码会从头执行到尾，而不会产生任何问题，
    // 但有时会抛出异常， 要么是由throw语句直接抛出异常，要么是通过调用一个方法简介抛出异常
}
catch(e){
    // 当且仅当try语句块抛出了异常，才会执行这里的代码。
    // 这里通过局部变量e来获取对Error对象或者抛出的其他值的引用
    //  当捕获一个异常时，把这个异常相关值（如Error对象）赋值给这个参数
    // 这里的代码块可以基于某种原因处理这个异常，也可忽略这个异常，还可以通过throw语句重新抛出异常。
}
finally{
    // 不管try语句是否抛出了异常，这里的逻辑总是会执行，
}

```

**序列化对象**

---

    对象序列化：将对象的状态转换为字符串，也可将字符串还原为对象。

    JSON.stringify() 和 JSON.parse()分别用来序列化和还原JavaScript对象。