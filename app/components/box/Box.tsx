import { ReactNode } from "react";
import style from "./box.module.scss";

type BoxProps = {
  children: ReactNode;
};

const Box = ({ children }: BoxProps) => {
  return <div className={style.box}>{children}</div>;
};

export default Box;
