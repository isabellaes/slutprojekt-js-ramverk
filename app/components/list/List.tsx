import { ReactNode } from "react";
import "./list.module.scss";

type ListPropsType = {
  children: ReactNode;
  space: "evenly" | "between";
};

const List = ({ children, space }: ListPropsType) => {
  return (
    <div
      className={
        space === "between" ? "list row space-between" : "list row space-evenly"
      }
    >
      {children}
    </div>
  );
};

export default List;
