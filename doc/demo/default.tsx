import React from 'react';
import { Form, Input, Switch } from 'antd';
import Linkage from 'antd-linkage';

export default () => {

  return <div>
    <Linkage>
      <Form>
        <Form.Item label="添加地址" name="switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Linkage.Item bindfield={[ { field: 'switch', value: true } ]}>
          <Form.Item label="地址" name="mail">
            <Input placeholder="请输入地址" />
          </Form.Item>
        </Linkage.Item>
      </Form>
    </Linkage>
  </div>
}