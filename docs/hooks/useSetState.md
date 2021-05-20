---
title: useSetState
nav:
  title: hooks
  path: /hooks
---

# useSetState

```tsx
import React from 'react';
import { Button } from 'antd';
import { useSetState } from 'nsne-react-hooks';

export default () => {
  const [state, setState] = useSetState<{
    value1: number;
    value2: number;
  }>({
    value1: 1,
    value2: 1,
  });

  return (
    <>
      <div>
        <div>{JSON.stringify(state)}</div>
        <Button
          onClick={() =>
            setState(prevState => ({ value1: prevState.value1 + 1 }))
          }
          type="primary"
        >
          add value1
        </Button>
        <Button
          onClick={() =>
            setState(prevState => ({ value2: prevState.value2 + 1 }))
          }
          type="primary"
          style={{ margin: '14px' }}
        >
          add value2
        </Button>
      </div>
      <div>
        <Button onClick={() => setState({ value1: 1 })}>reset value1</Button>
        <Button
          onClick={() => setState({ value2: 1 })}
          style={{ margin: '14px' }}
        >
          reset value2
        </Button>
        <Button
          onClick={() => setState({ value1: 1, value2: 1 })}
          type="danger"
        >
          reset all value
        </Button>
      </div>
    </>
  );
};
```
