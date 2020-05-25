import React, { useState, useEffect } from 'react';
import { isUndefined, isFunction, IsBindContrast, isObject } from './util';
export interface LinkageProps {
  children: React.ReactElement;
  onValuesChange?: () => {};
}

export interface Bindfield {
  field?: string;
  value?: string | string[];
  mode?: string;
}

export interface LinkageItemProps {
  setElement?: (name: string, inspect: (param: any) => void) => void;
  children?: React.ReactElement;
  bindfield?: Bindfield[];
  initialValues?: {
    [name: string]: any;
  };
}

/**
 * 联动操作
 * @param prop
 */
const LinkageItem = (prop: LinkageItemProps) => {
  const [state, setState] = useState(true);
  const { bindfield = [], initialValues = {}, children = {} } = prop;
  const inspect = (allFields: any) => {
    let isShow = true;
    bindfield.forEach(item => {
      const value = allFields[item.field || ''];
      const isbind = IsBindContrast(value, item.value || '', item.mode || '');
      if (!isbind) {
        isShow = false;
      }
    });
    setState(isShow);
  };

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const { props }: any = children;
    if (prop.setElement && isFunction(prop.setElement)) {
      prop.setElement(props.name, inspect);
    }
    // 初始化的时候检查下函数
    inspect(initialValues);
  }, []);

  // 隐藏组件
  if (!state) {
    return null;
  }

  const Component: any = children;

  return Component;
};

/**
 * 字段联动
 * @param props
 */
const Linkage = (props: LinkageProps) => {
  const childrenProps = props.children;
  const checkField: string[] = [];
  let allSetData: { [key: string]: (param: any) => void } = {};
  // 判断子元素是否是多个
  if (Array.isArray(childrenProps)) {
    throw new Error('A child element can only be a single element form');
  }

  useEffect(() => {
    return () => {
      allSetData = {};
    };
  });

  const { children, initialValues } = childrenProps.props;
  const setElement = (name: React.ReactText, inspect: (param: any) => void) => {
    if (isUndefined(allSetData[name])) {
      allSetData[name] = inspect;
    }
  };

  // 对组件赋能
  const newChildren = children.map((item: any, key: number) => {
    if (!isObject(item)) {
      return item;
    }
    const { bindfield } = item.props;
    if (Array.isArray(bindfield)) {
      const son = item.props.children;
      const name = son.props.name || false;
      if (son && name) {
        checkField.push(name);
      }

      return React.cloneElement(
        <LinkageItem
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          setElement={setElement}
          initialValues={initialValues}
        />,
        item.props,
      );
    }
    return item;
  });

  // 当表单change的时候触发
  const onValuesChange = (changedFields: any, allFields: any) => {
    // 调用来函数还有要函数返回
    if (isFunction(childrenProps.props.onValuesChange)) {
      childrenProps.props.onValuesChange(changedFields, allFields);
    }

    // 开始数据监控
    checkField.forEach(value => {
      if (isFunction(allSetData[value])) {
        allSetData[value](allFields);
      }
    });
  };

  const param = {
    ...childrenProps.props,
    onValuesChange,
  };
  return React.cloneElement(childrenProps, param, newChildren);
};

Linkage.Item = (props: LinkageItemProps): React.ReactElement | null =>
  props.children || null;

export default Linkage;
