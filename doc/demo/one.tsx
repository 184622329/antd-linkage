import React from 'react';
import { Form, Input, Select } from 'antd';
import Linkage from 'antd-linkage';

export default () => {

  return <div>
    <Linkage>
      <Form initialValues={{ select: "3" }}>
        <Form.Item label="新增" name="select">
          <Select>
            <Select.Option value="1">系统管理员</Select.Option>
            <Select.Option value="2">普通管理员</Select.Option>
            <Select.Option value="3">游客</Select.Option>
          </Select>
        </Form.Item>
        <Linkage.Item bindfield={[ { field: 'select', value: "3", mode: "no" } ]}>
          <Form.Item
            label="用户"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </Linkage.Item>
        <Linkage.Item bindfield={[ { field: 'select', value: ["3", "2"], mode: "no" } ]}>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </Linkage.Item>
      </Form>
    </Linkage>
  </div>
}