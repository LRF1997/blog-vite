###### 此页只写一些自己没有搞懂的，进行复习，一些简单的类型就不写了

##### void 空值问题

```
void 空值函数要么只return 或者 直接不return 

void是不能赋值给别人，undefined 跟 null是可以的
// 如果配置了tsconfig.json 开启了严格模式 null 不能 赋予 void 类型
let v:void = undefined || null

let str: string = '我是文字'

str = v // 这里是报错的

let u:undefined = undefined 

let n:null = null 

str = u | n  ok!!

```

##### Any类型 和 unknown 类型

`unknown类型赋值只能给unknown类型赋值或者any类型赋值,其他类型报错`

`unknown类型不能去调用属性和方法`

```
// Any类型 和 unknown 类型
// unknown类型比Any更安全一些
// unknown类型不能去调用属性和方法
// unknown类型赋值只能给unknown类型赋值或者any类型赋值


let str:unknown = 'LRF'
let u2:unknown = 'QQQ'

let obj:unknown = {a:6}
let obj2:unknown = {a:():number=> 123}

// obj.a err
// obj2.a() err

let anyType: any = 123
let num:number = 789


// num = str // err

anyType = str // ok
str = u2 // ok

console.log(obj,obj2);

```

#### interface 接口

`接口重名的话会自动合并`

`?是可选式操作符 可有可没有`

`任意属性 [propName: string]: any （放接口最下面,一般是不确定还有哪些属性）`

`readonly 约束属性为只读类型 不可以赋值`

`extends interface B extends A 可以继承他的接口`

```
interface IObj {
  readonly name: string,
  age: number,
  [propName: string]: any
}

interface IObj {
  title?: boolean,
  cb():number,
}

let obj:IObj = {
  name: 'LRF',
  age: 18,
  title: false,
  qqq:123,
  cb:():number => {
    return 123
  }
}


// obj.name = 'qqq' // err
console.log(obj);


interface A {
  name: string
}

interface B extends A {
  age: number
}


let B:B = {
  name: '我是名字',
  age: 8
}
```

#### Array类型

```
// let arr:number[] = [456,123]
// let arr2:string[] = ['456','123']
// let arr3:any[] = ['456','123',true,null,123]


// 泛型形式定义

// let arr5 :Array<number> = [456,123]


// 二维数组
let arr2:number[][] = [[],[]]

let arr3:Array<Array<number | string >> = [[123],['456']]

function Arr (...args:any):void {
  let arr:IArguments = arguments
  console.log(arr);
}

Arr(1,2,3)

interface ArrNumber {
  [index:number]: number
}

let arrN:ArrNumber = [1,2,3]
```

##### 函数类型

` 函数重载
重载是方法名字相同，而参数不同，返回类型可以相同也可以不同，如果参数类型不同，则操作函数参数类型应设置为any，参数数量不同可以将不同的参数设置为可选。`

```
const fn = (name:string,age:number = 20):string => {
  return name + age
}

let a = fn('LRF')
console.log(a);

const fn2 = (name:string,age?:number):string => {
  return name + age
}

let a2 = fn2('LRF')
console.log(a);


interface User {
  name: string,
  age:number
}

const fn3 = (user:User):User => {
  return user
}

let a3 = fn3({name:'LRF', age: 20})

console.log('a3---',a3);


// 函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同，如果参数类型不同，则操作函数参数类型应设置为any，
// 参数数量不同可以将不同的参数设置为可选。
// 这里上面几个是函数规则，如果匹配到哪个就用哪个规则
function fn8(p1:string):void
function fn8(p1:number,p2:string):void
function fn8(p1:any,p2?:any): any {
  return p1+p2
}


let p8 = fn8('9') // 这里就用到了第一个规则

let p9 = fn8(9,'9') // 这里就用到了第二个规则
```

##### 联合类型 交叉类型 类型断言

```
联合类型就是 用 | 多个类型
let phone:number | string = '010-123456'
function fn(type:number | boolean):boolean {
  return !!type
}
交叉类型 & 类似于 extends 
interface A {
  name: string,
  age:20
}

interface B {
  gender: string
}

const lrf = (obj:A & B):void =>  {
  console.log(obj);
}

 类型断言 欺骗ts,不能滥用!!
 
 第一种写法 ( 变量 as 判断类型 ) 
 第二种写法 (<断言的类型>变量)
 
 let fn = function(num:number | string):void {
  console.log((num as string).length);
  console.log((<string>num).length);
  
}

fn('lrf')


interface A {
  name: string,
}

interface B {
  age: string,
}

const fn2 = (type:A | B):void => {
  console.log((<A>type).name);
}

fn2({name: '李瑞峰'})
```

