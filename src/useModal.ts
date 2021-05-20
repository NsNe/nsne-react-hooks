import { useState } from 'react';
import useBoolean from './useBoolean';

const useModal = <T>(
  visible: boolean = false,
  initData?: T,
): {
  visible: boolean;
  data?: T;
  open: (data?: T) => void;
  close: () => void;
} => {
  const [state, toggle] = useBoolean(visible);
  const [data, setData] = useState<T | undefined>(initData);

  const open = (data?: T) => {
    toggle(true);
    setData(data);
  };

  const close = () => {
    toggle(false);
  };

  return {
    visible: state,
    data,
    open,
    close,
  };
};

export default useModal;
