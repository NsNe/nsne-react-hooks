---
title: useModal
order: 3
nav:
  title: hooks
  path: /hooks
---

# useModal

```tsx
import React from 'react';
import { Modal, Button } from 'antd';
import { useModal } from 'nsne-react-hooks';

export default () => {
  const { visible, data, open, close } = useModal<string>();
  const modal2 = useModal<string>();

  return (
    <div>
      <Button
        type="primary"
        onClick={() => open()}
        style={{ marginRight: '14px' }}
      >
        open Modal
      </Button>
      <Button
        type="dashed"
        onClick={() => modal2.open('编辑')}
        style={{ marginRight: '14px' }}
      >
        open Modal with data
      </Button>
      <Modal visible={visible} onCancel={close} title="modal"></Modal>
      <Modal
        visible={modal2.visible}
        onCancel={modal2.close}
        title={modal2.data}
      ></Modal>
    </div>
  );
};
```
