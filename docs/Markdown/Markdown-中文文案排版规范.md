# Markdown 中文文案排版规范

统一中文文案、排版的相关用法，降低团队成员之间的沟通成本，增强网站气质。


* * *

## 空格

### 中英文之间需要增加空格

正确：

> 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。

错误：

> 在LeanCloud上，数据存储是围绕`AVObject`进行的。
> 
> 在 LeanCloud上，数据存储是围绕`AVObject` 进行的。

完整的正确用法：

> 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。每个 `AVObject` 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 `AVObject` 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。
例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。

### 中文与数字之间需要增加空格


正确：

> 今天出去买菜花了 5000 元。

错误：

> 今天出去买菜花了 5000元。
>
> 今天出去买菜花了5000元。

### 中英文字符与全角标点符号之间不要留空格。

正确：

> 他的电脑是 MacBook Air。

错误：

> 他的电脑是 MacBook Air 。


### 数字与单位之间需要增加空格

正确：

> 我家的光纤入屋宽带有 10 Gbps，SSD 一共有 20 TB

错误：

> 我家的光纤入屋宽带有 10Gbps，SSD 一共有 20TB

例外：度数／百分比与数字之间不需要增加空格：

正确：

> 角度为 90° 的角，就是直角。
>
> 新 MacBook Pro 有 15% 的 CPU 性能提升。

错误：

> 角度为 90 ° 的角，就是直角。
>
> 新 MacBook Pro 有 15 % 的 CPU 性能提升。

### 全角标点与其他字符之间不加空格

正确：

> 刚刚买了一部 iPhone，好开心！

错误：

> 刚刚买了一部 iPhone ，好开心！
>
> 刚刚买了一部 iPhone， 好开心！


## 标点符号

### 不重复使用标点符号

即使中国大陆的标点符号用法允许重复使用标点符号，但是这么做会破坏句子的美观性。

正确：

> 德国队竟然战胜了巴西队！
>
> 她竟然对你说「喵」？！

错误：

> 德国队竟然战胜了巴西队！！
>
> 德国队竟然战胜了巴西队！！！！！！！！
>
> 她竟然对你说「喵」？？！！
>
> 她竟然对你说「喵」？！？！？？！！
> 
## 全角和半角

不明白什么是全角（全形）与半角（半形）符号？请查看维基百科条目『[全角和半角](https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2)』。

### 使用全角中文标点

正确：

> 嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！
>
> 核磁共振成像（NMRI）是什么原理都不知道？JFGI！

错误：

> 嗨! 你知道嘛? 今天前台的小妹跟我说 "喵" 了哎！
>
> 嗨!你知道嘛?今天前台的小妹跟我说"喵"了哎！
>
> 核磁共振成像 (NMRI) 是什么原理都不知道? JFGI!
>
> 核磁共振成像(NMRI)是什么原理都不知道?JFGI!

### 数字使用半角字符

正确：

> 这个蛋糕只卖 1000 元。

错误：

> 这个蛋糕只卖 １０００ 元。
例外：在设计稿、宣传海报中如出现极少量数字的情形时，为方便文字对齐，是可以使用全角数字的。

### 遇到完整的英文整句、特殊名词，其内容使用半角标点

正确：

> 乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」
>
> 推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。

错误：

> 乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」
>
> 推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

## 名词

### 专有名词使用正确的大小写

大小写相关用法原属于英文书写范畴，不属于本 wiki 讨论内容，在这里只对部分易错用法进行简述。

正确：

> 使用 GitHub 登录
>
> 我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。

错误：

> 使用 github 登录
>
> 使用 GITHUB 登录
>
> 使用 Github 登录
>
> 使用 gitHub 登录
>
> 使用 gｲんĤЦ8 登录
>
> 我们的客户有 github、foursquare、microsoft corporation、google、facebook, inc.。
>
> 我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK, INC.。
>
> 我们的客户有 Github、FourSquare、MicroSoft Corporation、Google、FaceBook, Inc.。
>
> 我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook, Inc.。
>
> 我们的客户有 gｲんĤЦ8、ｷouЯƧquﾑгє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к, IПᄃ.。


### 不要使用不地道的缩写

正确：

> 我们需要一位熟悉 TypeScript、HTML5，至少理解一种框架（如 React、Next.js）的前端开发者。

错误：

> 我们需要一位熟悉 Ts、h5，至少理解一种框架（如 RJS、nextjs）的 FED。

## 标题

### 层级

标题分为四级：

- 一级标题：文章的标题
- 二级标题：文章主要部分的大标题
- 三级标题：二级标题下面一级的小标题
- 四级标题：三级标题下面某一方面的小标题

下面是示例：

```md
# 一级标题

## 二级标题

### 三级标题

#### 四级标题
```

### 原则

**（1）一级标题下，不能直接出现三级标题。**

示例：下面的文章结构，缺少二级标题。

```md
# 一级标题

### 三级标题
```

**（2）标题要避免孤立编号（即同级标题只有一个）。**

示例：下面的文章结构，`二级标题 A` 只包含一个三级标题，完全可以省略 `三级标题 A`。

