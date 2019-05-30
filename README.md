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