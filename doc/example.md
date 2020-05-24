---
title: 例子
order: 2
---

## 基本用法
使用 `Linkage` 标签包括 `antd` 的 `form` 标签在需要做校验的地方使用 `Linkage.Item` 包裹

#### 例如

```javascript
<Linkage>
  <Form>
    <Linkage.Item bindfield={[ { field: 'switch', value: true } ]}>
      <Form.Item label="用户名" name="name">
        <Input placeholder="请输入用户名" />
      </Form.Item>
    </Linkage.Item>
  </Form>
</Linkage>
```

## 字段联动
在 `Linkage.Item` 参数中提供 `bindfield` 字段用于联动表单

## 参数 bindfield

> `bindfield` 是一个数组可以关联多个字段

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| field | `"string"` | 被关联的字段名称 |
| value | `"string"`,`"number"`,`"array"` | 关联字段的值 |
| mode | `no｜equal｜null` | `默认`是联动模式 `no` 模式为不匹配 `equal` 模式需完全匹配 |


## 默认模式

<code src="./demo/default.tsx" />


## no 不匹配模式

> 当值为 `系统管理员` 的时候可以填写用户名密码  
> 当值为 `普通管理员` 的时候只能添加用户名  
> 当值为 `游客` 的时候都不可添加

<code src="./demo/one.tsx" />

## 包含关系

> 只要包含 `账号` 则显示

<code src="./demo/include.tsx" />


## equal 完全匹配模式

> 两个值必须完成相等才能完成匹配包括数组，当`账号`和`密码`都被选中的时候完成匹配

<code src="./demo/equal.tsx" />

## 三种模式同时使用

> 下面成立条件为 `开启`，大小不为`小` 选项 `账号`, `密码` 条件成立

<code src="./demo/all.tsx" />