#### 内置对象

```
function promise ():Promise<string> {
  return new Promise<string>((resolve,reject)=> {
    resolve('888')
  })
}

promise().then(res => {
  console.log(res.length);
})
const regexp:RegExp = /\w\d\s/
const date:Date = new Date()
const error:Error = new Error('qwqw')

// const list:NodeList = document.querySelectorAll('.list li')
// const body:HTMLElement = document.body
// const div:HTMLDivElement = document.querySelector('div')
// body.addEventListener('click',(e:MouseEvent) => {
//   console.log(e);
// })
```

### class类

`lass 修饰符 public private`

`public 内部外部都可以访问 写不写都是默认public`
`private 私有变量只能在内部访问`
`protected 内部和子类中访问`

`class 静态类 static`
`static 属性只能在构造函数上面只用`
`static 方法不能访问类的属性，curstructor也不能访问静态方法跟属性，static只能访问静态的属性`

#### 抽象类abstract

`抽象类是不可以用new 创建的,如果抽象类的抽象方法也是不能在自己的类实现，需要通过继承实现`

```
class Person {
  name:string
  private age:number
  protected gender:string
  static wqwq: number = 123456
  constructor(name:string,age:number,gender:string) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  sayHello() {
    this.age = 80
    Person.run()
  }

  static run() {
    console.log('run');
    this.wqwq = 689
  }
}

class Child extends Person{
  constructor(name:string,age:number,gender:string) {
    super(name,age,gender)
    // this.
  }

}

let p = new Person('LRF',20,'男')
let p2 = new Child('LRF',20,'男')
console.log(Person);

interface IPeople {
  name: string,
  run(type:string):string
}
interface ISay {
  say():void
}
class people extends Person implements IPeople,ISay {
  names: string
  constructor(names:string) {
    super('1',2,'3')
    this.names = names
  }
  run(num:string) {
    return num
  }
  say() {
    console.log('121');
  }
}
```

```
abstract class A {
  name1:string
  constructor(name1:string) {
    this.name1 = name1
  }
  abstract sayHello():void
}


class B extends A {
  constructor() {
    super('LRF')
  }
  sayHello(): void {
    console.log('你好',this.name1);
  }
}

let b = new B()
console.log(b);
b.sayHello()
```

##### 元组

`元组就是就是数组的变种，跟数组语法基本一致`

```
let arr:Array<number | string> = [1,2,3,'4'] // 数组

let arr2:[number,string] = [1,'3'] // 元组

arr2.push('1')


let excel:[string,string,number][] = [
  ['1','2',3]
] 
```

### 枚举

```typescript
enum Color {
  red = 1,
  green,
  blue
}
// 特性
// 不写值，默认就是从0开始的
// 增长枚举 数字自增
console.log(Color);

// 异构枚举
enum Color {
  yes = 1,
  no = 'no'
}

// 接口枚举

interface A1 {
  red: Color.yes
}

let obj:A1 = {
  red: Color.yes
}

// const 枚举 const 不会把编译成对象，编译成一个常量

const enum Types {
  success,
  error
}


// 反向映射 值是字符串是不能反射的

enum Type {
  success,
  error
}

let success :number  = Type.success

console.log(Type[success]);

```

### 类型推断-类型别名

```typescript
type s = string | number
let str:s = 'LRF '
let s = 123


type cb = () => string

const fn:cb = () => '11123'

type T = 'off' | 'on'

let str2:T = 'off'
```

### never 类型

比如声明一个交叉类型，一个是string,一个是number，这个不可能的类型就会被推断成never类型

```typescript
type bb = string & number // 推断成never

function error(message:string ):never {
  throw new Error(message)
}


interface C {
  type: '保安'
}

interface D{
  type: '巧克力'
}
interface E{
  type: '蛋黄派'
}


type All = C | D | E

function type (val:All) {
  switch(val.type) {
    case '保安': break
    case '巧克力': break
    case '蛋黄派': break
    default :
      const check:never = val
      break
  }
}
```

