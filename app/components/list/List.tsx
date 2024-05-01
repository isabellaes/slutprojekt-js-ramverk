import { ReactNode } from "react";
import "./list.scss";

type ListPropsType = {
  items: ReactNode[];
};

const List = (items: ListPropsType) => {
  return (
    <ul className="list">
      {items.items.map((i) => {
        return <li>{i}</li>;
      })}
    </ul>
  );
};

export default List;