```md
## 二级标题 A

### 三级标题 A

## 二级标题 B
```

（3）下级标题不重复上一级标题的名字。

示例：下面的文章结构，二级标题与下属的三级标题同名，建议避免。

```md
## 概述

### 概述
```

**（4）谨慎使用四级标题，尽量避免出现，保持层级的简单，防止出现过于复杂的章节。**

如果三级标题下有并列性的内容，建议只使用项目列表（Item list）。

示例：下面的结构二要好于结构一。结构一适用的场景，主要是较长篇幅的内容。


```md
结构一

### 三级标题

#### 四级标题 A

#### 四级标题 B

#### 四级标题 C

结构二

### 三级标题

**（1）A**

**（2）B**

**（3）C**
```

## 段落

### 原则

- 段落之间使用一个空行隔开。
- 段落开头不要留出空白字符。
- 一个段落只能有一个主题，或一个中心句子。
- 段落的中心句子放在段首，对全段内容进行概述。后面陈述的句子为核心句服务。
- 一个段落的长度不能超过七行，最佳段落长度小于等于四行。
- 段落的句子语气要使用陈述和肯定语气，避免使用感叹语气。

### 引用

引用第三方内容时，应注明出处。

> One man’s constant is another man’s variable. — Alan Perlis


如果是全篇转载，请在全文开头显著位置注明作者和出处，并链接至原文。

> 本文转载自 WikiQuote
使用外部图片时，必须在图片下方或文末标明来源。

> 本文部分图片来自 Wikipedia

## 文档体系

### 结构

软件手册是一部完整的书，建议采用下面的结构。

- **简介**（Introduction）：[必备] [文件] 提供对产品和文档本身的总体的、扼要的说明
- **快速上手**（Getting Started）：[可选] [文件] 如何最快速地使用产品
- **入门篇**（Basics）：[必备] [目录] 又称“使用篇”，提供初级的使用教程
  - **环境准备**（Prerequisite）：[必备] [文件] 软件使用需要满足的前置条件
  - **安装**（Installation）：[可选] [文件] 软件的安装方法
  - **设置**（Configuration）：[必备] [文件] 软件的设置
- **进阶篇**（Advanced)：[可选] [目录] 又称“开发篇”，提供中高级的开发教程
- **API**（Reference）：[可选] [目录|文件] 软件 API 的逐一介绍
- **FAQ**：[可选] [文件] 常见问题解答
- **附录**（Appendix）：[可选] [目录] 不属于教程本身、但对阅读教程有帮助的内容
  - **Glossary**：[可选] [文件] 名词解释
  - **Recipes**：[可选] [文件] 最佳实践
  - **Troubleshooting**：[可选] [文件] 故障处理
  - **ChangeLog**：[可选] [文件] 版本说明
  - **Feedback**：[可选] [文件] 反馈方式

下面是两个真实范例，可参考。

- [Redux 手册](https://redux.js.org/introduction/getting-started)
- [Atom 手册](http://flight-manual.atom.io/)

### 文件名

文档的文件名不得含有空格。

文件名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。

```
错误：名词解释.md
正确：glossary.md
```

文件名建议只使用小写字母，不使用大写字母。

```
错误：TroubleShooting.md
正确：troubleshooting.md
```

为了醒目，某些说明文件的文件名，可以使用大写字母，比如 `README`、`LICENSE`。

文件名包含多个单词时，单词之间建议使用半角的连词线（`-`）分隔。

```
不佳：advanced_usage.md
正确：advanced-usage.md
```

## 参考链接

- [产品手册中文写作规范](https://www.taodocs.com/p-51273.html), by 华为
- [写作规范和格式规范](http://guide.daocloud.io/dcs/%E5%86%99%E4%BD%9C%E8%A7%84%E8%8C%83%E5%92%8C%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83-9153803.html), by DaoCloud
- [技术写作技巧在日汉翻译中的应用](http://www.hitachi-tc.co.jp/company/thesis/thesis.pdf), by 刘方
- [简体中文规范指南](https://www.lengoo.de/documents/styleguides/lengoo_styleguide_ZH.pdf), by lengoo
- [文档风格指南](https://open.leancloud.cn/copywriting-style-guide.html), by LeanCloud
- [豌豆荚文案风格指南](https://docs.google.com/document/d/1R8lMCPf6zCD5KEA8ekZ5knK77iw9J-vJ6vEopPemqZM/edit), by 豌豆荚
- [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines), by sparanoid
- [中文排版需求](http://w3c.github.io/clreq/), by W3C
- [为什么文件名要小写？](http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html), by 阮一峰
- [Google Developer Documentation Style Guide](https://developers.google.com/style/), by Google
- [出版物上数字用法的规定（国家标准GBT15835－2011）](http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091154536.pdf)
- [GB 3100-1993 国际单位制及其应用](https://zh.wikisource.org/zh-hans/GB_3100-1993_%E5%9B%BD%E9%99%85%E5%8D%95%E4%BD%8D%E5%88%B6%E5%8F%8A%E5%85%B6%E5%BA%94%E7%94%A8)