#### Symbol 

symbol一般用于 对象的唯一值，不能随便获取，修改的属性

```md
 symbol类型的值是通过Symbol构造函数创建的
 可以传递参数作为唯一标识，只支持string和number类型
 symbol类型通过for in |  Object.keys() | Object.getOwnPropertyNames(obj)是拿不到symbol类型的key值
 JSON.parse也是拷贝不到他的数据
 只能通过 Object.getOwnPropertySymbols() | Reflect.ownKeys()拿到他的 key
```

`Reflect.ownKeys()是把对象所有的属相全部列出来,Object.getOwnPropertySymbols()只能拿到symbol类型`

```typescript
let obj = {
  [s]: 'LRF',
  age:18,
  gender: '男'
}


// console.log(obj[s]);

// for (let key in obj) {
//   console.log(key)
// }

// console.log(Object.keys(obj));

// console.log(Object.getOwnPropertyNames(obj));

// console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));
```

#### Symbol.iterator迭代器跟for of 生成器

Symbol.iterato()是一个函数，数组，arguments伪数组，NodeList(document)类数组都有这个方法，对象没有

```typescript
et arr:Array<number> = [3,8,9]

let it:Iterator<number> = arr[Symbol.iterator]()
//it.next()的返回值是{ value: 3, done: false }  如果done为false，则代表下面还有数据，还可以进行遍历


let st:Set<number> = new Set([1,2,3])

type mapTypes = string | number
let m:Map<mapTypes,mapTypes> = new Map()

m.set('1','QQ')
m.set('2','WX')

const fn = (e:any):void => {
  let i:Iterator<any> = e[Symbol.iterator]()
  let next:any = {done:false}
  while(!next.done) {
    next = i.next()
    if(!next.done) {
      console.log(next.value);
    }
  }
}

fn(st)
fn(arr)
fn(m)


// 
```

#### 生成器就是iterator的语法糖 可以直接遍历获取数组的值，对象是不可以的

```typescript
let arr = [1,2,3]
// for of 是直接[Symbol.iterator]()获取他的值，for in 是获取他的下标
for (let i of arr) {
  console.log(i); // 1,2,3
}

for (let i in arr) {
  console.log(i);// 0,1,2
}
```

### 泛型

```typescript
function fanType<T>(name:T):T {
  return name
}

fanType('QQ')
fanType(123)


function fanTypeS<T , U>(name:T, age:U):Array<T|U> {
  return [name,age]
}
fanTypeS('LRF',123)
fanTypeS('LRF',true)
```

### 泛型约束

```typescript
// 泛型约束
interface ILen  {
  length: number
}

function getLength<T extends ILen>(arg:T) {
  // 字符串 数组这些是有length
  return arg.length
}

console.log(getLength('12121'));

function getKey<T, K extends keyof T>(obj:T,key : K) {
  return obj[key]
}

let objK = {
  a:1,
  b:2,
  c:3
}

getKey(objK,'a')
// getKey(objK,'D') // 报错的


class Persons<T> {
  name:T[] = []
  getName(a:T):T[] {
    return [a]
  }
}

let ps = new Persons<string>()

console.log(ps.getName('qwqwq'));

```

## 生成tsconfig.json 文件

这个文件是通过`tsc --init`命令生成的

配置详解

