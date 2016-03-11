前端编码规范


## 错误规避

## 最佳实践

 - `accessor-pairs` 强制getter和setter成对出现
 
 - `block-scoped-var` var定义的变量必须在function作用域的顶部
 
 ```js
 function doSomething() {
    if (true) {
        var build = true;//放在外面定义
    }
    console.log(build);
}

```
var变量定义提升。
ES6的let和const有块级作用域
***
- `complexity` 分支复杂度限制


## 编码风格

## ES6

