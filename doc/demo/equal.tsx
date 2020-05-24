import React from 'react';
import { Form, Input, Select } from 'antd';
import Linkage from 'antd-linkage';

export default () => {

  return <div>
    <Linkage>
      <Form initialValues={{ include: [] }}>
        <Form.Item label="新增" name="equal">
          <Select mode="multiple">
            <Select.Option value="1">账号</Select.Option>
            <Select.Option value="2">密码</Select.Option>
            <Select.Option value="3">邮箱</Select.Option>
          </Select>
        </Form.Item>
        <Linkage.Item bindfield={[ { field: 'equal', value: ["1", "2"], mode: 'equal' } ]}>
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