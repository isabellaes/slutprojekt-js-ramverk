import { ReactNode } from "react";
import Card from "../card/Card";
import "./list.scss";

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
