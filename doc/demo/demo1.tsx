import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Linkage from 'antd-linkage';

export default () => {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


  return <div>
    <Linkage>
      <Form
        {...layout}
        initialValues={{ remember: false }}
      >
        <Form.Item
          label="用户"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>填写邮箱</Checkbox>
        </Form.Item>
  
        <Linkage.Item bindfield={[ { field: 'remember', value: true } ]}>
          <Form.Item label="邮箱" name="mail">
            <Input />
          </Form.Item>
        </Linkage.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Linkage>
  </div>
}