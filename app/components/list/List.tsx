import { ReactNode } from "react";
import Card from "../card/Card";
import "./list.scss";

type ListPropsType = {
  direction: "row" | "column";
  children: ReactNode;
};

const List = ({ direction, children }: ListPropsType) => {
  return <div className="list">{children}</div>;
};

export default List;
