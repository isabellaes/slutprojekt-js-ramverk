import { ReactNode } from "react";
import Card from "../card/Card";
import "./list.scss";

type ListPropsType = {
  direction: "row" | "column";
  children: ReactNode;
};

const List = ({ direction, children }: ListPropsType) => {
  return (
    <div className={direction === "row" ? "list row" : "list column"}>
      {children}
    </div>
  );
};

export default List;
