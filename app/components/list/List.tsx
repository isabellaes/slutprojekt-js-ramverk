import { ReactNode } from "react";
import style from "./list.module.scss";

type ListPropsType = {
  children: ReactNode;
  space: "evenly" | "between";
};

const List = ({ children, space }: ListPropsType) => {
  return <div className={style.list}>{children}</div>;
};

export default List;
