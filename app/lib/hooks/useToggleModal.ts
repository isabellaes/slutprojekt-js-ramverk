import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [open, setToggle] = useState<boolean>(defaultValue);

  const toggle = () => {
    if (open) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return { open, toggle };
};
