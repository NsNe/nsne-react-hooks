---
order: 1
nav:
  title: 快速上手
  order: 1
---

# 快速上手

nsne-react-hooks 是一个 React Hooks 库

## 安装

```
# npm 安装
npm install nsne-react-hooks --save

# yarn 安装
yarn add nsne-react-hooks
```

## 使用

```
import {useToggle} from 'react-use';

const Demo = () => {
  const [on, toggle] = useToggle(true);

  return (
    <div>
      <div>{on ? 'ON' : 'OFF'}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
};
```

## 按需加载

可以使用 babel-plugin-import 来进行按需加载。

