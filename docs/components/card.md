# Card 卡片

## 基本使用

`title` 属性可以配置卡片的标题

<f-card title="卡片标题">Card 卡片</f-card>

::: details 显示代码

```html
<f-card title="卡片标题">Card 卡片</f-card>
```

:::

## 圆角卡片

`round` 是否为圆角卡片

<f-card round>Card 卡片</f-card>

::: details 显示代码

```html
<f-card round>Card 卡片</f-card>
```

:::

## 不同状态

`shadow` 属性可以配置阴影样式

<f-card shadow="never">从不显示</f-card>
<f-card shadow="hover">Hover 显示</f-card>
<f-card shadow="always">一直显示</f-card>

::: details 显示代码

```html
<f-card shadow="never">从不显示</f-card>
<f-card shadow="hover">Hover 显示</f-card>
<f-card shadow="always">一直显示</f-card>
```

:::

## Attributes

| 参数      | 说明           | 类型    | 可选值                   | 默认值 |
| --------- | -------------- | ------- | ------------------------ | ------ |
| `title`   | 卡片标题       | string  | ——                       | ——     |
| `round`   | 是否为圆角卡片 | boolean | ——                       | false  |
| `padding` | 卡片内边距     | string  | ——                       | 20px   |
| `shadow`  | 阴影样式       | string  | `never` `hover` `always` | always |
