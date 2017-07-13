#eslint-config-awesome

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![Dependency Status](https://dependencyci.com/github/soulwu/eslint-config-awesome/badge)](https://dependencyci.com/github/soulwu/eslint-config-awesome)
[![dependencies Status](https://david-dm.org/caifupai/eslint-config-cfp/status.svg)](https://david-dm.org/soulwu/eslint-config-awesome)
[![devDependencies Status](https://david-dm.org/soulwu/eslint-config-awesome/dev-status.svg)](https://david-dm.org/soulwu/eslint-config-awesome?type=dev)
[![peerDependencies Status](https://david-dm.org/caifupai/eslint-config-cfp/peer-status.svg)](https://david-dm.org/soulwu/eslint-config-awesome?type=peer)

[![Build Status](https://travis-ci.org/soulwu/eslint-config-awesome.svg?branch=master)](https://travis-ci.org/soulwu/eslint-config-awesome)

##前端编码规范

### 错误规避

### 最佳实践

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

- `complexity` 分支复杂度限制

- `consistent-return` 返回语句要么都有值，要么没有

```js
//错误示例：
function doSomething(condition) {

    if (condition) {
        return true;
    } else {
        return;
    }
}
```

- `curly` 对于所有的控制语句，需要加花括号

``` js
//错误示例：
if (foo)
  doSomething();
else
  doSomethingElse();
```
- 

### 编码风格

### ES6

