# Markdown-语法

## 小标题

```md
# 这是小标题 1 
## 这是小标题 2 
### 这是小标题 3 
#### 这是小标题 4 
##### 这是小标题 5 
###### 这是小标题 6

```
# 这是小标题 1 
## 这是小标题 2 
### 这是小标题 3 
#### 这是小标题 4 
##### 这是小标题 5 
###### 这是小标题 6

## 强调

```md
*这是斜体示例*
_这是斜体的另一种写法_
```

*这是斜体示例*
_这是斜体的另一种写法_


```md
**这是粗体示例**
__这是粗体的另一种写法__
```

**这是粗体示例**  
**这是粗体的另一种写法**


```md
_你也**可以**将它们配合使用_
```

_你也**可以**将它们配合使用_


## 列表

```md
- 项目 1
- 项目 2
	- 项目 2a
	- 项目 2b

1. 项目 1
1. 项目 2
1. 项目 3
   1. 项目 3a
   1. 项目 3b
```

- 项目 1
- 项目 2
	- 项目 2a
	- 项目 2b

1. 项目 1
1. 项目 2
1. 项目 3
   1. 项目 3a
   1. 项目 3b


## 图片

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)


## 引用

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961


## 行内代码

```md
一行中被 `反引号` 括起来的文字会以代码格式显示。
```

一行中被 反引号 括起来的文字会以代码格式显示。

## 代码块

将六个反引号括起来的内容识别为代码块，并将其按代码格式显示。代码块支持语法高亮功能，你可以在代码块的第一行（即开头处的反引号后）声明语言来使用特定的语法高亮。

```
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

## 任务列表

```md
- [x] 支持 #标签 ，[链接](https://blog.qyun.fun)，**样式**
- [x] 要求包含列表标志（有序表无序表均可，比如 `1.[x]` 同样可以）
- [x] 这是一个已经完成的项目
- [?] 这也是一个已完成的项目（实际上你可以在其中使用任何字符）
- [ ] 这是一个未完成的项目
- [ ] 在预览模式下单击选框可以切换项目完成状态
```

- [x] 支持 #标签 ，[链接](https://blog.qyun.fun)，**样式**
- [x] 要求包含列表标志（有序表无序表均可，比如 `1.[x]` 同样可以）
- [x] 这是一个已经完成的项目
- [?] 这也是一个已完成的项目（实际上你可以在其中使用任何字符）
- [ ] 这是一个未完成的项目
- [ ] 在预览模式下单击选框可以切换项目完成状态


## 表格

你可以使用 - 来分割表格的标题行和内容行，使用 | 来指定不同的列：

```md
| 标题1          | 标题2          |
| -------------- | -------------- |
| 单元格11的内容 | 单元格12的内容 |
| 单元格21的内容 | 单元格22的内容 |
```

| 标题1          | 标题2          |
| -------------- | -------------- |
| 单元格11的内容 | 单元格12的内容 |
| 单元格21的内容 | 单元格22的内容 |

| 列宽可以通过冒号来进行调整  | 这样你就可以在标题行中输入长标题  |
| :-------- | :--------------: |	
| 因为 `:` 的存在 | 不同列将有不同的列宽 |
	

你可以在表格中添加链接，因为链接能在表格中正确显示。但如果你的链接中包含 |，则需要对其进行转义（用 `\|` 代替 `|`），以防止链接中的竖线被错误识别为列分隔符。

如果你在列表中添加链接，他们可以正常的显示与使用。但如果使用的是竖线链接，则需要在竖线前面加上 \ 来进行转义，防止表格错乱。

```md
| 标题1                      | 标题2              |
| -------------------------- | ------------------ |
| [[格式化你的笔记\|格式化]] | [[快捷键\|快捷键]] |
```

| 标题1                      | 标题2              |
| -------------------------- | ------------------ |
| [[格式化你的笔记\|格式化]] | [[快捷键\|快捷键]] |

## 删除线

```md
在文字两端加上波浪线将会显示为删除效果，比如~~这样~~。
```

在文字两端加上波浪线将会显示为删除效果，比如~~这样~~。

## 高亮(不支持)

```md
使用两个等号来对文本进行高亮==文本==。
```

使用两个等号来对文本进行高亮==文本==。

## 脚注(不支持)

	
## 数学公式(不支持)
```md
$$\begin{vmatrix}a & b\\
c & d
\end{vmatrix}=ad-bc$$
```


## 注释(不支持)

所谓注释，指的是会在编辑模式中显示，但不会在预览模式中显示的内容。使用`%%`可以将内容变为注释。以下为语法：
```md
这里是行内注释：%%预览模式下你将看不到这句话%%

这里是跨行注释：
%%
所谓跨行
就是可以有很多行
%%
```
这里是行内注释：%%预览模式下你将看不到这句话%%

这里是跨行注释：
%%
所谓跨行
就是可以有很多行
%%

## 图表(不支持)