```json
"compilerOptions": {
  "incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
  "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
  "diagnostics": true, // 打印诊断信息 
  "target": "ES5", // 目标语言的版本
  "module": "CommonJS", // 生成代码的模板标准
  "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
  "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
  "allowJS": true, // 允许编译器编译JS，JSX文件
  "checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
  "outDir": "./dist", // 指定输出目录
  "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
  "declaration": true, // 生成声明文件，开启后会自动生成声明文件
  "declarationDir": "./file", // 指定生成声明文件存放目录
  "emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
  "sourceMap": true, // 生成目标文件的sourceMap文件
  "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
  "declarationMap": true, // 为声明文件生成sourceMap
  "typeRoots": [], // 声明文件目录，默认时node_modules/@types
  "types": [], // 加载的声明文件包
  "removeComments":true, // 删除注释 
  "noEmit": true, // 不输出文件,即编译后不会生成任何js文件
  "noEmitOnError": true, // 发送错误时不输出任何文件
  "noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
  "importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
  "downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
  "strict": true, // 开启所有严格的类型检查
  "alwaysStrict": true, // 在代码中注入'use strict'
  "noImplicitAny": true, // 不允许隐式的any类型
  "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
  "strictFunctionTypes": true, // 不允许函数参数双向协变
  "strictPropertyInitialization": true, // 类的实例属性必须初始化
  "strictBindCallApply": true, // 严格的bind/call/apply检查
  "noImplicitThis": true, // 不允许this有隐式的any类型
  "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
  "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
  "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
  "noImplicitReturns": true, //每个分支都会有返回值
  "esModuleInterop": true, // 允许export=导出，由import from 导入
  "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
  "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
  "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
  "paths": { // 路径映射，相对于baseUrl
    // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
    "jquery": ["node_modules/jquery/dist/jquery.min.js"]
  },
  "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
  "listEmittedFiles": true, // 打印输出文件
  "listFiles": true// 打印编译的文件(包括引用的声明文件)
}
 
// 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
"include": [
   "src/**/*"
],
// 指定一个排除列表（include的反向操作）
 "exclude": [
   "demo.ts"
],
// 指定哪些文件使用该配置（属于手动一个个指定文件）
 "files": [
   "demo.ts"
]
```

介绍几个常用的

###### 1.include
指定编译文件默认是编译当前目录下所有的ts文件

######  2.exclude
指定排除的文件

######  3.target
指定编译js 的版本例如es5  es6

######  4.allowJS
是否允许编译js文件

######  5.removeComments
是否在编译过程中删除文件中的注释

######  6.rootDir
编译文件的目录

######  7.outDir
输出的目录

######  8.sourceMap
代码源文件

######  9.strict
严格模式

######  10.module
默认common.js  可选es6模式 amd  umd 等

### 命名空间

我们在工作中无法避免全局变量造成的污染，TypeScript提供了namespace 避免这个问题出现

- 内部模块，主要用于组织代码，避免命名冲突。
- 命名空间内的类默认私有
- 通过 export 暴露
- 通过 namespace 关键字定义
  TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）
  ok，让我们看一个小例子

命名空间中通过export将想要暴露的部分导出

如果不用export 导出是无法读取其值的


```typescript
namespace a {
    export const Time: number = 1000
    export const fn = <T>(arg: T): T => {
        return arg
    }
    fn(Time)
}
 
 
namespace b {
     export const Time: number = 1000
     export const fn = <T>(arg: T): T => {
        return arg
    }
    fn(Time)
}
 
a.Time
b.Time
```

嵌套命名空间

```typescript
namespace a {
    export namespace b {
        export class Vue {
            parameters: string
            constructor(parameters: string) {
                this.parameters = parameters
            }
        }
    }
}
 
let v = a.b.Vue
 
new v('1')
```

抽离命名空间

```
## a.ts
export namespace V {
    export const a = 1
}

b.ts
import {V} from './a.ts'
 
console.log(V);
```

简化命名空间

```
namespace A  {
    export namespace B {
        export const C = 1
    }
}
 
import X = A.B.C
 
console.log(X);
```

合并命名空间

重名的命名空间会合并

### 三斜线指令

三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。

三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。

/// <reference path="..." />指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。

三斜线引用告诉编译器在编译过程中要引入的额外的文件。

你也可以把它理解能import，它可以告诉编译器在编译过程中要引入的额外的文件
`可以把ts.json里面把removeComments解开`

```
// a.ts
namespace A {
    export const fn = () => 'a'
}

//b.ts
namespace A {
    export const fn2 = () => 'b'
}
index.ts

引入之后直接可以使用变量A

///<reference path="./index2.ts" />
///<reference path="./index3.ts" />
 
 
console.log(A);
```

声明文件引入

例如，把 /// <reference types="node" />引入到声明文件，表明这个文件使用了 @types/node/index.d.ts里面声明的名字； 并且，这个包需要在编译阶段与声明文件一起被包含进来。

仅当在你需要写一个d.ts文件时才使用这个指令。

```
///<reference types="node" />
```

::: tip

注意事项：

如果你在配置文件 配置了noResolve 或者自身调用自身文件会报错

:::

