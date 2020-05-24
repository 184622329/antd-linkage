import React from 'react';
import { Form, Input, Select, Switch, Radio } from 'antd';
import Linkage from 'antd-linkage';

export default () => {

  return <div>
    <Linkage>
      <Form initialValues={{ include: [], size: "1", switch: false }}>
        <Form.Item label="确认开启" name="switch1" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="大小" name="size">
          <Radio.Group>
            <Radio.Button value="1">小</Radio.Button>
            <Radio.Button value="2">中</Radio.Button>
            <Radio.Button value="3">大</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="新增" name="equal1">
          <Select mode="multiple">
            <Select.Option value="1">账号</Select.Option>
            <Select.Option value="2">密码</Select.Option>
            <Select.Option value="3">邮箱</Select.Option>
          </Select>
        </Form.Item>
        <Linkage.Item bindfield={[
          { field: 'switch1', value: true },
          { field: 'size', value: "1", mode: "no" },
          { field: 'equal1', value: ["1", "2"], mode: "equal" },
        ]}>
          <Form.Item
            label="用户"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </Linkage.Item>
      </Form>
    </Linkage>
  </div>
}