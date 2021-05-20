---
title: useToggle
nav:
  title: hooks
  path: /hooks
---

# useToggle


```tsx
import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'nsne-react-hooks';

export default () => {
  const [toggle, setToggle] = useToggle(true);

  return (
    <div>
      <div>{toggle ? 'true' : 'false'}</div>
      <Button type="primary" onClick={setToggle}>Toggle</Button>
      <Button onClick={() => setToggle(true)} style={{ margin: '0 14px' }}>set true</Button>
      <Button onClick={() => setToggle(false)}>set false</Button>
    </div>
  );
};

```

