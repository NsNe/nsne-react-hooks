---
title: usePrevious
order: 4
nav:
  title: hooks
  path: /hooks
---

# usePrevious

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { usePrevious } from 'nsne-react-hooks';

export default () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <Button onClick={() => setCount(count + 1)}>
        add count
      </Button>
    </>
  );
};
```
