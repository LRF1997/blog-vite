# TypeScript 快速开始

## 安装TypeScript

```shell
npm install -g typescript
```

> 查看版本命令 `tsc -v`

## 执行 `.ts` 文件

1. 编译 `.ts` 文件

```ps
tsc xx.ts
```
> `xx` 为 `ts` 文件的名称

2. 运行生成的 `js` 文件

```ps
node xx.js
```

> 以上方法每次都要手动编译，再执行生成的 `js` 文件，比较麻烦。为了方便开发，需要使用快速执行方法。

### 快速执行

1. 全局安装 `ts-node`

```ps
npm install -g ts-node
```

2. 执行命令

```ps
ts-node xx.ts
```

> 安装好  `ts-node` 后，每次可以通过 `ts-node xx.ts` 命令快速执行。



