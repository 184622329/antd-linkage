---
title: 介绍
order: 1
---

## 介绍

> 主要用于解决在写 antd `Form` 组件，我们需要动态去控制某些字段的隐藏时候
> 文件也非常的小仅有 `20 kB` 以内

```tsx | inline
import React from 'react';
import GitHubButton from 'react-github-btn';

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <GitHubButton
        href="https://github.com/yubin-code/antd-linkage"
        data-size="large"
        data-show-count
        aria-label="Star yubin-code/antd-json-form on GitHub"
      >
        Star
      </GitHubButton>
      <div
        style={{
          margin: '0 8px',
        }}
      />
      <GitHubButton
        href="https://github.com/yubin-code/antd-linkage/issues"
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-size="large"
        data-show-count="true"
        aria-label="Issue yubin-code/antd-json-form on GitHub"
      >
        Issue
      </GitHubButton>
    </div>
  </div>
);
```

## 安装

```bash
npm i antd-linkage --save
# or
yarn add antd-linkage --save
```

## 例如

> 当勾选 `填写邮箱` 的时候显示邮箱

<code src="./demo/demo1.tsx" />
