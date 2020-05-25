[查看文档](https://yubin-code.github.io/antd-linkage/)

## 基本用法

使用 `Linkage` 标签包裹 `antd` 的 `Form` 标签在需要做校验的地方使用 `Linkage.Item` 包裹

#### 例如

```javascript
<Linkage>
  <Form>
    <Linkage.Item bindfield={[{ field: 'switch', value: true }]}>
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

| 字段  | 类型                            | 描述                                                      |
| ----- | ------------------------------- | --------------------------------------------------------- |
| field | `"string"`                      | 被关联的字段名称                                          |
| value | `"string"`,`"number"`,`"array"` | 关联字段的值                                              |
| mode  | `no｜equal｜null`               | `默认`是联动模式 `no` 模式为不匹配 `equal` 模式需完全匹配 |
